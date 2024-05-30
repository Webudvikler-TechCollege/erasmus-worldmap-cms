import { ButtonContainer } from "./Button.style"

export const Button = ({title, type = 'submit'}) => {
	return (
		<ButtonContainer type={type}>
			{title}
		</ButtonContainer>
	)
}