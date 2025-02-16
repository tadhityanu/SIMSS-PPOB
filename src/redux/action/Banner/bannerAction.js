import { GET_WITH_TOKEN } from "../../../config/apiConfig"


export const unmountBanner = () => (dispatch) => {
    dispatch({ type: 'UNMOUNT_BANNER' })
}

const bannerAction = (successCB, failedCB) => async (dispatch) => {
    await dispatch({ type: 'GET_BANNER' })
    GET_WITH_TOKEN('/banner')
    .then((response) => {
        dispatch({
            type : "GET_BANNER_SUCCESS",
            payload : {
                data : response.data
            }
        })
        return successCB && successCB(response)
    })
    .catch((err) => {
        dispatch({ type: 'GET_BANNER_FAILED' })
        return failedCB && failedCB(err)
    })
}

export default bannerAction