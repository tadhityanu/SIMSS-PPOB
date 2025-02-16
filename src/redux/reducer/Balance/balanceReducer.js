const GET_BALANCE = 'GET_BALANCE'
const GET_BALANCE_SUCCESS = 'GET_BALANCE_SUCCESS'
const GET_BALANCE_FAILED = 'GET_BALANCE_FAILED'
const UNMOUNT_BALANCE = 'UNMOUNT_BALANCE'

const initialState = {
    data: null,
    message: "default balance",
    loading: false,
}

const balanceReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_BALANCE:
            return {
                ...state,
                message: "load balance",
                loading: true
            }
        case GET_BALANCE_SUCCESS:
            return {
                ...state,
                message: 'balance success',
                loading: false,
                data: action.payload.data
            }
        case GET_BALANCE_FAILED:
            return {
                ...state,
                message: 'balance failed',
                loading: false,
                data: null
            }
        case UNMOUNT_BALANCE:
            return {
                ...state,
                data: null,
                loading: false,
                message: "UNMOUNT"
            }
        default: return state
    }
}

export default balanceReducer