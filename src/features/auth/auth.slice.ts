import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { authApi } from "@/features/auth/auth.api"
import { LoginArgs, RegisterArgs, User } from "@/features/auth/auth.types"

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null as User | null,
  },
  reducers: {
    setUser: (state, action: PayloadAction<{ user: User }>) => {
      state.user = action.payload.user
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      if (action.payload?.user) {
        state.user = action.payload.user
      }
    })
  },
})

const register = createAsyncThunk(
  "auth/register",
  async (arg: RegisterArgs) => {
    try {
      const res = await authApi.register(arg)
      console.log(res)
    } catch (e) {}
  },
)

const login = createAsyncThunk(
  "auth/login",
  async (arg: LoginArgs, thunkAPI) => {
    try {
      const res = await authApi.login(arg)
      return { user: res.data }
    } catch (e) {}
  },
)

export const authReducer = authSlice.reducer
export const authActions = authSlice.actions
export const authThunks = { register, login }
