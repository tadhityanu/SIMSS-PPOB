import { Button, Col, Flex, Image, Row, Typography } from "antd"
import PropTypes from "prop-types"
import FormInputNumber from "../Form/Input/FormInputNumber"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getBalanceAction } from "../../redux/action/Balance/balanceAction"
import ModalTransaction from "../Modal/ModalTransaction"
import { paymentAction } from "../../redux/action/Payment/paymentAction"

const { Text } = Typography

const PaymentLayout = (props) => {
    const {
        paymentService
    } = props

    const [openConfirmTransactionModal, setOpenConfirmTransactionModal] = useState(false);
    const [openTransactionSuccessModal, setOpenTransactionSuccessModal] = useState(false);
    const [openTransactionFailedModal, setOpenTransactionFailedModal] = useState(false);


    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getBalanceAction())
    }, [dispatch])

    const dataBalance = useSelector((state) => state.balance)

    const buttonStateHandler = () => {
        const state = {
            isDisable: false,
            type: "disable"
        }
        if (paymentService.service_tariff !== 0 || paymentService.service_tariff !== null || dataBalance?.data?.balance >= paymentService.service_tariff) {
            state.isDisable = false
            state.type = 'primary'
        } else {
            state.isDisable = true
            state.type = 'disable'
        }

        return state
    }

    const submitHandler = () => {
        const payload = {
            service_code: paymentService?.service_code
        }
        dispatch(
            paymentAction(
                payload,
                () => {
                    setOpenConfirmTransactionModal(false)
                    setOpenTransactionSuccessModal(true)
                },
                () => {
                    setOpenConfirmTransactionModal(false)
                    setOpenTransactionFailedModal(true)
                }
            )
        )
    }

    const modalSuccessHandler = () => {
        setOpenTransactionSuccessModal(false)
        dispatch(getBalanceAction())
    }

    return (
        <>
            <Row gutter={[24, 24]}>
                <Col span={24}>
                    <Row gutter={[0, 12]}>
                        <Col span={24}>
                            <Text style={{ fontSize: 24, fontWeight: 400 }}>Pembayaran</Text>
                        </Col>
                        <Col span={24}>
                            <Flex align="center" gap={12}>
                                <Image preview={false} src={paymentService?.service_icon} style={{ width: 50, height: 50 }} />
                                <Text style={{ fontSize: 24, fontWeight: 700 }}>{paymentService?.service_name}</Text>
                            </Flex>
                        </Col>
                    </Row>
                </Col>
                <Col span={24}>
                    <Row gutter={[24, 24]}>
                        <Col span={24}>
                            <FormInputNumber type="Currency Disable" formName="topupAmount" placeHolder="0" value={paymentService.service_tariff} />
                        </Col>
                        <Col span={24}>
                            <Button type={buttonStateHandler().type} style={{ width: '100%' }} size="large" htmlType="submit" disabled={buttonStateHandler().isDisable} onClick={() => setOpenConfirmTransactionModal(true)} >Bayar</Button>
                        </Col>
                    </Row>
                </Col>

                {/* Modal */}
                <Col>
                    <ModalTransaction
                        type="Confirmation"
                        dataPayment={paymentService}
                        open={openConfirmTransactionModal}
                        onOk={() => submitHandler()}
                        onCancel={() => setOpenConfirmTransactionModal(false)}
                        buttonOkText="Ya, lanjutkan bayar" />
                </Col>
                <Col>
                    <ModalTransaction
                        type="Success"
                        dataPayment={paymentService}
                        open={openTransactionSuccessModal}
                        onCancel={modalSuccessHandler}
                        textResult="berhasil" />
                </Col>
                <Col>
                    <ModalTransaction
                        type="Failed"
                        dataPayment={paymentService}
                        open={openTransactionFailedModal}
                        onCancel={() => setOpenTransactionFailedModal(false)}
                        textResult="gagal" />
                </Col>
            </Row>
        </>
    )
}

PaymentLayout.propTypes = {
    paymentService: PropTypes.string,
}

export default PaymentLayout