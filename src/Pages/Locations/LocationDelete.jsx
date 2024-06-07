import axios from "axios"
import { useEffect, useState } from "react"
import { ContentWrapper } from "../../Components/ContentWrapper/ContentWrapper"
import { useNavigate, useParams } from "react-router-dom"
import { useAuth } from "../../Providers/AuthProvider"
import { LocationModel as model } from "../../Models/Location.model"
import { setHeaderOptions } from "../../Utils/Main.utils"
import { Button } from "../../Components/Button/Button"
import { deleteRecord, getSingleRecord } from "../../Utils/ApiUtils"

export const LocationDelete = () => {
  const { id } = useParams()
  const { loginData } = useAuth()
  const [data, setData] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    getSingleRecord(id,model.endpoint)
      .then(data => setData(data))
      .catch(error => console.error(error))
  }, [setData])

  const handleDelete = async () => {
    await deleteRecord(model.endpoint, id, setHeaderOptions(loginData.access_token))
 	  navigate(`/${model.path}`)
  }

  return (
    <ContentWrapper title={model.section} subtitle="Slet">
      <p>Er du sikker på at du vil slette denne post?</p>
      <p>Handlingen kan ikke fortrydes.</p>
      <Button event={handleDelete}>Slet</Button>
    </ContentWrapper>
  )
}
