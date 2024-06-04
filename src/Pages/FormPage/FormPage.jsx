import { useForm } from "react-hook-form"

export const FormPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstname: "Don",
      lastname: "Johnson",
      gender: "m",
	    is_active: true,
    },
  })

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <p>
        <label>First name</label>
        <input {...register("firstname")} />
      </p>
      <p>
        <label>Last name</label>
        <input {...register("lastname")} />
      </p>
      <p>
        <label>Gender</label>
        <select {...register("gender")}>
		  <option value="">Select gender</option>
		  <option value="m">Male</option>
		  <option value="f">Female</option>
		</select>
      </p>
      <p>
        <label>Aktiv</label>
        <input type="checkbox" {...register("is_active")} />
      </p>
      <p>
        <button type="submit">Submit</button>
      </p>
    </form>
  )
}
