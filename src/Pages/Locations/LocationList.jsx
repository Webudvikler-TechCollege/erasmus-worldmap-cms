import axios from "axios"
import { useEffect, useState } from "react"
import { ListPresenter } from "../../Components/Presenters/ListPresenter"
import { ContentWrapper } from "../../Components/ContentWrapper/ContentWrapper"
import { LocationModel as model } from "../../Models/Location.model"
import { useLocation } from "react-router-dom"
import { getAllRecords } from "../../Utils/ApiUtils"

export const LocationList = () => {
	const [ data, setData ] = useState([])
	const location = useLocation()

	const list_items = ['name', 'city', 'country']
	const elements = model.elements.filter(item => list_items.includes(item.name))
	elements.push({ name: "action", title: "Handling" })

	const arrButtons = [
		{ text: "Opret ny", link: `/${model.path}/create` }
	]

	useEffect(() => {
		getAllRecords(model.endpoint)
			.then(records => setData(records))
			.catch(error => console.error(error));
	}, [setData]);

	return (
		<ContentWrapper title={model.section} subtitle="Oversigt" buttons={arrButtons}>
			<ListPresenter elements={elements} data={data} />
		</ContentWrapper>
	)
}