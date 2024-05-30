import { Link } from "react-router-dom"
import { AdminTable } from "../../Styled/Admin.style"
import { RiDeleteBin2Fill } from "react-icons/ri"
import { PiPencil } from "react-icons/pi"
import { FaEye } from "react-icons/fa6";

export const ListPresenter = ({ cols, data }) => {

	return (
		<AdminTable className="list">
			<thead>
				<tr>
				{cols.map((col, index) => {
					return (
						<th key={index}>{col.title}</th>
					)
				})}
				</tr>
			</thead>
			<tbody>
				{data && data.map(item => {
					item.action = <><Link className="actionbtn" to={`edit/${item.id}`}><PiPencil /></Link>
									<Link className="actionbtn" to={`delete/${item.id}`}><RiDeleteBin2Fill /></Link>
									<Link className="actionbtn" to={`view/${item.id}`}><FaEye /></Link></>
					return (
						<tr key={item.id}>
							{cols.map((col, key) => {
								return (
									<td key={key}>{item[col.name]}</td>
								)
							})}
						</tr>
					)
				})}

			</tbody>
		</AdminTable>
	)
}