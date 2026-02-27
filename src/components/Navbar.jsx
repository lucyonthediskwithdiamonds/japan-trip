import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="nav">
      <div className="container nav-content">
        <Link to="/" className="nav-logo">🌸 Japan Trip</Link>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/shopping">Shopping</Link></li>
          <li><Link to="/food">Food & Drinks</Link></li>
          <li><Link to="/shops">Best Shops</Link></li>
          <li><Link to="/map">Map</Link></li>
        </ul>
      </div>
    </nav>
  )
}
