import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type Status = "idle" | "loading" | "success" | "error"
export type InitialAppStateType = typeof initialState

const initialState = {
  error: null as null | string,
  isLoading: true,
  isAppInitialized: true,
  status: "idle" as Status,
}

const appSlice = createSlice({
  name: "app",
  initialState: initialState,
  reducers: {
    setIsLoading: (state, action: PayloadAction<{ isLoading: boolean }>) => {
      state.isLoading = action.payload.isLoading
    },
    setIsAppInitialized: (
      state,
      action: PayloadAction<{ isAppInitialized: boolean }>,
    ) => {
      state.isAppInitialized = action.payload.isAppInitialized
    },
    extraReducers: (builder) => {},
  },
})

export const appReducer = appSlice.reducer
export const appActions = appSlice.actions
