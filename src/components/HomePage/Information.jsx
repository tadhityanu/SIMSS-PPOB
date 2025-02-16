import { Col, Flex, Image, message, Row, Skeleton, Typography } from "antd"
import { BackgroundSaldo, ProfilePhoto } from "../../assets/image"
import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { getProfileAction, unmountProfile } from "../../redux/action/Profile/profileAction"
import { getBalanceAction, unmountBalance } from "../../redux/action/Balance/balanceAction"
import { idrFormatter } from "../../utils/CurrencyFormat"

const { Text } = Typography

const Information = () => {

    const dispatch = useDispatch()

    const [messageApi, contextHolder] = message.useMessage();
    const [isHidden, setIsHidden] = useState(true)

    useEffect(() => {
        dispatch(getProfileAction(
            () => { },
            (err) => {
                messageApi.open({
                    type: "error",
                    content: err
                })
            }))
        dispatch(getBalanceAction(
            () => { },
            (err) => {
                messageApi.open({
                    type: "error",
                    content: err
                })
            }))

        return () => {
            dispatch(unmountProfile())
            dispatch(unmountBalance())
        }

    }, [dispatch])

    const { data, loading } = useSelector((state) => state.profile.getProfile)
    const dataBalance = useSelector((state) => state.balance)

    const setProfileImage = (imageLink) => {
        if (imageLink !== undefined && imageLink !== null) {
            const imageValue = imageLink.split('/')
            if (imageValue[imageValue.length - 1] === 'null') {
                return ProfilePhoto
            } else {
                return imageLink
            }
        }
    }

    return (
        <>
            {contextHolder}
            {loading ? (<Skeleton />) : (
                <Row gutter={[24, 24]}>
                    <Col span={11}>
                        <Flex vertical gap={12}>
                            <Col span={24}>
                                <Image preview={false} width='70px' height='70px' src={setProfileImage(data?.profile_image)} />
                            </Col>
                            <Col span={24}>
                                <Flex vertical>
                                    <Text type="dark-grey" style={{ fontWeight: 400, fontSize: 18 }}>Selamat Datang,</Text>
                                    <Text style={{ fontWeight: 600, fontSize: 24 }}>{data?.first_name} {data?.last_name}</Text>
                                </Flex>
                            </Col>
                        </Flex>
                    </Col>
                    <Col span={13} style={{
                        backgroundImage: `url(${BackgroundSaldo})`, backgroundSize: "cover",
                        backgroundPosition: "center", borderRadius: 24, alignContent: "center", padding: 24
                    }}>
                        <Flex vertical gap={8}>
                            <Text type="white" style={{ fontSize: 14 }}>Saldo Anda</Text>

                            <Text type="white" style={{ fontSize: 36, fontWeight: 600 }}>Rp <Text type="white" style={{ fontSize: 36, fontWeight: 600 }}>{isHidden ? "••••••" : idrFormatter(dataBalance?.data?.balance)}</Text></Text>

                            <Flex align="center" gap={12}>
                                <Text type="white" style={{ fontSize: 14 }}>Lihat Saldo</Text>
                                {isHidden ? (
                                    <EyeInvisibleOutlined
                                        style={{ color: "#fff", cursor: "pointer" }}
                                        onClick={() => setIsHidden(false)}
                                    />
                                ) : (
                                    <EyeOutlined
                                        style={{ color: "#fff", cursor: "pointer" }}
                                        onClick={() => setIsHidden(true)}
                                    />
                                )}
                            </Flex>
                        </Flex>
                    </Col>
                </Row>
            )}
        </>
    )
}

export default Information