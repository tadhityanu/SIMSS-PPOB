import { GET_WITH_TOKEN } from "../../../config/apiConfig"

export const unmountBalance = () => (dispatch) => {
    dispatch({ type: 'UNMOUNT_BALANCE' })
}

export const getBalanceAction = (successCB, failedCB) => async (dispatch) => {
    await dispatch({ type: 'GET_BALANCE' })
    GET_WITH_TOKEN('/balance')
    .then((response) => {
        dispatch({
            type : "GET_BALANCE_SUCCESS",
            payload : {
                data : response.data
            }
        })
        return successCB && successCB(response)
    })
    .catch((err) => {
        dispatch({ type: 'GET_BALANCE_FAILED' })
        return failedCB && failedCB(err)
    })
}