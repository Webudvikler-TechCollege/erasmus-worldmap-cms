import { useParams } from "react-router-dom"
import { ContentWrapper } from "../../Components/ContentWrapper/ContentWrapper"
import { FormPresenter } from "../../Components/FormPresenter/FormPresenter.jsx"
import { LocationModel as model } from "../../Models/Location.model"

export const LocationEdit = () => {
	const { id } = useParams()

	return (
		<ContentWrapper title={model.section} subtitle="Rediger">
			<FormPresenter model={model} id={id} />
		</ContentWrapper>
	)
}