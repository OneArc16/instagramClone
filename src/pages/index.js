import Auth from "@/components/Auth"
import Feed from "@/components/Feed"
import { GlobalContext } from "@/state/context/GlobalContext"
import { useContext, useState } from "react"

const HomePage = () => {

  const {isAuthenticated} = useContext(GlobalContext)

  return isAuthenticated ? <Feed/> : <Auth/>
}

export default HomePage
