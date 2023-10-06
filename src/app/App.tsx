import { Route, Routes } from 'react-router-dom';
import './styles/index.scss'

import MainPage from '../pages/MainPage/ui/MainPage'
import ProfilePage from '../pages/ProfilePage';

function App() {

  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/profile' element={<ProfilePage />} />
    </Routes>
  )
}

export default App
