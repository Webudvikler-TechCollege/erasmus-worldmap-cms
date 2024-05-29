import { Route, Routes } from "react-router-dom"
import { LoginForm } from "./Components/LoginForm/LoginForm"
import { HomePage } from "./Pages/HomePage/HomePage"
import { RequireAuth } from "./Components/RequireAuth/RequireAuth"
import { Header } from "./Components/Header/Header"
import { Footer } from "./Components/Footer/Footer"
import { ContainerStyle } from "./Styled/Container.style"
import { Grid } from "./Components/Grid/Grid"
import { Navbar } from "./Components/Navbar/Navbar"
import { Main } from "./Components/Main/Main"
import { EducationList } from "./AdminPages/Educations/EducationList"

function App() {
  return (
    <ContainerStyle $maxwidth="1024">
      <Grid>
        <Header area="header" />
        <Navbar area="navbar" />
        <Main area="main" >
          <Routes>
            <Route path="/" element={<LoginForm />}></Route>

            <Route path="/home" element={<RequireAuth />}>
              <Route index element={<HomePage />} />
            </Route>
            <Route path="/educations" element={<RequireAuth />}>
              <Route index element={<EducationList />} />
            </Route>
            
          </Routes>
        </Main>
        <Footer area="footer" />
      </Grid>
    </ContainerStyle>
  )
}

export default App
