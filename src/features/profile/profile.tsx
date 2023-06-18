import React, { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useAppSelector } from "@/common"

export const Profile = () => {
  const navigate = useNavigate()
  const isAppInitialized = useAppSelector<boolean>(
    (state) => state.app.isAppInitialized,
  )

  useEffect(() => {
    if (!isAppInitialized) {
      navigate("/login")
    }
  })

  return <div>Profile</div>
}
