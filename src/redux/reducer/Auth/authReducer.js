
const LOAD_AUTH = "LOAD_AUTH"
const LOAD_AUTH_SUCCESS = "LOAD_AUTH_SUCCESS"
const LOAD_AUTH_FAILED = "LOAD_AUTH_FAILED"

const initialState = {
    data: [],
    message: "initial message",
    loading: false,
    authed: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_AUTH:
            return {
                ...state,
                loading: true
            }
        case LOAD_AUTH_SUCCESS:
            return {
                ...state,
                loading: false,
                authed: true,
                message: "Auth Success"
            }
        case LOAD_AUTH_FAILED:
            return {
                ...state,
                loading: false,
                authed: false,
                message: "Auth Failed"
            }
        default: return state
    }
}

export default authReducer