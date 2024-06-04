import { ContentWrapper } from "../../Components/ContentWrapper/ContentWrapper"
import { FormPresenter } from "../../Components/FormPresenter/FormPresenter.jsx"
import { ActivityModel as model } from "../../Models/Activity.model"

export const ActivityCreate = () => {
	return (
		<ContentWrapper title={model.section} subtitle="Opret ny">
			<FormPresenter model={model} />
		</ContentWrapper>
	)
}