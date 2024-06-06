import { SiteName } from "../../../site.config"
import { HeaderContainer } from "./Header.style"

export const Header = ({area}) => {
	return (
		<HeaderContainer $area={area}>
			<h1>El Mando - {SiteName}</h1>
		</HeaderContainer>
	)
}