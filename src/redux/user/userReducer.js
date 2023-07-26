import {
  SIGNIN_USER_FAILURE,
  SIGNIN_USER_REQUEST,
  SIGNIN_USER_SUCCESS,
  SIGNUP_USER_FAILURE,
  SIGNUP_USER_REQUEST,
  SIGNUP_USER_SUCCESS,
} from "./userTypes";

export const userSigninReducer = (state = {}, action) => {
  //   const router = useRouter();
  switch (action.type) {
    case SIGNIN_USER_REQUEST:
      return { user: null, error: false, loading: true };

    case SIGNIN_USER_SUCCESS:
      return { loading: false, error: null, user: action.payload };

    case SIGNIN_USER_FAILURE:
      return { error: action.error, loading: false, user: null };

    default:
      return { ...state };
  }
};

export const userSignupReducer = (state = {}, action) => {
  //   const router = useRouter();
  switch (action.type) {
    case SIGNUP_USER_REQUEST:
      return { loading: true };

    case SIGNUP_USER_SUCCESS:
      return { loading: false, user: null };

    case SIGNUP_USER_FAILURE:
      return { error: action.error, loading: false };

    default:
      return { ...state };
  }
};
