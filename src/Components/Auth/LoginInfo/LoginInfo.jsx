import { useAuth } from "../../../Providers/AuthProvider"
import { LogoutButton } from "../LogoutButton/Logoutbutton"
import { LoginInfoContainer } from "./LoginInfo.style"

export const LoginInfo = () => {
  const { loginData } = useAuth()

  return (
    <>
      {loginData &&
        loginData?.user && (
          <LoginInfoContainer>
            <p>
              Logget ind som:
              <br />
              {`${loginData?.user?.firstname} ${loginData?.user?.lastname}`}
            </p>
            <LogoutButton />
          </LoginInfoContainer>
        )}
    </>
  )
}
