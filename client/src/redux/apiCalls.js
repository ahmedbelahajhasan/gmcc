import {
  loginFailure,
  loginStart,
  loginSuccess,
  registerSuccess,
  registerFailure
} from "./userRedux";
import { publicRequest } from "../requestMethods";

export const login = async (dispatch, user, navigate) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
    if (res.status === 200) {
      if (res.data.user.isAdmin) {
        localStorage.setItem("isAdmin", true);
        navigate("/adminPortal");
      } else {
        navigate("/");
      }
      localStorage.setItem("accessToken", res.data.accessToken);
    }
  } catch (err) {
    dispatch(loginFailure());
  }
};
export const register = async (dispatch, user, navigate) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/register", user);
    dispatch(registerSuccess(res.data));
    if (res.status === 201) {
      navigate("/login");
    }
  } catch (err) {
    dispatch(registerFailure());
  }
};
