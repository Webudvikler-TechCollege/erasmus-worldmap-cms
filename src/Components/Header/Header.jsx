import { HeaderContainer } from "./Header.style"

export const Header = ({area}) => {
	return (
		<HeaderContainer $area={area}>
			<h1>Erasmus World Map</h1>
		</HeaderContainer>
	)
}