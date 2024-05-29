import { useForm } from "react-hook-form"
import { useAuth } from "../../Providers/AuthProvider"
import axios from "axios"
import { FormContainer } from "../../Styled/Form.style"
import { useState } from "react"
import { LoginFormContainer } from "./LoginForm.style"

export const LoginForm = () => {
  const { loginData, login, logout } = useAuth()
  const [ message, setMessage ] = useState("")
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const handleLogin = async (data) => {
    const endpoint = `https://api.mediehuset.net/token`
    try {
      const result = await axios.post(endpoint, data)
      login(result.data)
    } catch (error) {
      setMessage("Forkert brugernavn eller adgangskode")
    }
  }

  return (
    <LoginFormContainer>
      {!loginData ? (
        <FormContainer method="POST" onSubmit={handleSubmit(handleLogin)}>
          <div className="input-group">
            <label htmlFor="username">Brugernavn:</label>
            <input
              type="text"
              id="username"
              {...register("username", { required: true })}
            />
            {errors.username && <span>Brugernavn skal udfyldes</span>}
          </div>
          <div className="input-group">
            <label htmlFor="password">Adgangskode:</label>
            <input
              type="password"
              id="password"
              {...register("password", { required: true })}
            />
            {errors.password && <span>Password skal udfyldes</span>}
          </div>
          {message && <span>{message}</span>}
          <div>
            <button>Login</button>
          </div>
        </FormContainer>
      ) : (
        <div>
          <h2>
            Du er logget ind som{" "}
            {`${loginData.user.firstname} ${loginData.user.lastname}`}

          </h2>
          <button onClick={() => logout()}>Log ud</button>
          
        </div>
      )}
   </LoginFormContainer>
  )
}
