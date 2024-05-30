import axios from "axios"
import { useEffect, useState } from "react"
import { ContentWrapper } from "../../Components/ContentWrapper/ContentWrapper"
import { ViewPresenter } from "../../Components/ViewPresenter/ViewPresenter"
import { useParams } from "react-router-dom"

export const EducationView = () => {
	const [ data, setData ] = useState([])
	const { id } = useParams()

	const arrCols = [
		{ name: "id", title: "Id" },
		{ name: "name", title: "Titel" },
		{ name: "description", title: "Beskrivelse" }
	]

	useEffect(() => {
		const fetchData = async () => {
			const result = await axios.get(`https://api.mediehuset.net/erasmus_worldmap/educations/${id}`)
			setData(result.data.item)
		}
		fetchData()
	}, [setData])

	const arrButtons = [
		{ text: "Opret ny", link: "/educations/create" },
		{ text: "Rediger", link: `/educations/edit/${id}` },
		{ text: "Oversigt", link: "/educations" }
	]

	return (
		<ContentWrapper title="Uddannelser" subtitle="Detaljer" buttons={arrButtons}>
			<ViewPresenter cols={arrCols} data={data} />
		</ContentWrapper>
	)
}