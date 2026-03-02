import { useTripPlan } from '../context/TripPlanContext'
import { useTripData } from '../hooks/useTripData'

export default function Footer() {
  const { plan } = useTripPlan()
  const { TRIP_META } = useTripData()
  return (
    <footer className="footer">
      <div className="container">
        <h3>{TRIP_META.name} Trip</h3>
        {plan.travelers && <p>{plan.travelers}</p>}
      </div>
    </footer>
  )
}
