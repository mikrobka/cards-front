import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { authApi } from "@/features/auth/auth.api"
import { LoginArgs, RegisterArgs, UserType } from "@/features/auth/auth.types"
import { createAppAsyncThunk } from "@/common"

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null as UserType | null,
  },
  reducers: {
    setUser: (state, action: PayloadAction<{ user: UserType }>) => {
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

const register = createAppAsyncThunk<any, RegisterArgs>(
  "auth/register",
  async (arg) => {
    try {
      const res = await authApi.register(arg)
      console.log(res)
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
