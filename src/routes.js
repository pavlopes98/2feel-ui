import { Route, Routes, Navigate } from "react-router-dom"
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'

const AppMap = () => (
  <Routes>
    <Route path="/" element={<Navigate to="/home" />} />
    <Route path='/home' element={<HomePage />} />
    <Route path='/login' element={<LoginPage />} />
  </Routes>
)

export default AppMap
