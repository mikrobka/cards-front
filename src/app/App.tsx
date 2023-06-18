import { Counter } from "@/features/counter/Counter"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Provider } from "react-redux"
import { store } from "@/app/store"
import { useAppDispatch, useAppSelector } from "@/common/hooks/hooks"
import { useEffect } from "react"
import { appActions } from "@/features/app/app.slice"
import { Login } from "@/features/auth/login/login"
import { Layout } from "@/app/layout/layout"
import { SignUp } from "@/features/auth/signUp/signUp"
import { Profile } from "@/features/profile/profile"

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
      <Login />
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
    element: <SignUp />,
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
    element: <Profile />,
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
      <Layout>
        <RouterProvider router={router} />
      </Layout>
    </Provider>
  )
}

export default App
