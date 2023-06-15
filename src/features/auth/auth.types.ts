export type User = {
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

export type LoginArgs = Pick<User, "email" | "rememberMe"> & PasswordToPick
export type AddedUser = Omit<User, "token | tokenDeathTime">

export type RegisterArgs = Pick<User, "email" & PasswordToPick>
export type PartialUser = Partial<User>
export type RegisterResponseType = {
  addedUser: AddedUser
}
type PasswordToPick = {
  password: string
}
