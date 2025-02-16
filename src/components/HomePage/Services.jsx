import { Col, Flex, Image, message, Row, Typography } from "antd"
import { Link } from "react-router"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import servicesAction, { unmountService } from "../../redux/action/Services/servicesAction"

const { Text } = Typography
const Services = () => {
    const dispatch = useDispatch()

    const [messageApi, contextHolder] = message.useMessage();

    useEffect(() => {
        dispatch(servicesAction(
            () => { },
            (err) => {
                messageApi.open({
                    type: "error",
                    content: err
                })
            }))

        return () => dispatch(unmountService())
    }, [dispatch])

    const { data } = useSelector((state) => state.services)
    
    return (
        <>
            {contextHolder}
            <Row gutter={[24, 24]}>
                <Col span={24}>
                    <Flex justify="space-between">
                        {data?.map((item, index) => (
                            <Link key={index} to='/payment' state={item}>
                                <Flex vertical justify="center" align="center" style={{ width: "90%" }} gap={6}>
                                    <Image style={{ width: 70, height: 70 }} src={item.service_icon} preview={false} />
                                    <Text style={{ fontSize: 14, fontWeight: 500, textAlign: "center" }}>{item.service_name}</Text>
                                </Flex>
                            </Link>
                        ))}
                    </Flex>
                </Col>
            </Row>
        </>
    )
}

export default Services