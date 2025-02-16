import { Button, Col, Form, Image, message, Row, Typography } from "antd"
import { LoginImage, Logo } from "../../assets/image"
import { FormInput } from "../../components/Form"
import { Link } from "react-router"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { loginAction } from "../../redux/action/Login/loginAction"

const { Text } = Typography

const Login = () => {
    const dispatch = useDispatch()

    const [messageApi, contextHolder] = message.useMessage();
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)

    const emailChangeHandler = (e) => {
        setEmail(e.target.value)
    }

    const passChangeHandler = (e) => {
        setPassword(e.target.value)
    }

    const onFinish = () => {
        const payload = {
            email,
            password
        }

        dispatch(loginAction(
            payload,
            () => {},
            (err) => {
                messageApi.open({
                    type : "error",
                    content : err
                })
            }
        ))
    }

    return (
        <>
            {contextHolder}
            <Form layout="vertical" onFinish={onFinish}>
                <Row style={{ height: "85vh", justifyContent: "center", alignItems: "center" }}>
                    <Col span={12}>
                        <Row style={{ justifyContent: "center" }}>
                            <Col span={12}>
                                <Row gutter={[24, 24]} style={{ justifyContent: "center", alignContent: "center" }}>
                                    <Col span={24} style={{ display: "flex", gap: '12px', justifyContent: "center", alignItems: "center" }}>
                                        <Image src={Logo} preview={false} />
                                        <Text style={{ fontSize: "18px", fontWeight: 'bold' }}>SIMS PPOB</Text>
                                    </Col>
                                    <Col span={18} style={{ display: "flex", justifyContent: "center", alignContent: "center" }}>
                                        <Text style={{ fontSize: '24px', textAlign: "center", fontWeight: '600' }}>Masuk atau buat akun untuk memulai</Text>
                                    </Col>
                                    <Col span={24}>
                                        <FormInput name="Email" debounceChangeHandler={emailChangeHandler} />

                                        <FormInput name="Password" formName='password'
                                        debounceChangeHandler={passChangeHandler} rules={[
                                            { required: true, message: ('Please input your password') },
                                            { min: 8, message: ('Password must be at least 8 character') },
                                        ]} />
                                    </Col>
                                    <Col span={24}>
                                        <Button size="large" type="primary" style={{ width: "100%" }} htmlType="submit">Masuk</Button>
                                    </Col>
                                    <Col span={24} style={{ justifyContent: "center", alignContent: "center", display: "flex" }}>
                                        <Text type="grey" style={{ textAlign: "center", fontWeight: "500" }}>Belum punya akun? registrasi {<Link to={"/register"}> <Text type="red">di sini</Text></Link>}</Text>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                    <Col span={12} style={{ display: "flex", justifyContent: "center", alignContent: "center", backgroundColor: "blue" }}>
                        <Image height={'100vh'} width={'100%'} src={LoginImage} preview={false} style={{ objectFit: 'cover' }} />
                    </Col>
                </Row>
            </Form>
        </>
    )
}

export default Login