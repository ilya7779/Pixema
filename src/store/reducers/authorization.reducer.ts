import * as t from './../actions'

type AuthorizationState = {
  authorizationUserEmail: string
  authorizationUserPassword: string
  registrationUserName: string
  registrationUserEmail: string
  registrationUserPassword: string
  registrationConfirmUserPassword: string
  userEmail: string
  userID: string
  userToken: string
}

const initialState: AuthorizationState = {
  authorizationUserEmail: '',
  authorizationUserPassword: '',
  registrationUserName: '',
  registrationUserEmail: '',
  registrationUserPassword: '',
  registrationConfirmUserPassword: '',
  userEmail: '',
  userID: '',
  userToken: '',
};

export const authorizationReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case t.SET_AUTHORIZATION_USER_EMAIL: {
      return {...state, authorizationUserEmail: action.payload};
    }
    case t.SET_AUTHORIZATION_USER_PASSWORD: {
      return {...state, authorizationUserPassword: action.payload};
    }
    case t.SET_REGISTRATION_USER_NAME: {
      return {...state, registrationUserName: action.payload};
    }
    case t.SET_REGISTRATION_USER_EMAIL: {
      return {...state, registrationUserEmail: action.payload};
    }
    case t.SET_REGISTRATION_USER_PASSWORD: {
      return {...state, registrationUserPassword: action.payload};
    }
    case t.SET_REGISTRATION_CONFIRM_USER_PASSWORD: {
      return {...state, registrationConfirmUserPassword: action.payload};
    }
    case t.SET_USER_EMAIL: {
      return {...state, userEmail: action.payload};
    }
    case t.SET_USER_ID: {
      return {...state, userID: action.payload};
    }
    case t.SET_USER_TOKEN: {
      return {...state, userToken: action.payload};
    }
    default:
      return state;
  }
};
