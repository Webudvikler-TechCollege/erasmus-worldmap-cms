import { Routes, Route } from "react-router-dom"
import { HomePage } from "../../Pages/HomePage/HomePage"
import { ActivityListPage } from "../../Pages/ActivityPages/ActivityListPage"

export const AppRouter = () => {

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/activities">
        <Route index element={<ActivityListPage />} />
      </Route>
      <Route path="/educations">
        <Route index element={<ActivityListPage />} />
      </Route>

    </Routes>
  )
}
