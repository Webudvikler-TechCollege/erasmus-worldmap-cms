import axios from "axios"
import { useEffect, useState } from "react"
import { ContentWrapper } from "../../Components/ContentWrapper/ContentWrapper"
import { useNavigate, useParams } from "react-router-dom"
import { useAuth } from "../../Providers/AuthProvider"

export const EducationDelete = () => {
  const { id } = useParams()
  const { loginData } = useAuth()
  const [data, setData] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        `https://api.mediehuset.net/erasmus_worldmap/educations/${id}`
      )
      setData(result.data.item)
    }
    fetchData()
  }, [setData])

  const handleDelete = async () => {
    const options = {
      headers: {
        Authorization: `Bearer ${loginData.access_token}`,
      }
    }

    const result = await axios.delete(
      `https://api.mediehuset.net/erasmus_worldmap/educations/${id}`,
	  options
    )
	navigate("/educations")
  }

  return (
    <ContentWrapper title="Uddannelser" subtitle="Slet uddannelse">
      <p>
        Er du sikker på at du vil slette uddannelsen <i>{data.name}</i>?
      </p>
      <p>Handlingen kan ikke fortrydes.</p>
      <button onClick={() => handleDelete()}>Slet</button>
    </ContentWrapper>
  )
}
