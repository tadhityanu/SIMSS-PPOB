
const SET_TOPUP = "SET_TOPUP"
const SET_TOPUP_SUCCESS = 'SET_TOPUP_SUCCESS'
const SET_TOPUP_FAILED = 'SET_TOPUP_FAILED'

const initialState = {
    data: null,
    message: "default topup",
    loading: false,
}

const registerReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TOPUP:
            return {
                ...state,
                message: "load topup",
                loading: true
            }
        case SET_TOPUP_SUCCESS:
            return {
                ...state,
                message: 'topup success',
                loading: false,
                data: action.payload.data
            }
        case SET_TOPUP_FAILED:
            return {
                ...state,
                message: 'topup failed',
                loading: false,
                data: null
            }
        default: return state
    }
}

export default registerReducer