import { Route, Routes, Navigate } from "react-router-dom"
import HomePage from './pages/HomePage'

const AppMap = () => (
  <Routes>
    <Route path="/" element={<Navigate to="/home" />} />
    <Route path='/home' element={<HomePage />} />
  </Routes>
)

export default AppMap
