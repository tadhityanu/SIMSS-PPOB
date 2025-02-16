const GET_TRANSACTION_HISTORY = 'GET_TRANSACTION_HISTORY'
const GET_TRANSACTION_HISTORY_SUCCESS = 'GET_TRANSACTION_HISTORY_SUCCESS'
const GET_TRANSACTION_HISTORY_FAILED = 'GET_TRANSACTION_HISTORY_FAILED'
const UNMOUNT_TRANSACTION = 'UNMOUNT_TRANSACTION'

const initialState = {
    data: [],
    message: "default transaction",
    loading: false,
    pagination: {
        offset: null,
        limit: null,
    },
}

const getTransactionReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TRANSACTION_HISTORY:
            return {
                ...state,
                message: "load transaction",
                loading: true,
                data: [],
            }
        case GET_TRANSACTION_HISTORY_SUCCESS:
            return {
                ...state,
                message: 'transaction success',
                loading: false,
                data: action.payload.data,
                pagination: {
                    offset: action.payload.pagination.offset,
                    limit: action.payload.pagination.limit,
                },
            }
        case GET_TRANSACTION_HISTORY_FAILED:
            return {
                ...state,
                message: 'transaction failed',
                loading: false,
                data: null,
                pagination: {
                    offset: null,
                    limit: null,
                },
            }
        case UNMOUNT_TRANSACTION:
            return {
                ...state,
                data: null,
                loading: false,
                message: "UNMOUNT",
                pagination: {
                    offset: null,
                    limit: null,
                },
            }
        default: return state
    }
}

export default getTransactionReducer