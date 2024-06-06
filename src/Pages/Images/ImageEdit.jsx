import { useParams } from "react-router-dom"
import { ContentWrapper } from "../../Components/ContentWrapper/ContentWrapper"
import { FormPresenter } from "../../Components/Presenters/FormPresenter"
import { useEffect, useState } from "react"
import { ImageModel as model } from "../../Models/Image.model"

export const ImageEdit = () => {
	const { id } = useParams()
	const [ data, setData ] = useState(null)

	useEffect(() => {
		model.getSingleRecord(id)
			.then(data => setData(data))
			.catch(error => console.error(error))
			console.log(data);
	}, [id])

	model.elements.forEach(element => {
		if (data) {
			element.value = data[element.name]
		}
	})			

	return (
		<ContentWrapper title={model.section} subtitle="Rediger">
			<FormPresenter model={model} id={id} />
		</ContentWrapper>
	)
}