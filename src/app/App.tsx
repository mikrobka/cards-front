import { Counter } from "@/features/counter/Counter"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Provider } from "react-redux"
import { store } from "@/app/store"
import { useAppDispatch, useAppSelector } from "@/common/hooks/hooks"
import { useEffect } from "react"
import { appActions } from "@/features/app/app.slice"
import { Login } from "@/features/auth/login/login"

export const Test = () => {
  const isLoading = useAppSelector((state) => state.app.isLoading)
  const dispatch = useAppDispatch()

  useEffect(() => {
    setTimeout(() => {
      dispatch(appActions.setIsLoading({ isLoading: false }))
    }, 1000)
  })

  if (isLoading) return <div>Loading...</div>

  return (
    <div>
      <Counter />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Test />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <div>Register</div>,
  },
  {
    path: "/check-email",
    element: <div>CheckEmail</div>,
  },
  {
    path: "/set-new-password",
    element: <div>SetNewPassword</div>,
  },
  {
    path: "/forgot-password",
    element: <div>ForgotPassword</div>,
  },
  {
    path: "/profile",
    element: <div>Profile</div>,
  },
  {
    path: "/packs",
    element: <div>Packs</div>,
  },
  {
    path: "/cards",
    element: <div>Cards</div>,
  },
  {
    path: "/learn",
    element: <div>Learn</div>,
  },
  {
    path: "*",
    element: <div>Profile</div>,
  },
])

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  )
}

export default App
