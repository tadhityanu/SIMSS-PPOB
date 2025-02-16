import { Avatar, Button, Card, Col, Flex, List, Row, Skeleton, Spin, Typography } from "antd"
import { useEffect, useState } from "react";
import { getTransactionHistoryAction, unmountTransactionHistory } from "../../redux/action/Transaction/transactionAction";
import { useDispatch } from "react-redux";
import { idrFormatter } from "../../utils/CurrencyFormat";
import { formatDate, formatTime } from "../../utils/dateFormater";

const { Text } = Typography

const TransactionLayout = () => {

    const dispatch = useDispatch()

    const [initLoading, setInitLoading] = useState(true);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [list, setList] = useState([]);

    const [offset, setOffset] = useState(0)
    const [limit, setLimit] = useState(5)

    useEffect(() => {
        fetchTransactions();

        return () => dispatch(unmountTransactionHistory(offset, limit)); // Clean-up on unmount
    }, [dispatch, offset]);

    const fetchTransactions = () => {
        const params = { offset, limit };
        setLoading(true);

        dispatch(getTransactionHistoryAction(params, (resp) => {
            setList((prevList) => [...prevList, ...resp.data.records])
            setInitLoading(false);
            setLoading(false);
        }));
    };

    const loadMore = () => {
        setOffset((prevOffset) => prevOffset + limit); // Increase offset for next page
    };

    const textColorHandler = (type) => {
        if(type === "TOPUP"){
            return 'green'
        } else {
            return 'red'
        }
    }
    return (
        <Row justify="center" style={{ padding: 20 }}>
            <Col span={24}>
                {initLoading ? (
                    <Spin size="large" />
                ) : (
                    <List
                        itemLayout="vertical"
                        dataSource={list}
                        renderItem={(item) => (
                            <List.Item key={item.id}>
                                <Row>
                                    <Col span={24} style={{padding:12, border:'1px solid', borderRadius:12, borderColor:'#B0B0B0'}}>
                                        <Flex justify="space-between" align="center">
                                            <Col>
                                                <Text type={textColorHandler(item.transaction_type)} style={{fontSize:24, fontWeight:600}}>{item.transaction_type === "TOPUP" ? "+" : "-"} {idrFormatter(item.total_amount)}</Text>
                                                <Flex gap={12}>
                                                    <Text style={{fontSize:12, fontWeight:500}}>{formatDate(item.created_on)}</Text>
                                                    <Text style={{fontSize:12, fontWeight:500}}>{formatTime(item.created_on)} WIB</Text>
                                                </Flex>
                                            </Col>
                                            <Col>
                                                <Text type="grey" style={{fontSize:12, fontWeight:500}}>{item.description}</Text>
                                            </Col>
                                        </Flex>
                                    </Col>
                                </Row>
                            </List.Item>
                        )}
                    />
                )}

                {/* Load More Button */}
                <Row justify="center" style={{ marginTop: 20 }}>
                    <Col>
                        <Button type="borderless-red" onClick={loadMore} loading={loading} disabled={loading}>
                            {loading ? "Loading..." : "Show More"}
                        </Button>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
};

export default TransactionLayout;