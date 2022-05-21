import { LOGIN, LOGOUT } from "./type";

const initialState = {
  isLoggedIn: false,
  token: ""
};

// Creating my reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return { ...state, isLoggedIn: action.payload };
    case LOGOUT:
      return { ...state, isLoggedIn: action.payload };
    default:
      return state;
  }
}