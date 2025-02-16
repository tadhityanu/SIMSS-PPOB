import { GET_WITH_TOKEN } from "../../../config/apiConfig"

export const unmountService = () => (dispatch) => {
    dispatch({ type: 'UNMOUNT_SERVICE' })
}

const servicesAction = (successCB, failedCB) => async (dispatch) => {
    await dispatch({ type: 'GET_SERVICES' })
    GET_WITH_TOKEN('/services')
    .then((response) => {
        dispatch({
            type : "GET_SERVICES_SUCCESS",
            payload : {
                data : response.data
            }
        })
        return successCB && successCB(response)
    })
    .catch((err) => {
        dispatch({ type: 'GET_SERVICES_FAILED' })
        return failedCB && failedCB(err)
    })
}

export default servicesAction