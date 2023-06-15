import axios from "axios"

export const AuthInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL + "auth/",
  withCredentials: true,
})

console.log(AuthInstance)
