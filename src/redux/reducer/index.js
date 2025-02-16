import { combineReducers } from "redux";
import authReducer from "./Auth/AuthReducer";
import registerReducer from "./Register/regsiterReducer";
import servicesReducer from "./Services/servicesReducer";
import bannerReducer from "./Banner/bannerReducer";
import getProfileReducer from "./Profile/getProfileReducer";
import balanceReducer from "./Balance/balanceReducer";
import getTransactionReducer from "./Transaction/getTransactionReducer";

export default combineReducers({
    authReducer,
    register : registerReducer,
    services : servicesReducer,
    banner : bannerReducer,
    profile : combineReducers({
        getProfile : getProfileReducer
    }),
    balance : balanceReducer,
    getTransaction : getTransactionReducer
})