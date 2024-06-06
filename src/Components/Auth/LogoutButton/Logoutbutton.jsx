import { Link } from "react-router-dom"
import { useAuth } from "../../../Providers/AuthProvider"

export const LogoutButton = () => {
  const { loginData, logout } = useAuth()

  const handleLogout = () => {
    logout()
    navigate("/")
  }

  return (
    <Link onClick={handleLogout}>Logout</Link>
  )
}
