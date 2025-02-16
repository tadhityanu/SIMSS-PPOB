import { POST_AUTH } from "../../../config/apiConfig"
import Cookie from 'js-cookie'

export const loginAction = (values, successCB, failedCB) => async (dispatch) => {
    await dispatch({ type: 'LOGIN' })
    POST_AUTH('/login', values)
        .then((response) => {
            console.log(response);
            const token = response.data.token
            Cookie.set('user-token', token)

            dispatch({
                type : 'LOAD_AUTH_SUCCESS',
                payload : {
                    data : response?.data
                }
            })
            return successCB && successCB(response)
        })
        .catch((err) => {
            dispatch({type : "LOAD_AUTH_FAILED"})
            failedCB && failedCB(err)
        })
}