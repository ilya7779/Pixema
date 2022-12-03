import * as t from './../actions'


export const setAuthorizationUserEmailAC = (payload: string) => {
  return {type: t.SET_AUTHORIZATION_USER_EMAIL, payload};
}
export const setAuthorizationUserPasswordAC = (payload: string) => {
  return {type: t.SET_AUTHORIZATION_USER_PASSWORD, payload};
}
export const setRegistrationUserNameAC = (payload: string) => {
  return {type: t.SET_REGISTRATION_USER_NAME, payload};
}
export const setRegistrationUserEmailAC = (payload: string) => {
  return {type: t.SET_REGISTRATION_USER_EMAIL, payload};
}
export const setRegistrationUserPasswordAC = (payload: string) => {
  return {type: t.SET_REGISTRATION_USER_PASSWORD, payload};
}
export const setRegistrationConfirmUserPasswordAC = (payload: string) => {
  return {type: t.SET_REGISTRATION_CONFIRM_USER_PASSWORD, payload};
}
export const setUserEmailAC = (payload: string) => {
  return {type: t.SET_USER_EMAIL, payload};
}
export const setUserIDAC = (payload: string) => {
  return {type: t.SET_USER_ID, payload};
}
export const setUserTokenAC = (payload: string) => {
  return {type: t.SET_USER_TOKEN, payload};
}
