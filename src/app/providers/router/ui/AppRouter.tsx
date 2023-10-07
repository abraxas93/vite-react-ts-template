import { Routes, Route } from "react-router-dom"
import { MainPage } from "../../../../pages/MainPage"
import ProfilePage from "../../../../pages/ProfilePage"
import { Suspense, memo } from "react"



export const AppRouter = memo(() => {
  return (
    <Suspense fallback={<div>Loading....</div>}>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/profile' element={<ProfilePage />} />
      </Routes>
    </Suspense>
  )
})

