import { Col, Row } from "antd"
import Information from "../../components/HomePage/Information"
import PaymentLayout from "../../components/Payment/PaymentLayout"
import { useLocation } from "react-router";

const PaymentPage = () => {
    const location = useLocation();
    const service = location.state;

    return (
        <>
            <Row gutter={[32, 42]} justify={"center"}>
                <Col span={20}>
                    <Information />
                </Col>
                <Col span={20}>
                    <PaymentLayout paymentService={service}/>
                </Col>
            </Row>
        </>
    )
}

export default PaymentPage