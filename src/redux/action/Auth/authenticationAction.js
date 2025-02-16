import Cookie from 'js-cookie'

export function checkAuth(successCB, failedCB) {
    return async (dispatch) => {
        const getToken = Cookie.get("user-token")

        dispatch({ type: "LOAD_AUTH" })
        if (getToken) {
            dispatch({
                type: "LOAD_AUTH_SUCCESS",
                payload: {
                    authed: true,
                }
            })
            successCB && successCB()
        } else {
            dispatch({
                type: "LOAD_AUTH_FAILED",
                payload: {
                    authed: false
                }
            })
            failedCB && failedCB()
        }
    }
}

export function setLogout(successCB, failedCB) {
    return async (dispatch) => {
        const getToken = Cookie.get("user-token")

        dispatch({ type: "LOAD_AUTH" })
        if (getToken) {
            Cookie.remove('user-token')
            successCB && successCB()
        } else {
            dispatch({
                type: "LOAD_AUTH_FAILED",
                payload: {
                    authed: false
                }
            })
            failedCB && failedCB()
        }
    }
}