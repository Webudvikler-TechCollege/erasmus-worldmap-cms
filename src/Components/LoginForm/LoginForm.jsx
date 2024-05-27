import { useForm } from "react-hook-form"
import { useAuth } from "../../Providers/AuthProvider"
import axios from "axios"
import { FormContainer } from "../../Styled/Form.style"

export const LoginForm = () => {
  const { loginData, setLoginData } = useAuth()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const submitHandler = async (data) => {
    const endpoint = `https://api.mediehuset.net/token`
    try {
      const result = await axios.post(endpoint, data)
      sessionStorage.setItem("access_token", JSON.stringify(result.data))
      setLoginData(result.data)
    } catch (error) {
      console.error(error)
    }
  }

  const LogOut = () => {
    sessionStorage.removeItem("access_token")
    setLoginData("")
  }

  return (
    <>
      {!loginData ? (
        <FormContainer method="POST" onSubmit={handleSubmit(submitHandler)}>
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
          <button onClick={() => LogOut()}>Log ud</button>
        </div>
      )}
    </>
  )
}
