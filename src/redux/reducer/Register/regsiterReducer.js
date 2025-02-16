import { message } from "antd"
import { data } from "react-router"

const REGISTER_USER = "REGISTER_USER"
const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS'
const REGISTER_USER_FAILED = 'REGISTER_USER_FAILED'

const initialState = {
    data: null,
    message: "default register",
    loading: false,
}

const registerReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_USER:
            return {
                ...state,
                message: "load register",
                loading: true
            }
        case REGISTER_USER_SUCCESS:
            return {
                ...state,
                message: 'Register success',
                loading: false,
                data: action.payload.data
            }
        case REGISTER_USER_FAILED:
            return {
                ...state,
                message: 'Register failed',
                loading: false,
                data: null
            }
        default: return state
    }
}

export default registerReducer