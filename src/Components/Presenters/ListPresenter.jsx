import { Link } from "react-router-dom"
import { AdminTable } from "../../Styled/Admin.style"
import { RiDeleteBin2Fill } from "react-icons/ri"
import { PiPencil } from "react-icons/pi"
import { FaEye } from "react-icons/fa6";

export const ListPresenter = ({ elements, data }) => {
	return (
		<AdminTable className="list">
			<thead>
				<tr>
				{elements.map((element, index) => {
					return (
						<th key={index}>{element.title}</th>
					)
				})}
				</tr>
			</thead>
			<tbody>
				{data && data.map(item => {
					item.action = <><Link className="actionbtn" to={`edit/${item.id}`} title="Rediger"><PiPencil /></Link>
									<Link className="actionbtn" to={`delete/${item.id}`} title="Slet"><RiDeleteBin2Fill /></Link>
									<Link className="actionbtn" to={`view/${item.id}`} title="Se detaljer"><FaEye /></Link></>
					return (
						<tr key={item.id}>
							{elements.map((element, key) => {
								return (
									<td key={key}>{item[element.name]}</td>
								)
							})}
						</tr>
					)
				})}

			</tbody>
		</AdminTable>
	)
}