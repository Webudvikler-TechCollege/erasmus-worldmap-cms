import { useEffect, useState } from "react"
import { ContentWrapper } from "../../Components/ContentWrapper/ContentWrapper"
import { ViewPresenter } from "../../Components/ViewPresenter/ViewPresenter"
import { useParams } from "react-router-dom"
import { ActivityModel as model } from "../../Models/Activity.model"
import { AiOutlineCheck } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

export const ActivityView = () => {
	const [ data, setData ] = useState([])
	const { id } = useParams()

	useEffect(() => {
		const fixData = async () => {
			try {
				const data = await model.getSingleRecord(id);
				const modifiedData = { ...data };
				model.elements.filter(x => x.model).forEach(elm => {
					modifiedData[elm.name] = data[elm.name.split('_')[0]];
				});
				model.elements.filter(x => x.type === 'checkbox').forEach(elm => {
					modifiedData[elm.name] = parseInt(data[elm.name]) === 1 ? <AiOutlineCheck className="success" /> : <AiOutlineClose className="error" />;
				});
				setData(modifiedData);
			} catch (error) {
				console.error(error);
			}
		};
		fixData();
	}, [id]);

	const arrButtons = [
		{ text: "Opret ny", link: `/${model.path}/create` },
		{ text: "Rediger", link: `/${model.path}/edit/${id}` },
		{ text: "Oversigt", link: `/${model.path}` }
	]

	return (
		<ContentWrapper title={model.section} subtitle="Detaljer" buttons={arrButtons}>
			<ViewPresenter model={model} data={data} />
		</ContentWrapper>
	)
}