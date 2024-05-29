import { NavBarContainer } from "./NavBar.style"

export const Navbar = ({area}) => {
	return (
		<NavBarContainer $area={area}>
			<ul>
				<li><a href="/home">Home</a></li>
				<li><a href="/educations">Educations</a></li>
			</ul>
		</NavBarContainer>
	)
}