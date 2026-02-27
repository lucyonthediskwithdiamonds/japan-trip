export default function Navigation({ activeSection, setActiveSection }) {
  const sections = [
    { id: 'knives', label: '🔪 Knives' },
    { id: 'watches', label: '⌚ Watches' },
    { id: 'denim', label: '👖 Denim' },
    { id: 'clothing', label: '👕 Clothing' },
    { id: 'vintage', label: '🛍️ Vintage' },
  ]

  return (
    <nav>
      <ul>
        {sections.map(section => (
          <li key={section.id}>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault()
                setActiveSection(section.id)
              }}
              style={{
                backgroundColor: activeSection === section.id ? 'var(--sakura)' : 'transparent',
                color: activeSection === section.id ? 'var(--navy)' : 'white',
              }}
            >
              {section.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
