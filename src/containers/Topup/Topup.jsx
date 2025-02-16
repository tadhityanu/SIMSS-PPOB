import { Col, message, Row } from "antd"
import Information from "../../components/HomePage/Information"
import TopupLayout from "../../components/Topup/TopupLayout"

const Topup = () => {
    return (
        <>
            <Row gutter={[32, 42]} justify={"center"}>
                <Col span={20}>
                    <Information/>
                </Col>
                <Col span={20}>
                    <TopupLayout />
                </Col>
            </Row>
        </>
    )
}

export default Topup