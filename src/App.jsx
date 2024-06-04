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
import { EducationCreate } from "./AdminPages/Educations/EducationCreate"
import { EducationEdit } from "./AdminPages/Educations/EducationEdit"
import { EducationDelete } from "./AdminPages/Educations/EducationDelete"
import { EducationView } from "./AdminPages/Educations/EducationView"
import { LocationDelete } from "./AdminPages/Locations/LocationDelete"
import { LocationCreate } from "./AdminPages/Locations/LocationCreate"
import { LocationView } from "./AdminPages/Locations/LocationView"
import { LocationEdit } from "./AdminPages/Locations/LocationEdit"
import { LocationList } from "./AdminPages/Locations/LocationList"
import { ActivityList } from "./AdminPages/Activities/ActivityList"
import { ActivityCreate } from "./AdminPages/Activities/ActivityCreate"
import { ActivityView } from "./AdminPages/Activities/ActivityView"
import { ActivityEdit } from "./AdminPages/Activities/ActivityEdit"
import { ActivityDelete } from "./AdminPages/Activities/ActivityDelete"
import { FormPage } from "./Pages/FormPage/FormPage"

function App() {
  return (
    <ContainerStyle $maxwidth="1024">
      <Grid>
        <Header area="header" />
        <Navbar area="navbar" />
        <Main area="main" >
          <Routes>
            <Route path="/" element={<LoginForm />}></Route>
            <Route path="/form" element={<FormPage />}></Route>

            <Route path="/home" element={<RequireAuth />}>
              <Route index element={<HomePage />} />
            </Route>
            <Route path="/educations" element={<RequireAuth />}>
              <Route index element={<EducationList />} />
              <Route path="create" element={<EducationCreate />} />
              <Route path="view/:id" element={<EducationView />} />
              <Route path="edit/:id" element={<EducationEdit />} />
              <Route path="delete/:id" element={<EducationDelete />} />
            </Route>
            <Route path="/locations" element={<RequireAuth />}>
              <Route index element={<LocationList />} />
              <Route path="create" element={<LocationCreate />} />
              <Route path="view/:id" element={<LocationView />} />
              <Route path="edit/:id" element={<LocationEdit />} />
              <Route path="delete/:id" element={<LocationDelete />} />
            </Route>
            <Route path="/activities" element={<RequireAuth />}>
              <Route index element={<ActivityList />} />
              <Route path="create" element={<ActivityCreate />} />
              <Route path="view/:id" element={<ActivityView />} />
              <Route path="edit/:id" element={<ActivityEdit />} />
              <Route path="delete/:id" element={<ActivityDelete />} />
            </Route>
            
          </Routes>
        </Main>
        <Footer area="footer" />
      </Grid>
    </ContainerStyle>
  )
}

export default App
