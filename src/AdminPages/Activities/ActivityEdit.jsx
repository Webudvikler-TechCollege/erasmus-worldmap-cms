import { useParams } from "react-router-dom"
import { ContentWrapper } from "../../Components/ContentWrapper/ContentWrapper"
import { FormPresenter } from "../../Components/FormPresenter/FormPresenter.jsx"
import { ActivityModel as model } from "../../Models/Activity.model"

export const ActivityEdit = () => {
	const { id } = useParams()

	return (
		<ContentWrapper title={model.section} subtitle="Rediger">
			<FormPresenter model={model} id={id} />
		</ContentWrapper>
	)
}