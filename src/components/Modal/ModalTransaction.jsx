import { Button, Col, Flex, Image, Modal, Row, Typography } from "antd"
import { FailedImage, Logo, SuccessImage } from "../../assets/image"
import { idrFormatter } from "../../utils/CurrencyFormat"

const { Text } = Typography

const ModalTransaction = (props) => {
    const state = props

    const data = state.dataPayment

    return (
        <Row gutter={[16, 16]}>
            <Col span={24}>
                {state.type === 'Confirmation' && <Modal
                    centered
                    open={state.open}
                    onCancel={state.onCancel}
                    closable={false}
                    maskClosable={true}
                    width={'20%'}
                    footer={false}
                >
                    <Flex justify='center' align="center" gap={12} vertical>
                        <Image width={50} height={50} src={Logo} />
                        <Col span={24}>
                            <Flex vertical justify="center" align="center">
                                <Text>Beli {data?.service_name} senilai</Text>
                                <Text style={{ fontSize: 24, fontWeight: 750 }}>Rp{idrFormatter(data?.service_tariff)} ?</Text>
                            </Flex>
                        </Col>
                        <Col span={24}>
                            <Flex vertical gap={8}>
                                <Button type="text-red" block onClick={state.onOk}>
                                    <Text type="red" style={{ fontWeight: 600, fontSize: 14 }}>
                                        {state.buttonOkText}
                                    </Text>
                                </Button>
                                <Button type="text" block onClick={state.onCancel}>
                                    <Text type="dark-grey" style={{ fontWeight: 600 }}>
                                        Batalkan
                                    </Text>
                                </Button>
                            </Flex>
                        </Col>
                    </Flex>
                </Modal>}
                {state.type === 'Success' && <Modal
                    centered
                    open={state.open}
                    onCancel={state.onCancel}
                    closable={false}
                    maskClosable={true}
                    width={'20%'}
                    footer={false}
                >
                    <Flex justify='center' align="center" gap={12} vertical>
                        <Image width={50} height={50} src={SuccessImage} />
                        <Col span={24}>
                            <Flex vertical justify="center" align="center">
                                <Text>Pembayaran {data?.service_name} sebesar</Text>
                                <Text style={{ fontSize: 24, fontWeight: 750 }}>Rp{idrFormatter(data?.service_tariff)}</Text>
                                <Text type="dark-grey" style={{ fontSize: 14, fontWeight: 500 }}>{state.textResult}</Text>
                            </Flex>
                        </Col>
                        <Col span={24}>
                            <Button type="text" block onClick={state.onCancel}>
                                <Text type="red" style={{ fontWeight: 600 }}>
                                    Kembali ke beranda
                                </Text>
                            </Button>
                        </Col>
                    </Flex>
                </Modal>}
                {state.type === 'Failed' && <Modal
                    centered
                    open={state.open}
                    onCancel={state.onCancel}
                    closable={false}
                    maskClosable={true}
                    width={'20%'}
                    footer={false}
                >
                    <Flex justify='center' align="center" gap={12} vertical>
                        <Image width={50} height={50} src={FailedImage} />
                        <Col span={24}>
                            <Flex vertical justify="center" align="center">
                                <Text>Pembayaran {data?.service_name} sebesar</Text>
                                <Text style={{ fontSize: 24, fontWeight: 750 }}>Rp{idrFormatter(data?.service_tariff)}</Text>
                                <Text type="dark-grey" style={{ fontSize: 14, fontWeight: 500 }}>{state.textResult}</Text>
                            </Flex>
                        </Col>
                        <Col span={24}>
                            <Button type="text" block onClick={state.onCancel}>
                                <Text type="red" style={{ fontWeight: 600 }}>
                                    Kembali ke beranda
                                </Text>
                            </Button>
                        </Col>
                    </Flex>
                </Modal>}
            </Col>
        </Row>
    )
}

export default ModalTransaction