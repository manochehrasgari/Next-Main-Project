import http from "@/services/HttpService";
import {
  SIGNIN_USER_FAILURE,
  SIGNIN_USER_REQUEST,
  SIGNIN_USER_SUCCESS,
  SIGNUP_USER_FAILURE,
  SIGNUP_USER_REQUEST,
  SIGNUP_USER_SUCCESS,
} from "./userTypes";
import { toast } from "react-hot-toast";
import Router from "next/router";


// Sign In user Actions

export const signinUserRequest = () => {
  return {
    type: SIGNIN_USER_REQUEST,
  };
};

export const signinUserSuccess = (user) => {
  return {
    type: SIGNIN_USER_SUCCESS,
    payload: user,
  };
};

export const signinUserFailure = (error) => {
  return {
    type: SIGNIN_USER_FAILURE,
    payload: error,
  };
};

export const userSignin = (data) => {
  //? recieves the dispach method as arguments
  return (dispatch) => {
    dispatch(signinUserRequest());
    http
      .post("/user/signin", data, {
        withCredentials: true,
      })
      .then(({ data }) => {
        dispatch(signinUserSuccess(data));
        toast.success("خوش آمدید");
        Router.push("/blogs");
      })
      .catch((err) => {
        dispatch(signinUserFailure(err?.response?.data?.message));
        toast.error(err?.response?.data?.message);
      });
  };
};



// Sign Up user Actions

export const signupUserRequest = () => {
  return {
    type: SIGNUP_USER_REQUEST,
  };
};

export const signupUserSuccess = () => {
  return {
    type: SIGNUP_USER_SUCCESS,
  };
};

export const signupUserFailure = (error) => {
  return {
    type: SIGNUP_USER_FAILURE,
    payload: error,
  };
};

export const userSignup = (data) => {
  //? recieves the dispach method as arguments
  return (dispatch) => {
    dispatch(signupUserRequest());
    http
      .post("/user/signup", data)
      .then(({ data }) => {
        dispatch(signupUserSuccess(data));
        toast.success("ثبتنام با موفقیت انجام شد");
        Router.push("/signin");
      })
      .catch((err) => {
        dispatch(signupUserFailure(err?.response?.data?.message));
        toast.error(err?.response?.data?.message);
      });
  };
};

// Load User Actions


export const userLoad = (store) => {

    http
    .get("/user/load", {
      withCredentials: true,
    })
      .then(({ data }) => {
        store.dispatch(signinUserSuccess(data));
      })
      .catch((err) => {});
};

// Sign Out user
export const signOut = () =>{
  return (dispatch)=>{
    http
      .get("/user/logout", {
        withCredentials: true,
      })
      .then(({ data }) => {
       window.location.href = '/'
      })
      .catch();
  }
}
