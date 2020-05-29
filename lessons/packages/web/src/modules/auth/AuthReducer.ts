import * as R from 'ramda';

import { LOGIN, REGISTER, LOGOUT } from './AuthActions';

export const STATE_KEY = 'auth';

export interface AuthState {
  id: string;
  token: string;
  isAuthenticated: boolean;
  email: string;
}

export const initialState: AuthState = {
  id: null,
  token: null,
  isAuthenticated: false,
  email: null,
};

const AuthReducer = (
  state: AuthState = initialState,
  action: Record<string, any>,
) => {
  switch (action.type) {
    case `${LOGIN}_SUCCESS`:
    case `${REGISTER}_SUCCESS`: {
      return R.mergeDeepRight(state, {});
    }
    case LOGOUT: {
      return initialState;
    }
    default: {
      return state;
    }
  }
};

export const getId = R.path([STATE_KEY, 'id']);
export const getToken = R.path([STATE_KEY, 'token']);
export const getEmail = R.path([STATE_KEY, 'email']);
export const getIsAuthenticated = R.path([STATE_KEY, 'isAuthenticated']);

export default AuthReducer;
