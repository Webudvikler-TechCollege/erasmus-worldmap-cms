import { useForm } from "react-hook-form"
import { AdminForm } from "../../Styled/Admin.style"
import { useAuth } from "../../Providers/AuthProvider"
import { useLocation, useNavigate } from "react-router-dom"
import { Button } from "../Button/Button"
import { convertArrayToObject, formalizeData, setHeaderOptions } from "../../Utils/Main.utils"
import { useEffect, useState } from "react"

export const FormPresenter = ({ model, id = 0 }) => {
  const { loginData } = useAuth()
  const location = useLocation()
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(true)
  const [selectOptions, setSelectOptions] = useState({})

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: async () => {
      if(id) {
        const apidata = await model.getSingleRecord(id)
        const data = formalizeData(apidata)
        return data
      } else {
        const data = convertArrayToObject(model.elements)
        return data
      }
    }
  })

  useEffect(() => {
    const initializeForm = async () => {
      const getSelectOptions = async () => {
        const selectOptions = {}
        for (const element of model.elements) {
          if (element.model) {
            try {
              const result = await element.model.getAllRecords()
              selectOptions[element.name] = result
            } catch (error) {
              console.error(
                `Error fetching options for ${element.name}:`,
                error
              )
            }
          }
        }
        setSelectOptions(selectOptions)
        setIsLoading(false)
      }
      getSelectOptions()
    }
    initializeForm()
  }, [model.elements])

  const formHandler = async data => {
    const method = id ? "updateRecord" : "createRecord"
    const result = await model[method](data, setHeaderOptions(loginData.access_token))
    const return_id = result.id ? result.id : id
    console.log(return_id);
    navigate(`/${location.pathname.split("/")[1]}/view/${return_id}`)
  }

  const renderElement = (element) => {
    switch (element.type) {
      case "text":
      case "password":
      case "email":
      case "date":
      case "datetime-local":
      case "number":
        return (
          <>
            <input
              type={element.type}
              {...register(element.name)}
            />
            {errors[element.name] && <span>{element.title} skal udfyldes</span>}
          </>
        )
        break
      case "textarea":
        return (
          <>
            <textarea
              id="summernote" 
              name={element.name}
              {...register(element.name, {
                required: element.required,
              })}
            ></textarea>
            {errors[element.name] && <span>{element.title} skal udfyldes</span>}
          </>
        )
        break
      case "select":
        const options = selectOptions[element.name] || []
        return (
          <>
            <select
              name={element.name}
              id={element.name}
              {...register(element.name, {
                required: element.required,
              })}
            >
              <option value="">Vælg</option>
              {options.map((option, index) => (
                <option key={index} value={option.id}>
                  {option.listname}
                </option>
              ))}
            </select>
            {errors[element.name] && <span>{element.title} skal udfyldes</span>}
          </>
        )
        break
      case "checkbox":
        return (
          <>
            <input
              type="checkbox"
              name={element.name}
              id={element.name}
              {...register(element.name)}
            />
          </>
        )
        break
    }
  }

  if(isLoading) { return <p>Loading...</p> }

  return (
    <AdminForm onSubmit={handleSubmit(formHandler)}>
      {id ? (
        <input
          type="hidden"
          name="id"
          value={id}
          {...register("id")}
        />
      ) : ''}
      {model.elements.map((element, index) => {
        return (
          <div key={index}>
            <label htmlFor={element.name}>{element.title}:</label>
            {renderElement(element)}
          </div>
        )
      })}
      <div className="buttonPanel">
        <Button
          type="button"
          event={() => navigate(`/${location.pathname.split("/")[1]}`)}
        >
          Annuller
        </Button>
        <Button type="submit">Gem</Button>
      </div>
    </AdminForm>
  )
}
