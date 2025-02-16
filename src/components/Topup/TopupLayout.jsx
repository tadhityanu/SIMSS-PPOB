import { Button, Card, Col, Form, message, Modal, Row, Typography } from "antd"
import FormInputNumber from "../Form/Input/FormInputNumber"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { topupAction } from "../../redux/action/Topup/topupAction"
import ModalTopup from "../Modal/ModalTopup"
import { getProfileAction } from "../../redux/action/Profile/profileAction"
import { getBalanceAction } from "../../redux/action/Balance/balanceAction"

const { Text } = Typography

const TopupLayout = () => {
    const dispatch = useDispatch()

    const [messageApi, contextHolder] = message.useMessage();
    const [topupAmount, setTopupAmount] = useState(0)
    const [open, setOpen] = useState(false);
    const [openModalSucces, setOpenModalSuccess] = useState(false);
    const [openTopupFailedModal, setOpenTopupFailedModal] = useState(false);


    const topupAmountHandler = (e) => {
        setTopupAmount(e)
    }

    const onCardClick = (amount) => {
        switch (amount) {
            case 10:
                setTopupAmount(10000)
                break;
            case 20:
                setTopupAmount(20000)
                break;
            case 50:
                setTopupAmount(50000)
                break;
            case 100:
                setTopupAmount(100000)
                break;
            case 250:
                setTopupAmount(250000)
                break;
            case 500:
                setTopupAmount(500000)
                break;
            default:
                break;
        }
    }

    const submitHandler = () => {
        const payload = {
            top_up_amount: topupAmount
        }
        dispatch(
            topupAction(
                payload,
                () => {
                    setOpen(false)
                    setOpenModalSuccess(true)
                },
                () => {
                    setOpen(false)
                    setOpenTopupFailedModal(true)
                }
            )
        )
    }

    const buttonStateHandler = () => {
        const state = {
            isDisable: false,
            type: "disable"
        }
        if (topupAmount !== 0 && topupAmount !== null) {
            state.isDisable = false
            state.type = 'primary'
        } else {
            state.isDisable = true
            state.type = 'disable'
        }

        return state
    }

    const modalSuccessHandler = () => {
        setOpenModalSuccess(false)
        dispatch(getBalanceAction(
            () => { },
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
            <Row gutter={[24, 24]}>
                <Col span={24}>
                    <Row>
                        <Col span={24}>
                            <Text style={{ fontSize: 20, fontWeight: 400 }}>Silahkan masukan</Text>
                        </Col>
                        <Col span={24}>
                            <Text style={{ fontSize: 32, fontWeight: 700 }}>Nominal Top Up</Text>
                        </Col>
                    </Row>
                </Col>
                <Col span={24}>
                    <Row gutter={[24, 24]}>
                        <Col span={24}>
                            <Row gutter={[24, 0]} style={{ justifyContent: "center", alignItems: "center" }}>
                                <Col span={12} style={{ alignContent: "center" }}>
                                    <FormInputNumber type="Currency" formName="topupAmount" placeHolder="0" onChange={topupAmountHandler} value={topupAmount} />
                                </Col>
                                <Col span={4} style={{ cursor: 'pointer' }} onClick={() => onCardClick(10)}>
                                    <Card size="small" style={{ borderColor: '#8f8f8f' }}>
                                        <Text>Rp 10.000</Text>
                                    </Card>
                                </Col>
                                <Col span={4} style={{ cursor: 'pointer' }} onClick={() => onCardClick(20)}>
                                    <Card size="small" style={{ borderColor: '#8f8f8f' }}>
                                        <Text>Rp 20.000</Text>
                                    </Card>
                                </Col>
                                <Col span={4} style={{ cursor: 'pointer' }} onClick={() => onCardClick(50)}>
                                    <Card size="small" style={{ borderColor: '#8f8f8f' }}>
                                        <Text>Rp 50.000</Text>
                                    </Card>
                                </Col>
                            </Row>
                        </Col>
                        <Col span={24}>
                            <Row gutter={[24, 0]} style={{ justifyContent: "center", alignItems: "center" }}>
                                <Col span={12} >
                                    <Button type={buttonStateHandler().type} style={{ width: '100%' }} size="large" htmlType="submit" onClick={() => setOpen(true)} disabled={buttonStateHandler().isDisable}>Top Up</Button>
                                </Col>
                                <Col span={4} style={{ cursor: 'pointer' }} onClick={() => onCardClick(100)}>
                                    <Card size="small" style={{ borderColor: '#8f8f8f' }}>
                                        <Text>Rp 100.000</Text>
                                    </Card>
                                </Col>
                                <Col span={4} style={{ cursor: 'pointer' }} onClick={() => onCardClick(250)}>
                                    <Card size="small" style={{ borderColor: '#8f8f8f' }}>
                                        <Text>Rp 250.000</Text>
                                    </Card>
                                </Col>
                                <Col span={4} style={{ cursor: 'pointer' }} onClick={() => onCardClick(500)}>
                                    <Card size="small" style={{ borderColor: '#8f8f8f' }}>
                                        <Text>Rp 500.000</Text>
                                    </Card>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>

                {/* Modal */}
                <Col>
                    <ModalTopup
                        type="Confirmation"
                        amount={topupAmount}
                        open={open}
                        onOk={() => submitHandler()}
                        onCancel={() => setOpen(false)}
                        buttonOkText="Ya, lanjutkan Top Up" />
                </Col>
                <Col>
                    <ModalTopup
                        type="Success"
                        amount={topupAmount}
                        open={openModalSucces}
                        onCancel={modalSuccessHandler}
                        textResult="berhasil" />
                </Col>
                <Col>
                    <ModalTopup
                        type="Failed"
                        amount={topupAmount}
                        open={openTopupFailedModal}
                        onCancel={() => setOpenTopupFailedModal(false)}
                        textResult="gagal" />
                </Col>
            </Row>
        </>
    )
}

export default TopupLayout