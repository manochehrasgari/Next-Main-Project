import { combineReducers } from "redux"
import { userLoadReducer, userSigninReducer, userSignupReducer } from "./user/userReducer"



export const rootReducer = combineReducers({
    userSignin : userSigninReducer ,
    userSignup : userSignupReducer ,
    userLoad : userLoadReducer
  })