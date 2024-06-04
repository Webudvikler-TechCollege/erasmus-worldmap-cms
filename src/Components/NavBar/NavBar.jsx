import { NavBarContainer } from "./NavBar.style"

export const Navbar = ({area}) => {
	return (
		<NavBarContainer $area={area}>
			<ul>
				<li><a href="/home">Home</a></li>
				<li><a href="/activities">Aktiviteter</a></li>
				<li><a href="/educations">Educations</a></li>
				<li><a href="/locations">Locations</a></li>
			</ul>
		</NavBarContainer>
	)
}