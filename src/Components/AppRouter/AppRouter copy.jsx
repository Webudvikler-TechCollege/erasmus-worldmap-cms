import { Route, Routes } from "react-router-dom"
import { LoginForm } from "../LoginForm/LoginForm"
import { RequireAuth } from "../RequireAuth/RequireAuth"
import { HomePage } from "../../Pages/HomePage/HomePage"
import { EducationList } from "../../AdminPages/Educations/EducationList"
import { EducationCreate } from "../../AdminPages/Educations/EducationCreate"
import { EducationEdit } from "../../AdminPages/Educations/EducationEdit"
import { EducationDelete } from "../../AdminPages/Educations/EducationDelete"
import { EducationView } from "../../AdminPages/Educations/EducationView"
import { LocationDelete } from "../../AdminPages/Locations/LocationDelete"
import { LocationCreate } from "../../AdminPages/Locations/LocationCreate"
import { LocationView } from "../../AdminPages/Locations/LocationView"
import { LocationEdit } from "../../AdminPages/Locations/LocationEdit"
import { LocationList } from "../../AdminPages/Locations/LocationList"
import { ActivityList } from "../../AdminPages/Activities/ActivityList"
import { ActivityCreate } from "../../AdminPages/Activities/ActivityCreate"
import { ActivityView } from "../../AdminPages/Activities/ActivityView"
import { ActivityEdit } from "../../AdminPages/Activities/ActivityEdit"
import { ActivityDelete } from "../../AdminPages/Activities/ActivityDelete"
import { FormPage } from "../../Pages/FormPage/FormPage"
import { ImageList } from "../../AdminPages/Images/ImageList"
import { ImageCreate } from "../../AdminPages/Images/ImageCreate"
import { ImageView } from "../../AdminPages/Images/ImageView"
import { ImageEdit } from "../../AdminPages/Images/ImageEdit"
import { ImageDelete } from "../../AdminPages/Images/ImageDelete"
import { NewsList } from "../../AdminPages/News/NewsList"
import { NewsCreate } from "../../AdminPages/News/NewsCreate"
import { NewsView } from "../../AdminPages/News/NewsView"
import { NewsEdit } from "../../AdminPages/News/NewsEdit"
import { NewsDelete } from "../../AdminPages/News/NewsDelete"


export const AppRouter = () => {
  return (
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
      <Route path="/news" element={<RequireAuth />}>
        <Route index element={<NewsList />} />
        <Route path="create" element={<NewsCreate />} />
        <Route path="view/:id" element={<NewsView />} />
        <Route path="edit/:id" element={<NewsEdit />} />
        <Route path="delete/:id" element={<NewsDelete />} />
      </Route>
      <Route path="/images" element={<RequireAuth />}>
        <Route index element={<ImageList />} />
        <Route path="create" element={<ImageCreate />} />
        <Route path="view/:id" element={<ImageView />} />
        <Route path="edit/:id" element={<ImageEdit />} />
        <Route path="delete/:id" element={<ImageDelete />} />
      </Route>
    </Routes>
  )
}
