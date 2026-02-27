export default function Food() {
  const tokyo = [
    { name: 'Sukiyabashi Jiro', type: 'Sushi', rating: '⭐⭐⭐ Michelin', neighborhood: 'Ginza', notes: 'World-famous omakase. Reservation essential.' },
    { name: 'Nabezo', type: 'Hot Pot', rating: '⭐⭐⭐⭐⭐', neighborhood: 'Shibuya', notes: 'Premium wagyu shabu-shabu. Modern setting.' },
    { name: 'Ichiran', type: 'Ramen', rating: '⭐⭐⭐⭐', neighborhood: 'Harajuku', notes: 'Tonkotsu ramen. Individual booths.' },
    { name: 'Tsukiji Outer Market', type: 'Street Food', rating: 'Must Visit', neighborhood: 'Tsukiji', notes: 'Fresh seafood, tamagoyaki, uni. Casual & affordable.' },
    { name: 'Gonpachi', type: 'Izakaya', rating: '⭐⭐⭐⭐', neighborhood: 'Nishi-Azabu', notes: 'Modern izakaya. Great sake selection. Lively atmosphere.' }
  ]

  const osaka = [
    { name: 'Kiji Okonomiyaki', type: 'Okonomiyaki', rating: '⭐⭐⭐⭐⭐', neighborhood: 'Dotonbori', notes: 'Famous savory pancakes. Watch chefs cook at counter.' },
    { name: 'Takoyaki Museum', type: 'Takoyaki', rating: '⭐⭐⭐⭐', neighborhood: 'Shinchi', notes: 'Multiple takoyaki stalls under one roof.' },
    { name: 'Kushikatsu Daruma', type: 'Fried Skewers', rating: '⭐⭐⭐⭐', neighborhood: 'Dotonbori', notes: 'Crispy fried skewers. Double-dip sauce rule.' },
    { name: 'Harukoma Sushi', type: 'Conveyor Belt Sushi', rating: '⭐⭐⭐⭐', neighborhood: 'Shinchi', notes: 'Fresh, affordable, quick. Perfect lunch.' },
    { name: 'Toritama', type: 'Yakitori', rating: '⭐⭐⭐⭐⭐', neighborhood: 'Shinchi', notes: 'Grilled chicken skewers. Local favorite. Arrive early.' }
  ]

  const kyoto = [
    { name: 'Gion Tanto', type: 'Kaiseki', rating: '⭐⭐⭐ Michelin', neighborhood: 'Gion', notes: 'Seasonal multi-course. Traditional setting.' },
    { name: 'Yudofu Sagano', type: 'Tofu Hot Pot', rating: '⭐⭐⭐⭐', neighborhood: 'Sagano', notes: 'Silken tofu hot pot in historic house. Serene garden.' },
    { name: 'Nishiki Market', type: 'Street Food & Shops', rating: 'Must Visit', neighborhood: 'Nishiki', notes: '100+ vendors. Pickles, tea, fish, sweets. Browse & graze.' },
    { name: 'Hyotei', type: 'Kaiseki', rating: '⭐⭐ Michelin', neighborhood: 'Nanzenji', notes: 'Elegant seasonal cuisine. Historic setting.' },
    { name: 'Yudofu Okutan', type: 'Tofu Cuisine', rating: '⭐⭐⭐⭐', neighborhood: 'Kurama', notes: 'Buddhist temple vegetarian tofu. Mountain setting.' }
  ]

  const drinks = [
    { name: 'Sake Tasting Tours', type: 'Sake', locations: 'Tokyo, Kyoto', notes: 'Visit sake breweries. Learn fermentation process.' },
    { name: 'Whisky Bars', type: 'Whisky', locations: 'Tokyo (Shibuya, Shinjuku)', notes: 'Japanese whisky (Yamazaki, Hakushu). World-class bartenders.' },
    { name: 'Matcha Cafes', type: 'Traditional Tea', locations: 'All Cities', notes: 'Ceremonial matcha. Kyoto especially. Peaceful setting.' },
    { name: 'Craft Beer Bars', type: 'Beer', locations: 'Tokyo, Osaka', notes: 'Rising craft beer scene. Local microbreweries.' }
  ]

  return (
    <div>
      <div className="section">
        <div className="container">
          <h1 style={{marginBottom: 40}}>🍜 Food & Drinks</h1>

          <div className="city-section">
            <h2 className="city-title">🗼 Tokyo</h2>
            <p style={{marginBottom: 24, fontSize: 16, color: '#4a4a4a'}}>From Michelin-star omakase to street food. Tokyo has everything.</p>
            <div className="grid">
              {tokyo.map((r, i) => (
                <div key={i} className="card">
                  <h3>{r.name}</h3>
                  <p className="rating">{r.rating}</p>
                  <p><strong>{r.type}</strong> • {r.neighborhood}</p>
                  <p style={{marginTop: 12, fontSize: 14, color: '#6b5a4a'}}>{r.notes}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="city-section">
            <h2 className="city-title">🏯 Osaka</h2>
            <p style={{marginBottom: 24, fontSize: 16, color: '#4a4a4a'}}>Street food capital. Bold, casual, delicious. Dotonbori is the epicenter.</p>
            <div className="grid">
              {osaka.map((r, i) => (
                <div key={i} className="card">
                  <h3>{r.name}</h3>
                  <p className="rating">{r.rating}</p>
                  <p><strong>{r.type}</strong> • {r.neighborhood}</p>
                  <p style={{marginTop: 12, fontSize: 14, color: '#6b5a4a'}}>{r.notes}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="city-section">
            <h2 className="city-title">🌸 Kyoto</h2>
            <p style={{marginBottom: 24, fontSize: 16, color: '#4a4a4a'}}>Traditional kaiseki, tofu cuisine, and historic market dining.</p>
            <div className="grid">
              {kyoto.map((r, i) => (
                <div key={i} className="card">
                  <h3>{r.name}</h3>
                  <p className="rating">{r.rating}</p>
                  <p><strong>{r.type}</strong> • {r.neighborhood}</p>
                  <p style={{marginTop: 12, fontSize: 14, color: '#6b5a4a'}}>{r.notes}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="city-section">
            <h2 className="city-title">🍶 Drinks & Beverages</h2>
            <p style={{marginBottom: 24, fontSize: 16, color: '#4a4a4a'}}>Sake, whisky, tea, and craft beer — Japan's drinks scene is world-class.</p>
            <div className="grid">
              {drinks.map((d, i) => (
                <div key={i} className="card">
                  <h3>{d.name}</h3>
                  <p><strong>{d.type}</strong> • {d.locations}</p>
                  <p style={{marginTop: 12, fontSize: 14, color: '#6b5a4a'}}>{d.notes}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
