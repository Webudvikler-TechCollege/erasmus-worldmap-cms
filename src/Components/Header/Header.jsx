import { HeaderContainer } from "./Header.style"

export const Header = ({area}) => {
	return (
		<HeaderContainer $area={area}>
			<h1>El Mando</h1>
		</HeaderContainer>
	)
}