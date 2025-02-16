const GET_PROFILE = 'GET_PROFILE'
const GET_PROFILE_SUCCESS = 'GET_PROFILE_SUCCESS'
const GET_PROFILE_FAILED = 'GET_PROFILE_FAILED'
const UNMOUNT_PROFILE = 'UNMOUNT_PROFILE'

const initialState = {
    data: null,
    message: "default profile",
    loading: false,
}

const getProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PROFILE:
            return {
                ...state,
                message: "load profile",
                loading: true
            }
        case GET_PROFILE_SUCCESS:
            return {
                ...state,
                message: 'profile success',
                loading: false,
                data: action.payload.data
            }
        case GET_PROFILE_FAILED:
            return {
                ...state,
                message: 'profile failed',
                loading: false,
                data: null
            }
        case UNMOUNT_PROFILE:
            return {
                ...state,
                data: null,
                loading: false,
                message: "UNMOUNT"
            }
        default: return state
    }
}

export default getProfileReducer