import { GET_WITH_TOKEN, POST, PUT, UPLOAD, UPLOAD_PUT } from "../../../config/apiConfig"

export const unmountProfile = () => (dispatch) => {
    dispatch({ type: 'UNMOUNT_PROFILE' })
}

export const getProfileAction = (successCB, failedCB) => async (dispatch) => {
    await dispatch({ type: 'GET_PROFILE' })
    GET_WITH_TOKEN('/profile')
        .then((response) => {
            dispatch({
                type: "GET_PROFILE_SUCCESS",
                payload: {
                    data: response.data
                }
            })
            return successCB && successCB(response)
        })
        .catch((err) => {
            dispatch({ type: 'GET_PROFILE_FAILED' })
            return failedCB && failedCB(err)
        })
}

export const updateProfileAction = (values, successCB, failedCB) => async (dispatch) => {
    await dispatch({ type: 'UPDATE_PROFILE' })
    PUT('/profile/update', values)
        .then((response) => {
            dispatch({
                type: 'UPDATE_PROFILE_SUCCESS',
                payload: {
                    data: response?.data
                }
            })
            return successCB && successCB(response)
        })
        .catch((err) => {
            dispatch({ type: 'UPDATE_PROFILE_FAILED' })
            return failedCB && failedCB(err)
        })
}

export const updateProfilePhotoAction = (values, successCB, failedCB) => async (dispatch) => {
    await dispatch({ type: 'UPDATE_PROFILE_PHOTO' })
    UPLOAD_PUT('/profile/image', values)
        .then((response) => {
            dispatch({
                type: 'UPDATE_PROFILE_PHOTO_SUCCESS',
                payload: {
                    data: response?.data
                }
            })
            return successCB && successCB(response)
        })
        .catch((err) => {
            dispatch({ type: 'UPDATE_PROFILE_PHOTO_FAILED' })
            return failedCB && failedCB(err)
        })
}