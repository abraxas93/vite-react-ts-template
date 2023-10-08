import { Routes, Route } from "react-router-dom"
import { MainPage } from "../../../../pages/MainPage"
import ProfilePage from "../../../../pages/ProfilePage"
import { Suspense, memo } from "react"
import { Loader } from "../../../../shared/ui/Loader"



export const AppRouter = memo(() => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/profile' element={<ProfilePage />} />
      </Routes>
    </Suspense>
  )
})

