import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { TripPlanProvider, useTripPlan } from './context/TripPlanContext'
import { useTripData } from './hooks/useTripData'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CherryBlossoms from './components/CherryBlossoms'
import Home from './pages/Home'
import CitySelect from './pages/CitySelect'
import CityDetail from './pages/CityDetail'
import Food from './pages/Food'
import MapPage from './pages/MapPage'
import Shopping from './pages/Shopping'
import TripBuilder from './pages/TripBuilder'
import Phrases from './pages/Phrases'

function PlanBuilderGuard({ children }) {
  const { plan } = useTripPlan()
  if (plan.built) return <Navigate to="/cities" replace />
  return children
}

function RequiresPlan({ children }) {
  const { plan } = useTripPlan()
  if (!plan.built) return <Navigate to="/" replace />
  return children
}

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function AppShell() {
  const { TRIP_META } = useTripData()
  return (
    <>
      <ScrollToTop />
      {TRIP_META.cherryBlossoms && <CherryBlossoms count={20} />}
      <Navbar />
      <Routes>
        <Route path="/" element={<PlanBuilderGuard><TripBuilder /></PlanBuilderGuard>} />
        <Route path="/plan" element={<PlanBuilderGuard><TripBuilder /></PlanBuilderGuard>} />
        <Route path="/guide" element={<RequiresPlan><Home /></RequiresPlan>} />
        <Route path="/cities" element={<RequiresPlan><CitySelect /></RequiresPlan>} />
        <Route path="/cities/:city" element={<RequiresPlan><CityDetail /></RequiresPlan>} />
        <Route path="/food" element={<RequiresPlan><Food /></RequiresPlan>} />
        <Route path="/shopping" element={<RequiresPlan><Shopping /></RequiresPlan>} />
        <Route path="/phrases" element={<RequiresPlan><Phrases /></RequiresPlan>} />
        <Route path="/map" element={<RequiresPlan><MapPage /></RequiresPlan>} />
      </Routes>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <TripPlanProvider>
      <BrowserRouter>
        <AppShell />
      </BrowserRouter>
    </TripPlanProvider>
  )
}
