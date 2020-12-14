import {userTypes} from './user.types'

export const addUserAction = (user) =>({
  type:userTypes.ADDUSER,
  payload:user
})