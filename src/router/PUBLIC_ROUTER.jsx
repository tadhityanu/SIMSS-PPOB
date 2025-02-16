import * as React from "react";
import { Navigate } from "react-router";

const Login = React.lazy(() => import('../containers/Login/Login'))
const Register = React.lazy(() => import('../containers/Register/Register'))

const PUBLIC_ROUTER = [
    {
        index : false,
        path : '/login',
        name : 'Login',
        key : 'login',
        element : <Login/>
    },
    {
        index : false,
        path : '/register',
        name : 'Register',
        key : 'regsiter',
        element : <Register/>
    },
    {
        index : false,
        path : '*',
        name : 'Not Found',
        key : '*',
        element : <Navigate to={'/login'}/>
    }
]

export default PUBLIC_ROUTER