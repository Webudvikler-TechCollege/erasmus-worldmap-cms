import axios from "axios"
import { useEffect, useState } from "react"
import { ContentWrapper } from "../../Components/ContentWrapper/ContentWrapper"
import { ViewPresenter } from "../../Components/Presenters/ViewPresenter"
import { useParams } from "react-router-dom"
import { ImageModel as model } from "../../Models/Image.model"

export const ImageView = () => {
	const [ data, setData ] = useState([])
	const { id } = useParams()

	useEffect(() => {
		model.getSingleRecord(id)
			.then(data => setData(data))
			.catch(error => console.error(error))
	}, [setData])

	const arrButtons = [
		{ text: "Opret ny", link: `/${model.path}/create` },
		{ text: "Rediger", link: `/${model.path}/edit/${id}` },
		{ text: "Oversigt", link: `/${model.path}` }
	]

	return (
		<ContentWrapper title={model.section} subtitle="Detaljer" buttons={arrButtons}>
			<ViewPresenter model={model} data={data} />
		</ContentWrapper>
	)
}