export const namespace = 'AUTH';
export const LOGIN = `${namespace}/LOGIN`;
export const REGISTER = `${namespace}/REGISTER`;
export const LOGOUT = `${namespace}/LOGOUT`;

export const login = (payload: { email: string; password: string }) => ({
  type: LOGIN,
  payload: {
    request: {
      url: '/auth/login',
      data: payload,
    },
  },
});

export const register = (payload: { email: string; password: string }) => ({
  type: REGISTER,
  payload: {
    request: {
      url: '/auth/login',
      data: payload,
    },
  },
});

export const logout = () => ({
  type: LOGOUT,
});
