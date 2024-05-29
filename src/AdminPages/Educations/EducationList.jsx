import axios from "axios"
import { useEffect, useState } from "react"
import { ListPresenter } from "../../Components/ListPresenter/ListPresenter"

export const EducationList = () => {
	const [ data, setData ] = useState([])

	useEffect(() => {
		const fetchData = async () => {
			const result = await axios.get("https://api.mediehuset.net/erasmus_worldmap/educations")
			console.log(result.data);
			setData(result.data)
		}
		fetchData()
	}, [setData])


	return (
		<ListPresenter data={data} />
	)
}