export enum ActionTypes {
  REGISTER = '[Auth] Register',
  REGISTER_SUCCESS = '[Auth] Register success',
  REGISTER_FAILURE = '[Auth] Register failure',

  LOGIN = '[Auth] Login',
  LOGIN_SUCCESS = '[Auth] Login success',
  LOGIN_FAILURE = '[Auth] Login failure',

  CHECK_AUTH = '[Auth] check auth',
  CHECK_AUTH_SUCCESS = '[Auth] check auth success',
  CHECK_AUTH_FAILURE = '[Auth] check auth failure',

  UPDATE_USER = '[Auth] update user',
  UPDATE_USER_SUCCESS = '[Auth] update user success',
  UPDATE_USER_FAILURE = '[Auth] update user failure',

  LOGOUT = '[Auth] Logout',
}
