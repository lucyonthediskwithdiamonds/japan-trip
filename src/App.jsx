import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Shopping from './pages/Shopping'
import Food from './pages/Food'
import Shops from './pages/Shops'
import MapPage from './pages/MapPage'

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shopping" element={<Shopping />} />
        <Route path="/food" element={<Food />} />
        <Route path="/shops" element={<Shops />} />
        <Route path="/map" element={<MapPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
