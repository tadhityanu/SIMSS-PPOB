import { Button, Col, Form, Image, message, Row, Typography } from "antd"
import { LoginImage, Logo } from "../../assets/image"
import { FormInput } from "../../components/Form"
import { useEffect, useState } from "react"
import { Link } from "react-router"
import { useDispatch } from "react-redux"
import { registerAction } from "../../redux/action/Register/registerAction"

const { Text } = Typography

const Register = () => {
    const [form] = Form.useForm();
    const dispatch = useDispatch()
    const [messageApi, contextHolder] = message.useMessage();

    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [confirmPassword, setConfirmPassword] = useState(null)
    const [firstName, setFirstName] = useState(null)
    const [lastName, setLastName] = useState(null)

    const emailChangeHandler = (e) => {
        setEmail(e.target.value)
    }

    const passChangeHandler = (e) => {
        setPassword(e.target.value)
    }
    const confirmPassChangeHandler = (e) => {
        setConfirmPassword(e.target.value)
    }
    const firstNameChangeHandler = (e) => {
        setFirstName(e.target.value)
    }
    const lastNameChangeHandler = (e) => {
        setLastName(e.target.value)
    }

    const onFinish = () => {
        const payload = {
            email,
            password,
            first_name: firstName,
            last_name: lastName
        }
        const values = form.getFieldsValue();

        dispatch(registerAction(
            payload,
            (resp) => {                             
                messageApi.open({
                    type: 'success',
                    content: resp?.message,
                });
                form.resetFields()
            },
            (err) => {                
                messageApi.open({
                    type: 'error',
                    content: err,
                });
            }
        ))

    }

    return (
        <>
            {contextHolder}
            <Form form={form} layout="vertical" onFinish={onFinish}>
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
                                        <Row gutter={[0, 12]}>
                                            <Col span={24}>
                                                <FormInput name="Email" debounceChangeHandler={emailChangeHandler} />
                                            </Col>
                                            <Col span={24}>
                                                <FormInput name="User Name" debounceChangeHandler={firstNameChangeHandler} formName={"firstName"}
                                                    placeHolder="Input your first name" />
                                            </Col>
                                            <Col span={24}>
                                                <FormInput name="User Name" debounceChangeHandler={lastNameChangeHandler} formName={"lastName"}
                                                    placeHolder="Input your last name" />
                                            </Col>
                                            <Col span={24}>
                                                <FormInput name="Password" debounceChangeHandler={passChangeHandler} formName='password' rules={[
                                                    { required: true, message: ('Please input your password') },
                                                    { min: 8, message: ('Password must be at least 8 character') },
                                                ]} />
                                            </Col>
                                            <Col span={24}>
                                                <FormInput name="Password" debounceChangeHandler={confirmPassChangeHandler} formName="confirmPassword" rules={[
                                                    { required: true, message: 'Please confirm your password' },
                                                    ({ getFieldValue }) => ({
                                                        validator(_, value) {
                                                            if (!value || getFieldValue('password') === value) {
                                                                return Promise.resolve();
                                                            }
                                                            return Promise.reject(new Error('Password tidak sama'));
                                                        },
                                                    }),
                                                ]} />
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col span={24}>
                                        <Button size="large" type="primary" style={{ width: "100%" }} htmlType="submit">Masuk</Button>
                                    </Col>
                                    <Col span={24} style={{ justifyContent: "center", alignContent: "center", display: "flex" }}>
                                        <Text type="grey" style={{ textAlign: "center", fontWeight: "500" }}>Sudah punya akun? login {<Link to={"/login"}> <Text type="red">di sini</Text></Link>}</Text>
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

export default Register