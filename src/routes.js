import { Route, Routes, Navigate } from "react-router-dom"
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import ProfilePage from "./pages/ProfilePage"

const AppMap = () => (
  <Routes>
    <Route path="/" element={<Navigate to="/home" />} />
    <Route path='/home' element={<HomePage />} />
    <Route path='/login' element={<LoginPage />} />
    <Route path='/profile' element={<ProfilePage />} />
  </Routes>
)

export default AppMap
