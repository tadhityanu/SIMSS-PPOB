import { Avatar, Badge, Button, Col, Form, message, Row, Typography, Upload } from "antd"
import { FormInput } from "../../components/Form"
import { useEffect, useRef, useState } from "react"
import { checkAuth, setLogout } from "../../redux/action/Auth/authenticationAction"
import { useDispatch, useSelector } from "react-redux"
import { getProfileAction, updateProfileAction, updateProfilePhotoAction } from "../../redux/action/Profile/profileAction"
import { capitalize } from "../../utils/textFormat"
import { ProfilePhoto } from "../../assets/image"
import { EditOutlined } from "@ant-design/icons"

const { Text } = Typography
const AccountPage = () => {
    const [form] = Form.useForm()
    const dispatch = useDispatch()
    const [messageApi, contextHolder] = message.useMessage();

    const [email, setEmail] = useState(null)
    const [firstName, setFirstName] = useState(null)
    const [lastName, setLastName] = useState(null)
    const [isProfileSame, setIsProfileSame] = useState(true)
    const [photoProfile, setPhotoProfile] = useState(ProfilePhoto);
    const [photoProfileFile, setPhotoProfileFile] = useState(null)

    const emailChangeHandler = (e) => {
        setEmail(e.target.value)

        if (e.target.value !== data?.email) {
            setIsProfileSame(false)
        } else {
            setIsProfileSame(true)
        }
    }
    const firstNameChangeHandler = (e) => {
        setFirstName(e.target.value)
        if (e.target.value !== data?.first_name) {
            setIsProfileSame(false)
        } else {
            setIsProfileSame(true)
        }
    }
    const lastNameChangeHandler = (e) => {
        setLastName(e.target.value)
        if (e.target.value !== data?.last_name) {
            setIsProfileSame(false)
        } else {
            setIsProfileSame(true)
        }
    }

    useEffect(() => {
        dispatch(getProfileAction(
            (resp) => {
                form.setFieldsValue({
                    email: resp.data.email,
                    firstName: resp.data.first_name,
                    lastName: resp.data.last_name
                })
                setPhotoProfile(resp.data.profile_image)
                setEmail(resp.data.email)
                setFirstName(resp.data.first_name)
                setLastName(resp.data.last_name)
            },
            (err) => {
                messageApi.open({
                    type: "error",
                    content: err
                })
            }))
    }, [dispatch])

    const { data, loading } = useSelector((state) => state.profile.getProfile)

    const logoutHandler = () => {
        dispatch(setLogout(
            () => {
                dispatch(checkAuth())
            },
            () => {
                messageApi.open({
                    type: 'error',
                    content: 'Logout Gagal',
                });
            }
        ))
    }

    const onFinish = () => {
        const payload = {
            first_name: firstName,
            last_name: lastName,
        }
        const imagePayload = { file: photoProfileFile}
        dispatch(updateProfileAction(
            payload,
            (resp) => {
                messageApi.open({
                    type: 'success',
                    content: resp.message,
                });
                dispatch(getProfileAction(
                    () => {
                        form.setFieldsValue({
                            email: resp.data.email,
                            firstName: resp.data.first_name,
                            lastName: resp.data.last_name
                        })
                        setEmail(resp.data.email)
                        setFirstName(resp.data.first_name)
                        setLastName(resp.data.last_name)
                        setIsProfileSame(true)
                    },
                    (err) => {
                        messageApi.open({
                            type: "error",
                            content: err
                        })
                    }
                ))
            },
            (err) => {
                messageApi.open({
                    type: 'error',
                    content: err,
                });
            }
        ))
        dispatch(updateProfilePhotoAction(
            imagePayload,
            () => {
                messageApi.open({
                    type: "success",
                    content: "Foto Profile berhasil di update",
                });
            },
            (err) => {
                messageApi.open({
                    type: "error",
                    content: err,
                });
            }
        ))
    }

    const handleChangePhoto = (info) => {
        const file = info.file;
        const isPngOrJpeg = file.type === "image/png" || file.type === "image/jpeg";
        if (!isPngOrJpeg) {
            messageApi.open({
                type: "error",
                content: "Only PNG and JPEG files are allowed",
            });
            return;
        }
        if (file.size > 100 * 1024) { // 100KB limit
            messageApi.open({
                type: "error",
                content: "Maximum file size is 100KB",
            });
            return;
        }
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setPhotoProfile(reader.result);
            };
            reader.readAsDataURL(file);
            setPhotoProfileFile(file)
            setIsProfileSame(false)
        }
    };

    return (
        <>
            {contextHolder}
            <Form form={form} requiredMark="optional" layout="vertical" onFinish={onFinish}>
                <Row style={{ justifyContent: "center", alignItems: "center" }}>
                    <Col span={12}>
                        <Row>
                            <Col span={24} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                <Upload
                                    showUploadList={false}
                                    beforeUpload={() => false} // Prevent auto-upload
                                    onChange={handleChangePhoto}
                                    accept="image/*"
                                >
                                    <div style={{ position: "relative", display: "inline-block", cursor: "pointer" }}>
                                        {/* Avatar (shows preview) */}
                                        <Avatar src={photoProfile} size={100} />

                                        {/* Edit Icon */}
                                        <div
                                            style={{
                                                position: "absolute",
                                                bottom: 0,
                                                right: 0,
                                                borderRadius: "50%",
                                                width: 24,
                                                height: 24,
                                                display: "flex",
                                                justifyContent: "center",
                                                alignItems: "center",
                                                border: "1px solid #999999",
                                                backgroundColor: "#fff",
                                            }}
                                        >
                                            <EditOutlined style={{ fontSize: 14 }} />
                                        </div>
                                    </div>
                                </Upload>
                            </Col>
                            <Col span={24} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                <Text style={{ fontWeight: 650, fontSize: 32, textAlign: "center" }}>{capitalize(data?.first_name)} {capitalize(data?.last_name)}</Text>
                            </Col>
                            <Col span={24}>
                                <Row>
                                    <Col span={24}>
                                        <FormInput name="Email" debounceChangeHandler={emailChangeHandler} label="Email" value={data?.email} />
                                    </Col>
                                    <Col span={24}>
                                        <FormInput name="User Name" debounceChangeHandler={firstNameChangeHandler} formName={"firstName"}
                                            placeHolder="Input your first name" label="Nama Depan" />
                                    </Col>
                                    <Col span={24}>
                                        <FormInput name="User Name" debounceChangeHandler={lastNameChangeHandler} formName={"lastName"}
                                            placeHolder="Input your last name" label="Nama Depan" />
                                    </Col>
                                </Row>
                            </Col>
                            <Col span={24}>
                                {isProfileSame === true ? <Row gutter={[0, 24]}>
                                    <Col span={24}>
                                        <Button size="large" type="primary" style={{ width: "100%" }} onClick={(e) => {
                                            e.preventDefault();
                                            setIsProfileSame(false)
                                        }}>Edit Profile</Button>
                                    </Col>
                                    <Col span={24}>
                                        <Button size="large" type="outline" style={{ width: "100%" }} onClick={logoutHandler}>Logout</Button>
                                    </Col>
                                </Row> : <Row gutter={[0, 24]}>
                                    <Col span={24}>
                                        <Button size="large" type="primary" style={{ width: "100%" }} htmlType="submit" onClick={(e) => e.stopPropagation()}>Simpan</Button>
                                    </Col>
                                </Row>}

                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Form>
        </>
    )
}

export default AccountPage