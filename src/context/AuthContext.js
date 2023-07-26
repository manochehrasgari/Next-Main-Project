import http from "@/services/HttpService";
import axios from "axios";
import Router from "next/router";
import { createContext, useContext, useEffect } from "react";
import { toast } from "react-hot-toast";
import { useReducerAsync } from "use-reducer-async";

const AuthContext = createContext();
const AuthContextDispatcher = createContext();

const initialState = { user: null, loading: true, error: null };

const reducer = (state, action) => {
  //   const router = useRouter();
  switch (action.type) {
    case "SIGNIN_PENDING":
      return { user: null, error: false, loading: true };
    case "SIGNIN_SUCCESS":
      return { loading: false, error: null, user: action.payload };
    case "SIGNIN_REJECT":
      return { error: action.error, loading: false, user: null };
    default:
      return { ...state };
  }
};

const asyncActionHandlers = {
  SIGNIN:
  ({ dispatch }) =>
    (action) => {
      dispatch({ type: "SIGNIN_PENDING" });
      http
        .post("/user/signin", action.payload, {
          withCredentials: true,
        })
        .then(({ data }) => {
          dispatch({ type: "SIGNIN_SUCCESS", payload: data });
          toast.success("خوش آمدید");
          Router.push('/blogs')
        })
        .catch((err) => {
            dispatch({type: "SIGNIN_REJECT", error: err?.response?.data?.message})
            toast.error(err?.response?.data?.message)
        });
  },
    // signup user 
  SIGNUP:
  ({ dispatch }) =>
  (action) => {
    dispatch({ type: "SIGNIN_PENDING" });
    http
      .post("/user/signup", action.payload, {
        withCredentials: true,
      })
      .then(({ data }) => {
        dispatch({ type: "SIGNIN_SUCCESS", payload: null });
        toast.success("ثبتنام با موفقیت انجام شد");
        Router.push('/signin')
      })
      .catch((err) => {
          dispatch({type: "SIGNIN_REJECT", error: err?.response?.data?.message})
          toast.error(err?.response?.data?.message)
      });
  },  
  // Load user 
  LOAD_USER:
  ({ dispatch }) =>
  (action) => {
    dispatch({ type: "SIGNIN_PENDING" });
    http
      .get("/user/load", {
        withCredentials: true,
      })
      .then(({ data }) => {
        dispatch({ type: "SIGNIN_SUCCESS", payload: data });
      })
      .catch((err) => {
          dispatch({type: "SIGNIN_REJECT", error: err?.response?.data?.message})
      });
  },
  // Sign out user 
  SIGNOUT: 
  ({ dispatch }) =>
  (action) => {
    http
      .get("/user/logout", {
        withCredentials: true,
      })
      .then(({ data }) => {
       Router.push('/')
       window.location.href = '/'
      })
      .catch();
  },
};

const AuthProvider = ({ children }) => {
  const [user, dispatch] = useReducerAsync(
    reducer,
    initialState,
    asyncActionHandlers
  );

  useEffect(()=>{
    dispatch({type:"LOAD_USER"})
  },[])

  return (
    <AuthContext.Provider value={user}>
      <AuthContextDispatcher.Provider value={dispatch}>
        {children}
      </AuthContextDispatcher.Provider>
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => useContext(AuthContext);
export const useAuthActions = () => useContext(AuthContextDispatcher);
