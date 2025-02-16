import { Col,Row, Typography } from "antd"
import Information from "../../components/HomePage/Information"
import Services from "../../components/HomePage/Services"
import BannerHome from '../../components/HomePage/BannerHome'

const { Text } = Typography

const HomePage = () => {
    return (
        <>
            <Row gutter={[32, 42]} justify={"center"}>
                <Col span={20}>
                    <Information />
                </Col>
                <Col span={20}>
                    <Services />
                </Col>
                <Col span={20}>
                    <BannerHome />
                </Col>
            </Row>
        </>
    )
}

export default HomePage