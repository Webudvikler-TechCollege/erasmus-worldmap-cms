import axios from "axios"
import { useEffect, useState } from "react"
import { ListPresenter } from "../../Components/ListPresenter/ListPresenter"
import { ContentWrapper } from "../../Components/ContentWrapper/ContentWrapper"

export const EducationList = () => {
	const [ data, setData ] = useState([])

	const arrCols = [
		{ name: "id", title: "ID" },
		{ name: "name", title: "Titel" },
		{ name: "action", title: "Handling" }
	]

	useEffect(() => {
		const fetchData = async () => {
			const result = await axios.get("https://api.mediehuset.net/erasmus_worldmap/educations")
			setData(result.data.items)
		}
		fetchData()
	}, [setData])



	return (
		<ContentWrapper title="Uddannelser" subtitle="Oversigt">
			<ListPresenter cols={arrCols} data={data} />
		</ContentWrapper>
	)
}