import { useParams } from "react-router-dom"
import { ContentWrapper } from "../../Components/ContentWrapper/ContentWrapper.jsx"
import { FormPresenter } from "../../Components/Presenters/FormPresenter.jsx"
import { SongModel as model } from "../../Models/Song.model.js"

export const SongEdit = () => {
	const { id } = useParams()

	return (
		<ContentWrapper title={model.section} subtitle="Rediger">
			<FormPresenter model={model} id={id} />
		</ContentWrapper>
	)
}