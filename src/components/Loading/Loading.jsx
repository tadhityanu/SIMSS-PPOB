import { Spin } from "antd"

const Loading = () => {
    return (
      <div style={{ height: "100vh", textAlign: "center", paddingTop: 290 }}>
        <Spin size="large" />
      </div>
    )
  }
  
  export default Loading