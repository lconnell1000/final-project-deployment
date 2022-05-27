import { loginFailure, loginStart, loginSuccess,
  registerSuccess, registerFailure, registerStart, }
from "./userRedux";
import { publicRequest } from "../requestMethods";

export const login = async (dispatch, user) => {
 //console.log(user);
 dispatch(loginStart());
 try {
   const res = await publicRequest.post("/auth/login", user);
   dispatch(loginSuccess(res.data));
 } catch (err) {
   dispatch(loginFailure());
 }
};

export const register = async (dispatch, user) => {
 dispatch (registerStart());
 try{
   const res = await publicRequest.post("/auth/register", user);
   dispatch(registerSuccess(res.data));
 } catch (err) {
   dispatch(registerFailure());
 }
};
