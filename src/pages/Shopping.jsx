export default function Shopping() {
  const knives = [
    { name: 'K-tip Bunka 180mm', steel: 'SG2 Powder Stainless', budget: '€180–260', priority: 'HIGHEST', notes: 'Daily driver. Tsuchime finish. Octagonal wa-handle.' },
    { name: 'Sujihiki 270mm', steel: 'Shirogami (Carbon)', budget: '€220–280', priority: 'HIGH', notes: 'Meat slicing. Kurouchi finish. Dark wood handle.' },
    { name: 'Honesuki 150mm', steel: 'VG10 Stainless', budget: '€80–120', priority: 'HIGH', notes: 'Poultry deboning. Ebony handle preferred.' }
  ]

  const watches = [
    { name: 'Seiko Presage Moonphase', budget: '€500–650', notes: 'Warm champagne dial. Dress watch.' },
    { name: 'Seiko Presage Chronograph', budget: '€600–800', notes: 'Elegant chronograph. Santos-adjacent.' },
    { name: 'Orient Star Skeleton', budget: '€350–450', notes: 'Gold/rose gold tone. Open movement.' }
  ]

  const denim = [
    { brand: 'Japan Blue', note: 'Asakusa Tokyo. Free chain-stitch hemming in 1hr.' },
    { brand: 'Samurai Jeans', note: 'Osaka. 100% Osaka-made. Same-day hemming.' },
    { brand: 'Kapital', note: 'Patchwork aesthetic. Available in all cities.' }
  ]

  return (
    <div>
      <div className="section">
        <div className="container">
          <h1 style={{marginBottom: 40}}>🛍️ Shopping Guide</h1>

          <div className="city-section">
            <h2 style={{color: '#d4558f', marginBottom: 32}}>🔪 Knives</h2>
            <p style={{marginBottom: 24, fontSize: 16}}>Target: €600 total across 3 knives. Always carry passport for tax exemption (~10%).</p>
            
            <div className="grid">
              {knives.map((k, i) => (
                <div key={i} className="card">
                  <h3>{k.name}</h3>
                  <p><strong>Steel:</strong> {k.steel}</p>
                  <p><strong>Budget:</strong> {k.budget}</p>
                  <p><strong>Priority:</strong> {k.priority}</p>
                  <p style={{marginTop: 12, fontSize: 14, color: '#6b5a4a'}}>{k.notes}</p>
                </div>
              ))}
            </div>

            <h3 style={{marginTop: 40, marginBottom: 20}}>Best Knife Shops</h3>
            <div className="grid">
              <div className="card">
                <h4>Tokyo: Seisuke Knife — Kappabashi</h4>
                <p className="rating">⭐ 4.9★ (2,356)</p>
                <p>English staff. Flagship location. Knife Gallery also available.</p>
                <a href="https://maps.google.com/?q=Seisuke+Knife+Kappabashi+Tokyo" target="_blank" rel="noopener noreferrer" style={{color: '#d4558f', fontWeight: 500, fontSize: 14}}>📍 View on Maps</a>
              </div>
              <div className="card">
                <h4>Osaka: Jikko Knives — Namba</h4>
                <p className="rating">⭐ 5.0★ (314)</p>
                <p>Perfect score. English-speaking. Free name engraving.</p>
              </div>
              <div className="card">
                <h4>Kyoto: Seisuke Knife — Kyoto</h4>
                <p className="rating">⭐ 4.9★ (1,477)</p>
                <p>Ask for Ash. Custom engraving available.</p>
              </div>
              <div className="card">
                <h4>Kyoto: MUSASHI Knife Shop</h4>
                <p className="rating">⭐ 4.9★ (494)</p>
                <p>Free laser engraving. Open until 9pm. White steel specialist.</p>
              </div>
            </div>
          </div>

          <div className="city-section" style={{marginTop: 40}}>
            <h2 style={{color: '#d4558f', marginBottom: 32}}>⌚ Watches</h2>
            <p style={{marginBottom: 24, fontSize: 16}}>Target warm gold tones. No sports watches. Looking for dress pieces and complications.</p>
            
            <div className="grid">
              {watches.map((w, i) => (
                <div key={i} className="card">
                  <h3>{w.name}</h3>
                  <p><strong>Budget:</strong> {w.budget}</p>
                  <p>{w.notes}</p>
                </div>
              ))}
            </div>

            <h3 style={{marginTop: 40, marginBottom: 20}}>Best Watch Shops</h3>
            <div className="grid">
              <div className="card">
                <h4>Tokyo: Grand Seiko Boutique Ginza</h4>
                <p className="rating">⭐ 4.6★ (104)</p>
                <p>Flagship. New Presage/Grand Seiko. ~10% tax-free.</p>
              </div>
              <div className="card">
                <h4>Osaka: OKURA Shinsaibashi</h4>
                <p className="rating">⭐ 5.0★ (346)</p>
                <p>Pre-owned. Rolex & AP specialist.</p>
              </div>
              <div className="card">
                <h4>Kyoto: Big Moon Kyoto</h4>
                <p className="rating">⭐ 5.0★ (326)</p>
                <p>Best Grand Seiko collection. Ask for Shoji. Closed Thursdays.</p>
              </div>
            </div>
          </div>

          <div className="city-section" style={{marginTop: 40}}>
            <h2 style={{color: '#d4558f', marginBottom: 32}}>👖 Denim</h2>
            <p style={{marginBottom: 24, fontSize: 16}}>Selvedge denim only — Japanese made. Free chain-stitch hemming available (same-day at most shops).</p>
            
            <div className="grid">
              {denim.map((d, i) => (
                <div key={i} className="card">
                  <h3>{d.brand}</h3>
                  <p>{d.note}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
