import { Route, Routes } from "react-router-dom"
import { RequireAuth } from "../Auth/RequireAuth/RequireAuth"
import { EducationList } from "../../Pages/Educations/EducationList"
import { EducationCreate } from "../../Pages/Educations/EducationCreate"
import { EducationEdit } from "../../Pages/Educations/EducationEdit"
import { EducationDelete } from "../../Pages/Educations/EducationDelete"
import { EducationView } from "../../Pages/Educations/EducationView"
import { LocationDelete } from "../../Pages/Locations/LocationDelete"
import { LocationCreate } from "../../Pages/Locations/LocationCreate"
import { LocationView } from "../../Pages/Locations/LocationView"
import { LocationEdit } from "../../Pages/Locations/LocationEdit"
import { LocationList } from "../../Pages/Locations/LocationList"
import { ActivityList } from "../../Pages/Activities/ActivityList"
import { ActivityCreate } from "../../Pages/Activities/ActivityCreate"
import { ActivityView } from "../../Pages/Activities/ActivityView"
import { ActivityEdit } from "../../Pages/Activities/ActivityEdit"
import { ActivityDelete } from "../../Pages/Activities/ActivityDelete"
import { ImageList } from "../../Pages/Images/ImageList"
import { ImageCreate } from "../../Pages/Images/ImageCreate"
import { ImageView } from "../../Pages/Images/ImageView"
import { ImageEdit } from "../../Pages/Images/ImageEdit"
import { ImageDelete } from "../../Pages/Images/ImageDelete"
import { NewsList } from "../../Pages/News/NewsList"
import { NewsCreate } from "../../Pages/News/NewsCreate"
import { NewsView } from "../../Pages/News/NewsView"
import { NewsEdit } from "../../Pages/News/NewsEdit"
import { NewsDelete } from "../../Pages/News/NewsDelete"

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<RequireAuth />}>
        <Route path="activities">
          <Route index element={<ActivityList />} />
          <Route path="create" element={<ActivityCreate />} />
          <Route path="view/:id" element={<ActivityView />} />
          <Route path="edit/:id" element={<ActivityEdit />} />
          <Route path="delete/:id" element={<ActivityDelete />} />
        </Route>
        <Route path="news">
          <Route index element={<NewsList />} />
          <Route path="create" element={<NewsCreate />} />
          <Route path="view/:id" element={<NewsView />} />
          <Route path="edit/:id" element={<NewsEdit />} />
          <Route path="delete/:id" element={<NewsDelete />} />
        </Route>
        <Route path="educations">
          <Route index element={<EducationList />} />
          <Route path="create" element={<EducationCreate />} />
          <Route path="view/:id" element={<EducationView />} />
          <Route path="edit/:id" element={<EducationEdit />} />
          <Route path="delete/:id" element={<EducationDelete />} />
        </Route>
        <Route path="locations">
          <Route index element={<LocationList />} />
          <Route path="create" element={<LocationCreate />} />
          <Route path="view/:id" element={<LocationView />} />
          <Route path="edit/:id" element={<LocationEdit />} />
          <Route path="delete/:id" element={<LocationDelete />} />
        </Route>
        <Route path="images">
          <Route index element={<ImageList />} />
          <Route path="create" element={<ImageCreate />} />
          <Route path="view/:id" element={<ImageView />} />
          <Route path="edit/:id" element={<ImageEdit />} />
          <Route path="delete/:id" element={<ImageDelete />} />
        </Route>
      </Route>
    </Routes>
  )
}
