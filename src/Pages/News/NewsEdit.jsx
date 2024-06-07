import { useParams } from "react-router-dom"
import { ContentWrapper } from "../../Components/ContentWrapper/ContentWrapper.jsx"
import { FormPresenter } from "../../Components/Presenters/FormPresenter.jsx"
import { useEffect, useState } from "react"
import { NewsModel as model } from "../../Models/News.model.js"
import { getSingleRecord } from "../../Utils/ApiUtils.js"

export const NewsEdit = () => {
	const { id } = useParams()
	const [ data, setData ] = useState(null)

	useEffect(() => {
		getSingleRecord(model.endpoint, id)
			.then(data => setData(data))
			.catch(error => console.error(error))
	}, [id])

	return (
		<ContentWrapper title={model.section} subtitle="Rediger">
			<FormPresenter model={model} id={id} />
		</ContentWrapper>
	)
}