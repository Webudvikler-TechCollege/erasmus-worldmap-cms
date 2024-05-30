import { useParams } from "react-router-dom"
import { ContentWrapper } from "../../Components/ContentWrapper/ContentWrapper"
import { FormPresenter } from "../../Components/FormPresenter/FormPresenter"
import { useEffect, useState } from "react"

export const EducationEdit = () => {
	const { id } = useParams()
	const [ data, setData ] = useState(null)

	useEffect(() => {
		const fetchData = async () => {
			const result = await fetch(`https://api.mediehuset.net/erasmus_worldmap/educations/${id}`)
			const resultData = await result.json()
			setData(resultData.item)

		}
		fetchData()
	}, [id])

	const formElements = [
		{ name: "name", title: "Titel", type: "text", required: true},
		{ name: "description", title: "Beskrivelse", type: "textarea", required: true },
	]

	formElements.forEach(element => {
		if (data) {
			element.value = data[element.name]
		}
	})

	const apiOptions = {
		endpoint: "https://api.mediehuset.net/erasmus_worldmap/educations",
		method: "put",
		id: id

	}

	return (
		<ContentWrapper title="Uddannelser" subtitle="Opret ny uddannelse">
			<FormPresenter formElements={formElements} apiOptions={apiOptions} />
		</ContentWrapper>
	)
}