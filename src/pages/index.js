import Auth from "@/components/Auth"
import Feed from "@/components/Feed"
import { useState } from "react"

const HomePage = () => {

  const [isAuthenticated, setIsAuthenticated] = useState(false)

  return isAuthenticated ? <Feed/> : <Auth/>
}

export default HomePage
