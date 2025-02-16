import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import { Provider } from 'react-redux'
import { store, persistor } from './redux/index.js'
import ReactDOM from "react-dom/client";
import './styles/index.css'
import { AutoComplete, ConfigProvider } from 'antd'
import { PersistGate } from 'redux-persist/integration/react'
import Loading from './components/Loading/Loading.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={<Loading />} persistor={persistor}>
      <ConfigProvider
        input={{ AutoComplete: 'off' }}
        theme={{
          token: {
            colorPrimary: '#f04343'
          }
        }}>
        <BrowserRouter>
          <App />
        </BrowserRouter>,
      </ConfigProvider>
    </PersistGate>
  </Provider>
)
