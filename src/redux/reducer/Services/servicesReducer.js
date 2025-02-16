const GET_SERVICES = 'GET_SERVICES'
const GET_SERVICES_SUCCESS = 'GET_SERVICES_SUCCESS'
const GET_SERVICES_FAILED = 'GET_SERVICES_FAILED'
const UNMOUNT_SERVICE = 'UNMOUNT_SERVICE'

const initialState = {
    data: null,
    message: "default services",
    loading: false,
}

const servicesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_SERVICES:
            return {
                ...state,
                message: "load services",
                loading: true
            }
        case GET_SERVICES_SUCCESS:
            return {
                ...state,
                message: 'services success',
                loading: false,
                data: action.payload.data
            }
        case GET_SERVICES_FAILED:
            return {
                ...state,
                message: 'services failed',
                loading: false,
                data: null
            }
        case UNMOUNT_SERVICE:
            return {
                ...state,
                data: null,
                loading: false,
                message: "UNMOUNT"
            }
        default: return state
    }
}

export default servicesReducer