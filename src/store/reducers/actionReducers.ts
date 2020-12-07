import { AuthAction, AuthState, SET_USER, SET_LOADING, SIGN_OUT, SET_ERROR, NEED_VERIFICATION, SET_SUCCESS } from "../types";

const initialState: AuthState = {
  user: null,
  authenticated: false,
  loading: false,
  error: '',
  needVerification: false,
  success: ''
}

export default (state = initialState, action: AuthAction) => {
  switch(action.type) {
    
    default:
      return state;
  }
}