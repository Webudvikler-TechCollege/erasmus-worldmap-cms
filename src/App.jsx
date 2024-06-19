import { Header } from "./Components/Header/Header"
import { Footer } from "./Components/Footer/Footer"
import { ContainerStyle } from "./Styled/Container.style"
import { Grid } from "./Components/Grid/Grid"
import { Navbar } from "./Components/Navbar/Navbar"
import { Main } from "./Components/Main/Main"
import { AppRouter } from "./Components/AppRouter/AppRouter"

const App = () => {
  return (
    <ContainerStyle $maxwidth="1024">
      <Grid>
        <Header area="header" />
        <Navbar area="navbar" />
        <Main area="main" >
          <AppRouter />
        </Main>
        <Footer area="footer" />
      </Grid>
    </ContainerStyle>
  )
}

export default App
