import { GET_WITH_TOKEN } from "../../../config/apiConfig"

export const unmountTransactionHistory = () => (dispatch) => {
    dispatch({ type: 'UNMOUNT_TRANSACTION' })
}

export const getTransactionHistoryAction = (parameter, successCB, failedCB) => async (dispatch) => {
    const params = {
        offset: parameter.offset,
        limit: parameter.limit
    }
    await dispatch({ type: 'GET_TRANSACTION_HISTORY' })
    GET_WITH_TOKEN('/transaction/history', params)
        .then((response) => {
            dispatch({
                type: "GET_TRANSACTION_HISTORY_SUCCESS",
                payload: {
                    data: response.data,
                    pagination: {
                        offset: parameter.offset,
                        limit: parameter.limit,
                    }
                }
            })
            return successCB && successCB(response)
        })
        .catch((err) => {
            dispatch({ type: 'GET_TRANSACTION_HISTORY_FAILED' })
            return failedCB && failedCB(err)
        })
}