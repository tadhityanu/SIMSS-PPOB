import { POST } from "../../../config/apiConfig"

export const paymentAction = (values, successCB, failedCB) => async (dispatch) => {
    await dispatch({ type: 'SET_PAYMENT' })
    POST('/transaction', values)
        .then((response) => {            
            dispatch({
                type: 'SET_PAYMENT_SUCCESS',
                payload: {
                    data: response?.data
                }
            })
            return successCB && successCB(response)
        })
        .catch((err) => {
            dispatch({ type: 'SET_PAYMENT_FAILED' })
            return failedCB && failedCB(err)
        })
}