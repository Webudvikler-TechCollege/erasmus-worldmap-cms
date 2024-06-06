import { useParams } from "react-router-dom"
import { ContentWrapper } from "../../Components/ContentWrapper/ContentWrapper.jsx"
import { FormPresenter } from "../../Components/Presenters/FormPresenter.jsx"
import { ActivityModel as model } from "../../Models/Activity.model.js"

export const ActivityEdit = () => {
	const { id } = useParams()

	return (
		<ContentWrapper title={model.section} subtitle="Rediger">
			<FormPresenter model={model} id={id} />
		</ContentWrapper>
	)
}