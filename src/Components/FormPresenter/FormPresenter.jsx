import { useForm } from "react-hook-form"
import { AdminForm, AdminTable } from "../../Styled/Admin.style"
import { useAuth } from "../../Providers/AuthProvider"
import axios from "axios"
import { useLocation, useNavigate } from "react-router-dom"

export const FormPresenter = ({ apiOptions, formElements }) => {
  const { loginData } = useAuth()
  const location = useLocation()
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  console.log(location.pathname);
  const formHandler = async data => {
    const options = {
      headers: {
        Authorization: `Bearer ${loginData.access_token}`,
      },
    }
    const result = await axios[apiOptions.method](
      apiOptions.endpoint,
      data,
      options
    )
    console.log(result);
    navigate(location.pathname.slice(0, location.pathname.lastIndexOf("/"))+ '/view/' + result.data.new_id);
  }

  return (
    <AdminForm onSubmit={handleSubmit(formHandler)}>
      {apiOptions && apiOptions.id && (
        <input type="hidden" name="id" value={apiOptions.id} {...register('id')}/>
      )}
      {formElements.map((element, index) => {
        return (
          <div key={index}>
            <label htmlFor={element.name}>{element.title}:</label>
            {element.type === "text" && (
              <>
                <input
                  type="text"
                  id={element.name} 
                  name={element.name} 
                  defaultValue={element.value || ""} 
                  {...register(element.name, {
                    required: element.required,
                  })}
                />
                {errors[element.name] && (
                  <span>{element.title} skal udfyldes</span>
                )}
              </>
            )}
            {element.type === "textarea" && (
              <>
                <textarea
                  name={element.name} 
                  id={element.name} 
                  defaultValue={element.value || ""} 
                  {...register(element.name, {
                    required: element.required,
                  })}
                ></textarea>
                {errors[element.name] && (
                  <span>{element.title} skal udfyldes</span>
                )}
              </>
            )}
          </div>
        )
      })}
      <div className="buttonPanel">
        <button type="reset">Nulstil</button>
        <button type="submit">Gem</button>
      </div>
    </AdminForm>
  )
}
