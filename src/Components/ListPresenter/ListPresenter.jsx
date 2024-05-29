import { Link } from "react-router-dom"
import { AdminTable } from "../../Styled/Admin.style"

export const ListPresenter = ({ cols, data }) => {
	return (
		<AdminTable>
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
					item.action = <Link to={`/admin/educations/edit/${item.id}`}>Rediger</Link>
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