import { useForm } from "react-hook-form"
import { AdminForm, AdminTable } from "../../Styled/Admin.style"
import { useAuth } from "../../Providers/AuthProvider"
import axios from "axios"

export const FormPresenter = ({ apiOptions, formElements  }) => {
  const { loginData } = useAuth()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const formHandler = async data => {
	const options = {
		headers: {
			"Authorization": `Bearer ${loginData.access_token}`,
		}
	}
	const result = await axios[apiOptions.method](apiOptions.endpoint, data, options)
	console.log(result.data);
  }

  return (
    <AdminForm onSubmit={handleSubmit(formHandler)}>
      <AdminTable>
        <tbody>
          {formElements.map((element, index) => {
            return (
              <tr key={index}>
                <td>{element.title}</td>
                <td>
                  {element.type === "text" && (
					<>
                    <input 
						type="text" 
						name={element.name} 
						{...register(element.name, { required: element.required })} 
					/>
		            {errors[element.name] && <span>{element.title} skal udfyldes</span>}					
					</>
                  )}
                  {element.type === "textarea" && (
					<>
                    <textarea 
						name={element.name} 
						{...register(element.name, { required: element.required }	)}
					></textarea>
		            {errors[element.name] && <span>{element.title} skal udfyldes</span>}					
					</>
                  )}
                </td>
              </tr>
            )
          })}
		  <tr>
			<td colSpan={2}>
			  <button type="submit">Gem</button>
			</td>
		  </tr>
        </tbody>
      </AdminTable>
    </AdminForm>
  )
}
