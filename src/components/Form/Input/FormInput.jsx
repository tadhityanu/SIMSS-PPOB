import { LockOutlined, UserOutlined } from "@ant-design/icons"
import { Form, Input, Typography } from "antd"
import PropTypes from "prop-types"

const { Text } = Typography

const FormInput = (props) => {
    const {
        name,
        debounceChangeHandler,
        formName,
        isRequired,
        placeHolder,
        value,
        rules,
        label
    } = props

    return (
        <>
            {name === "User Name" && (
                <Form.Item
                    name={formName}
                    validateFirst
                    label={label}
                    rules={[
                        { required: true, message: ('Please input your password') },
                        { whitespace: true, message: ('Please input your password') },
                    ]}
                    className="custom-error-message">
                    <Input
                        size="large"
                        maxLength={100}
                        onChange={debounceChangeHandler}
                        placeholder={placeHolder}
                        prefix={<UserOutlined style={{ color: "#B0B0B0", marginRight: '4px' }} />} />
                </Form.Item>
            )}
            {name === "Email" && (
                <Form.Item
                    name="email"
                    label={label}
                    validateFirst
                    initialValue={value}
                    rules={[
                        { required: true, message: ('Please input your password') },
                        { whitespace: true, message: ('Please input your password') },
                        { type: 'email', message: ('Please input valid Email') }
                    ]}
                    className="custom-error-message">
                    <Input
                    defaultValue={value}
                        size="large"
                        maxLength={100}
                        onChange={debounceChangeHandler}
                        placeholder="Masukan email anda"
                        prefix={<Text type="light-grey" style={{ marginRight: '4px' }}>@</Text>} />
                </Form.Item>
            )}
            {name === "Password" && (
                <Form.Item
                    name={formName}
                    validateFirst
                    rules={rules}
                    className="custom-error-message">
                    <Input.Password
                        size="large"
                        maxLength={100}
                        onChange={debounceChangeHandler}
                        placeholder="Masukan password anda"
                        prefix={<LockOutlined style={{ color: "#B0B0B0", marginRight: '4px' }} />} />
                </Form.Item>
            )}
        </>
    )
}

FormInput.propTypes = {
    name: PropTypes.string,
    debounceChangeHandler: PropTypes.func,
    rules: PropTypes.object,
    formName: PropTypes.string,
    isRequired: PropTypes.bool,
    placeHolder: PropTypes.string,
    value: PropTypes.string
}


export default FormInput