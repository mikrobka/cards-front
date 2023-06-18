import React from "react"
import { Button } from "@/features/components/ui"
import { useAppDispatch, useAppSelector } from "@/common"
import { authThunks } from "@/features/auth/auth.slice"
import { appActions } from "@/features/app/app.slice"

export const Header = () => {
  const isAppInitialized = useAppSelector<boolean>(
    (state) => state.app.isAppInitialized,
  )
  const dispatch = useAppDispatch()

  const logout = () => {
    dispatch(authThunks.logout())
    dispatch(appActions.setIsAppInitialized({ isAppInitialized: false }))
  }
  return (
    <>
      <header className=" flex justify-around relative w-1280 h-20 bg-gray-700">
        <div className="mt-6">logo</div>
        <div className="mt-6">
          Name
          {isAppInitialized ? (
            <Button onClick={logout}>Logout</Button>
          ) : (
            <Button>Sign in</Button>
          )}
        </div>
      </header>
    </>
  )
}
