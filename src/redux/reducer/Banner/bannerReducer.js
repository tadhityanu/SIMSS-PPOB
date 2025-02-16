const GET_BANNER = 'GET_BANNER'
const GET_BANNER_SUCCESS = 'GET_BANNER_SUCCESS'
const GET_BANNER_FAILED = 'GET_BANNER_FAILED'
const UNMOUNT_BANNER = 'UNMOUNT_BANNER'

const initialState = {
    data: null,
    message: "default banner",
    loading: false,
}

const bannerReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_BANNER:
            return {
                ...state,
                message: "load banner",
                loading: true
            }
        case GET_BANNER_SUCCESS:
            return {
                ...state,
                message: 'banner success',
                loading: false,
                data: action.payload.data
            }
        case GET_BANNER_FAILED:
            return {
                ...state,
                message: 'banner failed',
                loading: false,
                data: null
            }
        case UNMOUNT_BANNER:
            return {
                ...state,
                data: null,
                loading: false,
                message: "UNMOUNT"
            }
        default: return state
    }
}

export default bannerReducer