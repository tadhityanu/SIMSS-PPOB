import { POST_AUTH } from "../../../config/apiConfig"

export const registerAction = (values, successCB, failedCB) => async (dispatch) => {
    await dispatch({ type: 'REGISTER_USER' })
    POST_AUTH('/registration', values)
        .then((response) => {            
            dispatch({
                type: 'REGISTER_USER_SUCCESS',
                payload: {
                    data: response?.data
                }
            })
            return successCB && successCB(response)
        })
        .catch((err) => {
            dispatch({ type: 'REGISTER_USER_FAILED' })
            return failedCB && failedCB(err)
        })
}