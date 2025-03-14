import { useParams } from "react-router-dom"
import { ContentWrapper } from "../../Components/ContentWrapper/ContentWrapper.jsx"
import { FormPresenter } from "../../Components/Presenters/FormPresenter.jsx"
import { ArtistModel as model } from "../../Models/Artist.model.js"

export const ArtistEdit = () => {
	const { id } = useParams()

	return (
		<ContentWrapper title={model.section} subtitle="Rediger">
			<FormPresenter model={model} id={id} />
		</ContentWrapper>
	)
}