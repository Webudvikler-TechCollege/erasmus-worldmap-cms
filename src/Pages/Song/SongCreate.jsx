import { ContentWrapper } from "../../Components/ContentWrapper/ContentWrapper"
import { FormPresenter } from "../../Components/Presenters/FormPresenter.jsx"
import { SongModel as model } from "../../Models/Song.model"

export const SongCreate = () => {
	return (
		<ContentWrapper title={model.section} subtitle="Opret ny">
			<FormPresenter model={model} />
		</ContentWrapper>
	)
}