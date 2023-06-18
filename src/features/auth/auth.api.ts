import { AuthInstance } from "@/features/auth/auth.instanse"
import {
  AddedUser,
  LoginArgs,
  RegisterArgs,
  UserType,
} from "@/features/auth/auth.types"

export const authApi = {
  register: (params: RegisterArgs) => {
    return AuthInstance.post<AddedUser>("/register", params)
  },
  login: (params: LoginArgs) => {
    return AuthInstance.post<UserType>("/login", params)
  },
}
