const UPDATE_LOGIN = 'UPDATE_LOGIN'
const UPDATE_PASSWORD = "UPDATE_PASSWORD"
const UPDATE_AUTH = "UPDATE_AUTH";

const initialState = {
  login: "",
  password: "",
  correctLogin: "developer21",
  correctPassword: "123456",
  isAuth: false,
};

export const auth = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_LOGIN: {
      return { ...state, login: action.login };
    }

    case UPDATE_PASSWORD: {
      return { ...state, password: action.password };
    }

    case UPDATE_AUTH: {
      return { ...state, isAuth: action.isAuth };
    }

    default:
      return state;
  }
}

export function updateLogin(login) {
  return {type: UPDATE_LOGIN, login}
}

export function updatePassword(password) {
  return { type: UPDATE_PASSWORD, password };
}

export function signIn(isAuth) {
  return { type: UPDATE_AUTH, isAuth };
}
