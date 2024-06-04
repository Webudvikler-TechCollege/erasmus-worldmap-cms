import { AdminTable } from "../../Styled/Admin.style"

export const ViewPresenter = ({ model, data }) => {
  return (
    <AdminTable className="view">
      <tbody>
        {model.elements &&
          model.elements.map((element, index) => {
            return (
              <tr key={index}>
                <td className="field">{element.title}</td>
                <td>{data[element.name]}</td>
              </tr>
            )
          })}
      </tbody>
    </AdminTable>
  )
}
