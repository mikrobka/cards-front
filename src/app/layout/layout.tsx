import { ReactNode } from "react"
import { Header } from "@/features/header/header"

type LayoutProps = {
  children: ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <div>
        <Header />
      </div>
      <main>{children}</main>
    </>
  )
}
