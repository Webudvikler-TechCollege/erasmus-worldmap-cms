import axios from "axios"
import { useEffect, useState } from "react"
import { ContentWrapper } from "../../Components/ContentWrapper/ContentWrapper"
import { useNavigate, useParams } from "react-router-dom"
import { useAuth } from "../../Providers/AuthProvider"
import { EducationModel as model } from "../../Models/Education.model"
import { setHeaderOptions } from "../../Utils/Main.utils"
import { Button } from "../../Components/Button/Button"

export const EducationDelete = () => {
  const { id } = useParams()
  const { loginData } = useAuth()
  const [data, setData] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    model.getSingleRecord(id)
      .then(data => setData(data))
      .catch(error => console.error(error))
  }, [setData])

  const handleDelete = async () => {
    const { error } = await model.deleteRecord(id, setHeaderOptions(loginData.access_token))
    if(error) return console.error(error)
 	  navigate(`/${model.path}`)
  }

  return (
    <ContentWrapper title={model.section} subtitle="Slet">
      <p>Er du sikker på at du vil slette uddannelsen <i>{data.name}</i>?</p>
      <p>Handlingen kan ikke fortrydes.</p>
      <Button event={handleDelete}>Slet</Button>
    </ContentWrapper>
  )
}
