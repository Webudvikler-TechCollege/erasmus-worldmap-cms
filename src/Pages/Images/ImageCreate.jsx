import { ContentWrapper } from "../../Components/ContentWrapper/ContentWrapper.jsx"
import { FormPresenter } from "../../Components/Presenters/FormPresenter.jsx"
import { ImageModel as model } from "../../Models/Image.model.js"

export const ImageCreate = () => {
	return (
		<ContentWrapper title={model.section} subtitle="Opret ny">
			<FormPresenter model={model} />
		</ContentWrapper>
	)
}