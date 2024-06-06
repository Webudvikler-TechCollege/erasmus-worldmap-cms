import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
import { AdminTable } from "../../Styled/Admin.style"
import { useEffect, useState } from "react";

export const ViewPresenter = ({ model, data }) => {
  const [ parsedData, setParsedData ] = useState()
  const [ isLoaded, setIsLoaded ] = useState(false)

  useEffect(() => {
		const parseData = async () => {
			try {
				const newData = { ...data };
				model.elements.filter(item => item.model).forEach(elm => {
					newData[elm.name] = data[elm.name.split('_')[0]];
				});
				model.elements.filter(x => x.type === 'checkbox').forEach(elm => {
					newData[elm.name] = parseInt(data[elm.name]) === 1 ? 
            <AiOutlineCheck className="success" /> : 
            <AiOutlineClose className="error" />;
				});
				setParsedData(newData);
        setIsLoaded(true);
			} catch (error) {
				console.error(error);
			}
		};
		parseData();

  }, [data]);

  if(!isLoaded) return <p>Loading...</p>

  return (
    <AdminTable className="view">
      <tbody>
        {model.elements &&
          model.elements.map((element, index) => {
            return (
              <tr key={index}>
                <td className="field">{element.title}</td>
                <td>{parsedData[element.name]}</td>
              </tr>
            )
          })}
      </tbody>
    </AdminTable>
  )
}
