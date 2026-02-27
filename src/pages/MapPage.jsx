export default function MapPage() {
  return (
    <div className="section">
      <div className="container">
        <h1 style={{marginBottom: 40}}>🗺️ Interactive Map</h1>
        
        <div style={{background: 'white', padding: 32, borderRadius: 12, marginBottom: 40}}>
          <h2 style={{marginBottom: 20}}>Shops & Restaurants Map</h2>
          <p style={{color: '#4a4a4a', marginBottom: 20}}>Embed Google Maps with all locations marked below. You can import these locations into Google My Maps:</p>
          
          <div className="map-container" style={{background: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#999'}}>
            <div style={{textAlign: 'center'}}>
              <p style={{fontSize: 18, marginBottom: 12}}>🗺️ Interactive Map Coming Soon</p>
              <p style={{fontSize: 14}}>Import the locations below into Google My Maps or your preferred mapping app</p>
            </div>
          </div>
        </div>

        <div className="city-section">
          <h2 style={{color: '#d4558f', marginBottom: 24}}>📍 Tokyo Locations</h2>
          <div className="grid">
            <div className="card">
              <h3>Seisuke Knife — Kappabashi</h3>
              <p>🔪 Knives</p>
              <p style={{marginTop: 8, fontSize: 12, color: '#6b5a4a'}}>Specialty knife shop. English staff. Flagship.</p>
            </div>
            <div className="card">
              <h3>Grand Seiko Boutique Ginza</h3>
              <p>⌚ Watches</p>
              <p style={{marginTop: 8, fontSize: 12, color: '#6b5a4a'}}>Flagship. New Presage & Grand Seiko.</p>
            </div>
            <div className="card">
              <h3>Japan Blue Jeans Asakusa</h3>
              <p>👖 Denim</p>
              <p style={{marginTop: 8, fontSize: 12, color: '#6b5a4a'}}>Free hemming 1hr. Owner Takashi speaks English.</p>
            </div>
            <div className="card">
              <h3>Sukiyabashi Jiro</h3>
              <p>🍣 Michelin Sushi</p>
              <p style={{marginTop: 8, fontSize: 12, color: '#6b5a4a'}}>World-famous omakase in Ginza.</p>
            </div>
            <div className="card">
              <h3>Tsukiji Outer Market</h3>
              <p>🍜 Street Food</p>
              <p style={{marginTop: 8, fontSize: 12, color: '#6b5a4a'}}>Fresh seafood, tamagoyaki, uni.</p>
            </div>
            <div className="card">
              <h3>NUIR Vintage Harajuku</h3>
              <p>👜 Vintage Fashion</p>
              <p style={{marginTop: 8, fontSize: 12, color: '#6b5a4a'}}>Luxury vintage. Mixed selection.</p>
            </div>
          </div>
        </div>

        <div className="city-section">
          <h2 style={{color: '#d4558f', marginBottom: 24}}>📍 Osaka Locations</h2>
          <div className="grid">
            <div className="card">
              <h3>Jikko Knives — Namba</h3>
              <p>🔪 Knives</p>
              <p style={{marginTop: 8, fontSize: 12, color: '#6b5a4a'}}>5.0★ Perfect score. English-speaking.</p>
            </div>
            <div className="card">
              <h3>OKURA Shinsaibashi</h3>
              <p>⌚ Watches</p>
              <p style={{marginTop: 8, fontSize: 12, color: '#6b5a4a'}}>Pre-owned. Rolex & AP specialist.</p>
            </div>
            <div className="card">
              <h3>Samurai Jeans</h3>
              <p>👖 Denim</p>
              <p style={{marginTop: 8, fontSize: 12, color: '#6b5a4a'}}>100% Osaka-made. Same-day hemming.</p>
            </div>
            <div className="card">
              <h3>Kiji Okonomiyaki</h3>
              <p>🍘 Okonomiyaki</p>
              <p style={{marginTop: 8, fontSize: 12, color: '#6b5a4a'}}>Famous savory pancakes in Dotonbori.</p>
            </div>
            <div className="card">
              <h3>Kindal Shinsaibashi</h3>
              <p>👜 Vintage Fashion</p>
              <p style={{marginTop: 8, fontSize: 12, color: '#6b5a4a'}}>Crown jewel. Full CDG/Yohji archive floor.</p>
            </div>
            <div className="card">
              <h3>Toritama</h3>
              <p>🍗 Yakitori</p>
              <p style={{marginTop: 8, fontSize: 12, color: '#6b5a4a'}}>Grilled chicken skewers. Local favorite.</p>
            </div>
          </div>
        </div>

        <div className="city-section">
          <h2 style={{color: '#d4558f', marginBottom: 24}}>📍 Kyoto Locations</h2>
          <div className="grid">
            <div className="card">
              <h3>MUSASHI Knife Shop</h3>
              <p>🔪 Knives</p>
              <p style={{marginTop: 8, fontSize: 12, color: '#6b5a4a'}}>White steel specialist. Free laser engraving. Until 9pm.</p>
            </div>
            <div className="card">
              <h3>Big Moon Kyoto</h3>
              <p>⌚ Watches</p>
              <p style={{marginTop: 8, fontSize: 12, color: '#6b5a4a'}}>Best Grand Seiko collection. Ask for Shoji.</p>
            </div>
            <div className="card">
              <h3>Japan Blue Jeans Kyoto</h3>
              <p>👖 Denim</p>
              <p style={{marginTop: 8, fontSize: 12, color: '#6b5a4a'}}>Inside Nishiki Market. 2hr hemming. Ask for Rio.</p>
            </div>
            <div className="card">
              <h3>Nishiki Market</h3>
              <p>🍜 Street Food</p>
              <p style={{marginTop: 8, fontSize: 12, color: '#6b5a4a'}}>100+ vendors. Pickles, tea, fish, sweets.</p>
            </div>
            <div className="card">
              <h3>SALAMANCA Vintage Kyoto</h3>
              <p>👜 Vintage Fashion</p>
              <p style={{marginTop: 8, fontSize: 12, color: '#6b5a4a'}}>Cheaper than Tokyo. Rare pieces. Tax-free.</p>
            </div>
            <div className="card">
              <h3>Gion Tanto</h3>
              <p>🍱 Kaiseki</p>
              <p style={{marginTop: 8, fontSize: 12, color: '#6b5a4a'}}>Michelin-starred seasonal cuisine in Gion.</p>
            </div>
          </div>
        </div>

        <div style={{background: 'rgba(244, 213, 224, 0.2)', padding: 32, borderRadius: 12, marginTop: 40}}>
          <h3 style={{marginBottom: 16}}>💡 Tip: Create Your Own Map</h3>
          <ol style={{color: '#4a4a4a', lineHeight: 2}}>
            <li>Go to <strong>google.com/maps/d</strong></li>
            <li>Create a new map</li>
            <li>Manually add pins for each shop above</li>
            <li>Organize by category (Knives, Vintage, Restaurants)</li>
            <li>Share the link with Monize</li>
            <li>Download offline maps per city before your trip</li>
          </ol>
        </div>
      </div>
    </div>
  )
}
