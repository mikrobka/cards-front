export type UserType = {
  _id: string
  email: string
  rememberMe: boolean
  isAdmin: boolean
  name: string
  verified: boolean
  publicCardPacksCount: number
  created: string
  updated: string
  token: string
  tokenDeathTime: number
  __v: number
}

export type LoginArgs = Pick<UserType, "email" | "rememberMe"> & PasswordToPick
export type AddedUser = Omit<UserType, "token | tokenDeathTime">

export type RegisterArgs = Pick<UserType, "email" & PasswordToPick>
export type PartialUser = Partial<UserType>
export type RegisterResponseType = {
  addedUser: AddedUser
}
type PasswordToPick = {
  password: string
}
