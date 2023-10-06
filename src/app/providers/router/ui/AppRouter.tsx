import { Routes, Route } from "react-router-dom"
import MainPage from "../../../../pages/MainPage/ui/MainPage"
import ProfilePage from "../../../../pages/ProfilePage"
import { memo } from "react"



export const AppRouter = memo(() => {
  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/profile' element={<ProfilePage />} />
    </Routes>
  )
})

