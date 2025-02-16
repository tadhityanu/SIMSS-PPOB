import { POST } from "../../../config/apiConfig"

export const topupAction = (values, successCB, failedCB) => async (dispatch) => {
    await dispatch({ type: 'SET_TOPUP' })
    POST('/topup', values)
        .then((response) => {            
            dispatch({
                type: 'SET_TOPUP_SUCCESS',
                payload: {
                    data: response?.data
                }
            })
            return successCB && successCB(response)
        })
        .catch((err) => {
            dispatch({ type: 'SET_TOPUP_FAILED' })
            return failedCB && failedCB(err)
        })
}