import { AdminTable } from "../../Styled/Admin.style"

export const ViewPresenter = ({ cols, data }) => {
  return (
    <AdminTable className="view">
      <tbody>
        {cols &&
          cols.map((item, index) => {
            return (
              <tr key={index}>
                <td className="field">{item.title}</td>
                <td>{data[item.name]}</td>
              </tr>
            )
          })}
      </tbody>
    </AdminTable>
  )
}
