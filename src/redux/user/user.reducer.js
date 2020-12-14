import {userTypes} from './user.types'

const INITIAL_STATE = {
  userList: []
}

export const userReducer = (state=INITIAL_STATE,action)=>{
  switch(action.type){
    case userTypes.ADDUSER:
      return {
      ...state,
      userList: [...state.userList, action.payload]
    };
    default:
      return state
  }
}