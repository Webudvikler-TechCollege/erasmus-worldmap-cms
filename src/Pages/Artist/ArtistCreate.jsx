import { ContentWrapper } from "../../Components/ContentWrapper/ContentWrapper"
import { FormPresenter } from "../../Components/Presenters/FormPresenter.jsx"
import { ArtistModel as model } from "../../Models/Artist.model"

export const ArtistCreate = () => {
	return (
		<ContentWrapper title={model.section} subtitle="Opret ny">
			<FormPresenter model={model} />
		</ContentWrapper>
	)
}