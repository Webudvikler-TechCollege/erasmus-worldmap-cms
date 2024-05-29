import styled from "styled-components"
import { ResetList } from "../../Styled/Mixins.style"

export const NavBarContainer = styled.nav`
  grid-area: ${(props) => props.$area};

  ul {
      ${ResetList};
      vertical-align: bottom;

      a {
        font-family: ${(props) => props.theme.fonts[0]};
        color: ${(props) => props.theme.colors.primary};
        text-decoration: none;
        font-size: ${(props) => props.theme.fontsizes.m};
        white-space: nowrap;

        &:hover {
          color: ${(props) => props.theme.colors.quaternary};
        }
      }
    }
  }
`
