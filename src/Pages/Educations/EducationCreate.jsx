import { ContentWrapper } from "../../Components/ContentWrapper/ContentWrapper"
import { FormPresenter } from "../../Components/Presenters/FormPresenter.jsx"
import { EducationModel as model } from "../../Models/Education.model"

export const EducationCreate = () => {
	return (
		<ContentWrapper title={model.section} subtitle="Opret ny">
			<FormPresenter model={model} />
		</ContentWrapper>
	)
}