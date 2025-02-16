import * as React from "react";
import { Navigate } from 'react-router'

const HomePage = React.lazy(() => import('../containers/HomePage/HomePage'))
const PaymentPage = React.lazy(() => import('../containers/Payment/PaymentPage'))
const TopupPage = React.lazy(() => import('../containers/Topup/Topup'))
const AccountPage = React.lazy(() => import('../containers/Account/account'))
const TransactionPage = React.lazy(() => import('../containers/Transaction/TransactionPage'))

const PRIVATE_ROUTER = [
    {
        index: false,
        path: '/homePage',
        name: 'Home Page',
        key: 'homePage',
        element: <HomePage />
    },
    {
        index: false,
        path: '/payment',
        name: 'Payment Page',
        key: 'paymentPage',
        element: <PaymentPage />
    },
    {
        index: false,
        path: '/topup',
        name: 'Topup Page',
        key: 'topupPage',
        element: <TopupPage />
    },
    {
        index: false,
        path: '/account',
        name: 'Account Page',
        key: 'accountPage',
        element: <AccountPage />
    },
    {
        index: false,
        path: '/transaction',
        name: 'Transaction Page',
        key: 'transactionPage',
        element: <TransactionPage />
    },
    {
        index : false,
        path : '*',
        name : 'Not Found',
        key : '*',
        element : <Navigate to='/homePage'/>
    }
]

export default PRIVATE_ROUTER