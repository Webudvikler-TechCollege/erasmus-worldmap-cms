import { createGlobalStyle } from "styled-components"
import { Reset } from "./Mixins.style"

const GlobalStyle = createGlobalStyle`
	body {
		font-family: 'Arial', sans-serif;
		background-color: #fff;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100vh;
		margin: 0;	
	}

	h1 {
		color: ${(props) => props.theme.colors.primary};
		font-family: ${(props) => props.theme.fonts[0]};
		font-size: ${(props) => props.theme.fontsizes.l};
		margin-block: 0.8rem;
	}

	h2 {
		color: ${(props) => props.theme.colors.primary};
		font-family: ${(props) => props.theme.fonts[0]};
		font-size: 1.5rem;
		margin-block: 0rem;
		margin-bottom: 0rem;
	}

	h4 {
		color: ${(props) => props.theme.colors.primary};
		font-family: ${(props) => props.theme.fonts[0]};
		font-size: 1rem;
		margin-block: 0rem;
	}

	pre {
		font-family: ${(props) => props.theme.fonts[2]};
		font-size: 1.1rem;
	}	

	a {
		text-decoration: none;
		color: ${(props) => props.theme.colors.secundary};
		
		&:hover {
			color: ${(props) => props.theme.colors.quaternary};
		}
	}

	.back {
		font-size: 0.8rem;

	}

	@media print {
		header, footer, nav, .back {
			display: none !important;
		}

		* {
			border: 0px none  !important;
		}
	}		

`
export { GlobalStyle, Reset }
