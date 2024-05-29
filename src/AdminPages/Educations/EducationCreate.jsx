import { useState } from "react"
import { ContentWrapper } from "../../Components/ContentWrapper/ContentWrapper"
import { FormPresenter } from "../../Components/FormPresenter/FormPresenter"

export const EducationCreate = () => {
	const [ data, setData ] = useState([])

	const formElements = [
		{ name: "name", title: "Titel", type: "text", required: true},
		{ name: "description", title: "Beskrivelse", type: "textarea", required: true },
	]

	const apiOptions = {
		endpoint: "https://api.mediehuset.net/erasmus_worldmap/educations",
		method: "post"
	}

	return (
		<ContentWrapper title="Uddannelser" subtitle="Opret ny uddannelse">
			<FormPresenter formElements={formElements} apiOptions={apiOptions} />
		</ContentWrapper>
	)
}