import { Button, Col, Row } from "antd"
import Information from "../../components/HomePage/Information"
import TransactionLayout from "../../components/HistoryTransaction/HistoryTransactionLayout"
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getTransactionHistoryAction, unmountTransactionHistory } from "../../redux/action/Transaction/transactionAction";

const TransactionPage = () => {
    
    return (
        <>
            <Row gutter={[32, 24]} justify={"center"}>
                <Col span={20}>
                    <Information />
                </Col>
                <Col span={20}>
                    <TransactionLayout />
                </Col>
            </Row>
        </>
    )
}

export default TransactionPage