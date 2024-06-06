import { ContentWrapper } from "../../Components/ContentWrapper/ContentWrapper.jsx"
import { FormPresenter } from "../../Components/Presenters/FormPresenter.jsx"
import { NewsModel as model } from "../../Models/News.model.js"

export const NewsCreate = () => {
	return (
		<ContentWrapper title={model.section} subtitle="Opret ny">
			<FormPresenter model={model} />
		</ContentWrapper>
	)
}