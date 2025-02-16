import { Card, Carousel, Col, Image, message, Row, Typography } from "antd"
import { BannerImage1, BannerImage2, BannerImage3, BannerImage4, BannerImage5 } from "../../assets/image";
import "../../styles/Carousel.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import bannerAction, { unmountBanner } from "../../redux/action/Banner/bannerAction";

const { Text } = Typography

const BannerHome = () => {

    const dispatch = useDispatch()

    const [messageApi, contextHolder] = message.useMessage();

    useEffect(() => {
        dispatch(bannerAction(
            () => { },
            (err) => {
                messageApi.open({
                    type: "error",
                    content: err
                })
            }))

        return () => dispatch(unmountBanner())
    }, [dispatch])

    const { data } = useSelector((state) => state.banner)

    return (
        <>
            <Row gutter={[32, 24]}>
                <Col span={24}>
                    <Text style={{ fontSize: 14, fontWeight: 600 }}>Temukan Promo Menarik</Text>
                </Col>
                <Col span={24}>
                    <Carousel
                        dots={false}
                        arrows={false}
                        infinite={false}
                        slidesToShow={4}
                        draggable={true}
                    // slidesToScroll={1}
                    // responsive={[
                    //     { breakpoint: 1024, settings: { slidesToShow: 2 } },
                    //     { breakpoint: 600, settings: { slidesToShow: 1 } },
                    // ]}
                    >
                        {data?.map((item, index) => (
                            <Image key={index} src={item.banner_image} style={{ width: 200 }} preview={false} />
                        ))}
                    </Carousel>
                </Col>
            </Row>
        </>
    )
}

export default BannerHome