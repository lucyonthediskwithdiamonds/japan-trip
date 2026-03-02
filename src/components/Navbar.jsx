import { Link, useLocation } from 'react-router-dom'

const LINKS = [
  { to: '/guide',    label: 'Home',     icon: '🏠' },
  { to: '/cities',   label: 'Cities',   icon: '🏙️' },
  { to: '/food',     label: 'Food',     icon: '🍜' },
  { to: '/shopping', label: 'Shopping', icon: '🛍️' },
  { to: '/phrases',  label: 'Phrases',  icon: '💬' },
]

export default function Navbar() {
  const { pathname } = useLocation()

  return (
    <nav className="nav">
      {LINKS.map(link => {
        const active = pathname === link.to
        return (
          <Link key={link.to} to={link.to} className={`nav-tab${active ? ' active' : ''}`}>
            <span className="nav-tab-icon">{link.icon}</span>
            <span className="nav-tab-label">{link.label}</span>
          </Link>
        )
      })}
    </nav>
  )
}
