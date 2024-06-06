import { createContext, useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const AuthContext = createContext()
export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({children}) => {
	const [ loginData, setLoginData ] = useState(null)
	const navigate = useNavigate()

	useEffect(() => {
		const storedData = sessionStorage.getItem('access_token')
		if(storedData) {
			setLoginData(JSON.parse(storedData))
		} else if(loginData) {
			setLoginData(null)
		}
	},[])

	const login = data => {
		setLoginData(data)
		sessionStorage.setItem('access_token', JSON.stringify(data))
		navigate('/')
	}

	const logout = () => {
		setLoginData(null)
		sessionStorage.removeItem('access_token')
		navigate('/')
	}	

	useEffect(() => {
		if(sessionStorage.getItem('access_token')) {
			setLoginData(JSON.parse(sessionStorage.getItem('access_token')))
		}
	},[])

  return (
	<AuthContext.Provider value={{ loginData, login, logout }}>
		{children}
	</AuthContext.Provider>
  )
}