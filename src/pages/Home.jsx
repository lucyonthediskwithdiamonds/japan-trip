export default function Home() {
  return (
    <div>
      <div className="hero">
        <div className="hero-content">
          <h1>Japan Trip 2026</h1>
          <p>🌸 Simon & Monize</p>
          <p className="dates">September 24 — October 9</p>
          <p style={{marginTop: 20, fontSize: 16}}>Tokyo • Osaka • Kyoto</p>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="section-header">
            <h2>Your Japan Adventure Awaits</h2>
            <p>Complete guide to shopping, dining, and discovering the best of Japan</p>
          </div>

          <div className="grid">
            <div className="card">
              <h3>🛍️ Shopping Guide</h3>
              <p>Curated list of knives, watches, denim, and vintage fashion picks with exact store locations and prices.</p>
              <a href="/shopping" style={{color: '#d4558f', fontWeight: 500}}>Explore →</a>
            </div>
            <div className="card">
              <h3>🍜 Food & Drinks</h3>
              <p>Best restaurants, bars, and dining experiences across Tokyo, Osaka, and Kyoto. Recommendations by neighborhood.</p>
              <a href="/food" style={{color: '#d4558f', fontWeight: 500}}>Discover →</a>
            </div>
            <div className="card">
              <h3>🏪 Best Shops</h3>
              <p>Hand-picked boutiques, markets, and specialty stores organized by city and category.</p>
              <a href="/shops" style={{color: '#d4558f', fontWeight: 500}}>Browse →</a>
            </div>
            <div className="card">
              <h3>🗺️ Interactive Map</h3>
              <p>All locations, shops, and restaurants plotted on an interactive map. Perfect for planning your route.</p>
              <a href="/map" style={{color: '#d4558f', fontWeight: 500}}>View Map →</a>
            </div>
          </div>
        </div>
      </div>

      <div className="section" style={{background: 'rgba(244, 213, 224, 0.2)'}}>
        <div className="container">
          <h2 style={{textAlign: 'center', marginBottom: 40}}>Trip Highlights</h2>
          <div className="grid">
            <div style={{textAlign: 'center'}}>
              <div style={{fontSize: 32, marginBottom: 12}}>🔪</div>
              <h3>Knife Shopping</h3>
              <p>Target: Bunka 180mm, Sujihiki 270mm, Honesuki 150mm</p>
            </div>
            <div style={{textAlign: 'center'}}>
              <div style={{fontSize: 32, marginBottom: 12}}>⌚</div>
              <h3>Watch Collecting</h3>
              <p>Seiko Presage & Orient Star pieces at premium shops</p>
            </div>
            <div style={{textAlign: 'center'}}>
              <div style={{fontSize: 32, marginBottom: 12}}>👖</div>
              <h3>Denim & Fashion</h3>
              <p>Selvedge denim, vintage, and designer pieces</p>
            </div>
            <div style={{textAlign: 'center'}}>
              <div style={{fontSize: 32, marginBottom: 12}}>🍱</div>
              <h3>Culinary Experience</h3>
              <p>From street food to Michelin-star dining</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
