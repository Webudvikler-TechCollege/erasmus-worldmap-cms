import { useEffect, useState } from "react"
import { ListPresenter } from "../../Components/Presenters/ListPresenter"
import { ContentWrapper } from "../../Components/ContentWrapper/ContentWrapper"
import { EducationModel as model } from "../../Models/Education.model"

export const EducationList = () => {
	const [ data, setData ] = useState([])
	
	const list_items = ['name']
	const elements = model.elements.filter(item => list_items.includes(item.name))
	elements.push({ name: "action", title: "Handling" })

	const arrButtons = [
		{ text: "Opret ny", link: `/${model.path}/create` }
	]

	useEffect(() => {
		model.getAllRecords()
			.then(records => setData(records))
			.catch(error => console.error(error));
	}, [setData]);

	return (
		<ContentWrapper title={model.section} subtitle="Oversigt" buttons={arrButtons}>
			<ListPresenter elements={elements} data={data} />
		</ContentWrapper>
	)
}