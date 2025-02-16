import { WalletOutlined } from "@ant-design/icons";
import { Form, InputNumber } from "antd"
import PropTypes, { number } from "prop-types"
import { idrFormatter, idrParser } from "../../../utils/CurrencyFormat";

const FormInputNumber = (props) => {
    const {
        label,
        formName,
        rules,
        defaultValue,
        max,
        onChange,
        placeHolder,
        labelAfter,
        type,
        value
    } = props

    return (
        <>
            {type === 'Currency' && (
                <InputNumber
                    value={value}
                    onChange={onChange}
                    formatter={idrFormatter}
                    parser={idrParser}
                    controls={false}
                    defaultValue={value}
                    // type='number'
                    style={{ width: '100%', alignItems: "center", justifyContent: "center", paddingTop:6, paddingBottom:6 }}
                    placeholder={placeHolder}
                    size="large"
                    prefix={<WalletOutlined style={{ marginRight: '8px', color: '#999999' }} />}
                />
            )}
            {type === 'Currency Disable' && (
                <InputNumber
                disabled
                    value={value}
                    onChange={onChange}
                    formatter={idrFormatter}
                    parser={idrParser}
                    controls={false}
                    defaultValue={value}
                    // type='number'
                    style={{ width: '100%', alignItems: "center", justifyContent: "center", paddingTop:6, paddingBottom:6 }}
                    placeholder={placeHolder}
                    size="large"
                    prefix={<WalletOutlined style={{ marginRight: '8px', color: '#999999' }} />}
                />
            )}
            {type === 'Number' && (
                <Form.Item
                    validateFirst
                    label={label}
                    name={formName}
                    rules={rules}
                    initialValue={defaultValue}>
                    <InputNumber
                        maxLength={max}
                        onChange={onChange}
                        defaultValue={defaultValue}
                        placeholder={placeHolder}
                        size="small"
                        addonAfter={labelAfter}
                        style={{ width: '100%' }}
                        controls={false} />
                </Form.Item>
            )}
        </>
    )
}

FormInputNumber.propTypes = {
    name: PropTypes.string,
    type: PropTypes.string,
    debounceChangeHanlder: PropTypes.func,
    formName: PropTypes.string,
    label: PropTypes.string,
    placeHolder: PropTypes.string,
    rules: PropTypes.array,
    max: PropTypes.number,
}

export default FormInputNumber