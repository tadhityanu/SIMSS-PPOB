import { Layout } from "antd"
import { Content, Header } from "antd/es/layout/layout"
import HeaderPage from "./Header"


const LayoutPage = (props) => {
    const {
        item
    } = props
    return (
        <Layout style={{backgroundColor:'#ffffff', gap:24}}>
            <HeaderPage pageItem={item}/>
            <Content {...props}></Content>
        </Layout>
    )
}

export default LayoutPage