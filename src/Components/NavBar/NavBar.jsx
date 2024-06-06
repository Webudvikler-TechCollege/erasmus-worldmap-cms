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
            <a href="/activities">Aktiviteter</a>
          </li>
          <li>
            <a href="/educations">Uddannelser</a>
          </li>
          <li>
            <a href="/locations">Lokationer</a>
          </li>
          <li>
            <a href="/news">Nyheder</a>
          </li>
          <li>
            <a href="/images">Billeder</a>
          </li>
        </ul>
      </nav>
	  <div>
		<LoginInfo />
	  </div>
    </NavBarContainer>
  )
}
