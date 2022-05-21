import { LOGIN, LOGOUT } from "./type";

export const login = (token) => (dispatch) => {
  return dispatch({
    type: LOGIN,
    payload: {isLoggedIn: true, token},
  });
};

export const logout = () => (dispatch) => {
  return dispatch({
    type: LOGOUT,
    payload: {isLoggedIn: false, token: null},
  });
};