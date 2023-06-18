import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { authApi } from "@/features/auth/auth.api"
import {
  AddedUser,
  LoginArgs,
  RegisterArgs,
  UserType,
} from "@/features/auth/auth.types"
import { createAppAsyncThunk } from "@/common"

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null as UserType | null,
    addedUser: null as AddedUser | null,
    isAuth: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    builder
      .addCase(login.fulfilled, (state, action) => {
        if (action.payload?.user) {
          state.user = action.payload.user
          state.isAuth = true
        }
      })
      .addCase(login.rejected, (state, action) => {
        console.error(action.error)
      })
      .addCase(login.pending, (state, action) => {
        console.log("loading...")
      })
      .addCase(register.fulfilled, (state, action) => {
        state.addedUser = action.payload.addedUser.addedUser
      })
  },
})

const register = createAppAsyncThunk<any, RegisterArgs>(
  "auth/register",
  async (arg) => {
    try {
      const res = await authApi.register(arg)
      debugger
      return { addedUser: res.data }
    } catch (e) {}
  },
)

const login = createAppAsyncThunk<{ user: UserType }, LoginArgs>(
  "auth/login",
  async (arg, thunkAPI) => {
    try {
      const res = await authApi.login(arg)
      return { user: res.data }
    } catch (e) {
      return thunkAPI.rejectWithValue(e)
    }
  },
)

export const authReducer = authSlice.reducer
export const authActions = authSlice.actions
export const authThunks = { register, login }
