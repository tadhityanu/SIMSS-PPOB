
const errorHandler = (status) => async (dispatch) => {
    if(status === null){
        await dispatch({type : "SET_LOGOUT"})
        // return dispatch(setLogout() => {
        //     dispatch({
        //         type : "SET_LOGOUT_SUCCESS"
        //     })
        // })
    }
}

export default errorHandler