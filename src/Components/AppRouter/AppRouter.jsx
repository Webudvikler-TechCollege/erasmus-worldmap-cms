import { Route, Routes } from "react-router-dom"
import { RequireAuth } from "../Auth/RequireAuth/RequireAuth"
import { SongList } from "../../Pages/Song/SongList"
import { SongCreate } from "../../Pages/Song/SongCreate"
import { SongView } from "../../Pages/Song/SongView"
import { SongEdit } from "../../Pages/Song/SongEdit"
import { SongDelete } from "../../Pages/Song/SongDelete"
import { ArtistList } from "../../Pages/Artist/ArtistList"
import { ArtistEdit } from "../../Pages/Artist/ArtistEdit"
import { ArtistView } from "../../Pages/Artist/ArtistView"
import { ArtistCreate } from "../../Pages/Artist/ArtistCreate"
import { ArtistDelete } from "../../Pages/Artist/ArtistDelete"

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<RequireAuth />}>
        <Route path="songs">
          <Route index element={<SongList />} />
          <Route path="create" element={<SongCreate />} />
          <Route path="view/:id" element={<SongView />} />
          <Route path="edit/:id" element={<SongEdit />} />
          <Route path="delete/:id" element={<SongDelete />} />
        </Route>
        <Route path="artists">
          <Route index element={<ArtistList />} />
          <Route path="create" element={<ArtistCreate />} />
          <Route path="view/:id" element={<ArtistView />} />
          <Route path="edit/:id" element={<ArtistEdit />} />
          <Route path="delete/:id" element={<ArtistDelete />} />
        </Route>
      </Route>
    </Routes>
  )
}
