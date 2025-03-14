import { LoginInfo } from "../Auth/LoginInfo/LoginInfo"
import { NavBarContainer } from "./NavBar.style"

export const Navbar = ({ area }) => {
  return (
    <NavBarContainer $area={area}>
      <nav>
        <ul>
          <li>
            <a href="/">Hjem</a>
          </li>
          <li>
            <a href="/songs">Songs</a>
          </li>
          <li>
            <a href="/artists">Artister</a>
          </li>
        </ul>
      </nav>
	  <div>
		<LoginInfo />
	  </div>
    </NavBarContainer>
  )
}
