import { Col, Flex, Image, Layout, Row, Typography } from "antd"
import { Logo } from "../../assets/image"
import { Link } from "react-router"

const { Text } = Typography

const HeaderPage = (props) => {
    const {
        pageItem
    } = props

    console.log(pageItem);

    return (
        <Layout.Header style={{ backgroundColor: '#ffff', width: '100vw', borderBottom: "1px solid", borderBottomColor: "#dbdbdb" }}>
            <Row style={{ justifyContent: "center", alignItems: "center" }}>
                <Col span={21} style={{ justifyContent: "center" }}>
                    <Flex justify="space-between">
                        <Flex gap={8} align="center" justify="center">
                            <Image style={{ width: "18px", height: '18px' }} src={Logo} preview={false} />
                            <Text style={{ fontSize: "14px", fontWeight: '500' }}>SIMS PPOB</Text>
                        </Flex>
                        <Flex gap={40} align="center" justify="center">
                            <Link to="/topup">
                                <Text type={pageItem?.key === "topupPage" ? "red" : "dark-grey"} style={{ fontSize: "16px", fontWeight: '600' }}>Top Up</Text>
                            </Link>
                            <Link to='/transaction'>
                                <Text type={pageItem?.key === "transactionPage" ? "red" : "dark-grey"} style={{ fontSize: "16px", fontWeight: '600' }}>Transaction</Text>
                            </Link>
                            <Link to='/account'>
                                <Text type={pageItem?.key === "accountPage" ? "red" : "dark-grey"} style={{ fontSize: "16px", fontWeight: '600' }}>Akun</Text>
                            </Link>
                        </Flex>
                    </Flex>
                </Col>
            </Row>
        </Layout.Header>
    )
}

export default HeaderPage