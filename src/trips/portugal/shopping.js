const MARKET_SHOPS = [
  { name: 'LX Factory Sunday Market', city: 'Lisbon', area: 'Alcântara', rating: '4.7', type: 'Artisan Market', notes: 'Best Sunday market in Lisbon. Vintage, ceramics, local designers, street food. Sundays only 10am–6pm.' },
  { name: 'Feira da Ladra', city: 'Lisbon', area: 'Alfama', rating: '4.4', type: 'Flea Market', notes: 'Lisbon\'s outdoor flea market since the 13th century. Vintage azulejo tiles, old books, coins. Tue & Sat.' },
  { name: 'Bolhão Market', city: 'Porto', area: 'Bolhão', rating: '4.6', type: 'Covered Food Market', notes: 'Porto\'s beautifully restored 19th-century iron market. Flowers, cheese, charcuterie, fresh fish.' },
  { name: 'Mercado dos Lavradores', city: 'Madeira', area: 'Funchal', rating: '4.5', type: 'Covered Market', notes: 'Extraordinary tropical fruit, dried flowers, espada fish. Ground floor for fresh produce; upper floor for souvenirs.' },
  { name: 'Mercado Municipal de Loulé', city: 'Algarve', area: 'Loulé', rating: '4.5', type: 'Moorish Market', notes: 'Remarkable Moorish-influenced market building. Saturday morning is spectacular. Algarvian cataplana pots sold here.' },
]

const FASHION_SHOPS = [
  { name: 'A Vida Portuguesa', city: 'Lisbon', area: 'Chiado / Intendente', rating: '4.8', type: 'Portuguese Design', notes: 'The definitive Portuguese design shop. Ach Brito soaps, Bordallo Pinheiro ceramics, Viarco pencils. Three locations.' },
  { name: 'Vista Alegre', city: 'Lisbon', area: 'Chiado', rating: '4.6', type: 'Portuguese Porcelain', notes: 'Royal porcelain manufacturer since 1824. Azulejo-patterned tableware, elegant gifts, blue and white sets.' },
  { name: 'Claus Porto', city: 'Lisbon', area: 'Chiado', rating: '4.7', type: 'Heritage Soaps & Perfume', notes: 'Portuguese perfumery since 1887. Art Nouveau-packaged soaps, colognes, and gift sets. Iconic gift from Lisbon.' },
  { name: 'Manuel Tavares', city: 'Lisbon', area: 'Baixa', rating: '4.5', type: 'Gourmet / Deli', notes: 'Since 1860. Port wine, Madeira wine, tinned fish (conservas), charcuterie. Superb gift shopping.' },
  { name: 'Livraria Lello', city: 'Porto', area: 'Centre', rating: '4.6', type: 'Iconic Bookshop', notes: 'One of the world\'s most beautiful bookshops. €5 entry (redeemable against purchase). Portuguese literature.' },
]

const LOCAL_SHOPS = [
  { name: 'Conservas (tinned fish shops)', city: 'Lisbon', area: 'Various', rating: '4.7', type: 'Portuguese Conservas', notes: 'Conserveira de Lisboa (Alfama) and Sol e Pesca are the icons. Beautifully packaged sardines, tuna, mackerel.' },
  { name: 'Garrafeira Nacional', city: 'Lisbon', area: 'Baixa', rating: '4.7', type: 'Wine Shop', notes: 'Best wine shop in Portugal. Massive Port, Madeira, and Douro selection. Expert advice, worldwide shipping.' },
  { name: 'Cork & Company', city: 'Lisbon', area: 'Baixa', rating: '4.4', type: 'Cork Products', notes: 'Portugal produces 50% of the world\'s cork. Wallets, bags, hats, placemats — surprisingly elegant and useful.' },
  { name: 'Bordallo Pinheiro Factory Shop', city: 'Lisbon', area: 'Campo Grande', rating: '4.6', type: 'Portuguese Ceramics', notes: 'The factory outlet for Portugal\'s most beloved ceramic brand. Cabbage-leaf tableware, animal figurines at discount.' },
  { name: 'Blandy\'s Wine Lodge Shop', city: 'Madeira', area: 'Funchal', rating: '4.7', type: 'Madeira Wine', notes: 'Best selection of aged Madeira wines. Sercial, Verdelho, Bual, Malmsey — 10, 20, and 30-year reserves.' },
]

export const CITY_STYLE = {
  Lisbon:        { bg: '#f0f7ff', color: '#2874a6', border: '#a9cce3' },
  Porto:         { bg: '#fdf5ff', color: '#8e44ad', border: '#c39bd3' },
  Algarve:       { bg: '#fff8f0', color: '#e07b39', border: '#f0b27a' },
  Sintra:        { bg: '#fffbf0', color: '#d4a017', border: '#f7dc6f' },
  'Douro Valley': { bg: '#fff8f0', color: '#6e2c00', border: '#e59866' },
  Madeira:       { bg: '#f0fff4', color: '#2d6a4f', border: '#82e0aa' },
  Multiple:      { bg: '#f0f0f0', color: '#555', border: '#ddd' },
}

const CLOTHING_SHOPS_PT = MARKET_SHOPS.filter(s => ['LX Factory Sunday Market', 'Feira da Ladra'].includes(s.name))
const ACCESSORIES_SHOPS_PT = FASHION_SHOPS.filter(s => ['Claus Porto', 'A Vida Portuguesa'].includes(s.name))
const HOUSEHOLD_SHOPS_PT = [
  ...MARKET_SHOPS.filter(s => !['LX Factory Sunday Market', 'Feira da Ladra'].includes(s.name)),
  ...FASHION_SHOPS.filter(s => ['Vista Alegre', 'Manuel Tavares'].includes(s.name)),
  ...LOCAL_SHOPS,
]

export const SHOPPING_TABS = [
  {
    id: 'clothing', icon: '👗', label: 'Clothing',
    sections: [
      { type: 'shop-grid', emoji: '🛍️', title: 'Vintage & Markets', sub: 'LX Factory and Feira da Ladra — vintage clothing, local designers and flea market finds', shops: CLOTHING_SHOPS_PT },
    ],
  },
  {
    id: 'accessories', icon: '👜', label: 'Accessories',
    sections: [
      { type: 'shop-grid', emoji: '🧴', title: 'Soaps, Perfume & Design', sub: 'Claus Porto perfumery since 1887 and A Vida Portuguesa — Portugal\'s finest personal accessories and gifts', shops: ACCESSORIES_SHOPS_PT },
    ],
  },
  {
    id: 'household', icon: '🏠', label: 'Household',
    sections: [
      { type: 'shop-grid', emoji: '🏺', title: 'Markets & Food Halls', sub: 'From Porto\'s beautiful iron Bolhão to Madeira\'s tropical market — Portuguese markets full of character', shops: MARKET_SHOPS.filter(s => !['LX Factory Sunday Market', 'Feira da Ladra'].includes(s.name)) },
      { type: 'shop-grid', emoji: '🫙', title: 'Ceramics & Homeware', sub: 'Vista Alegre royal porcelain, Bordallo Pinheiro ceramics — Portugal\'s extraordinary craft heritage', shops: FASHION_SHOPS.filter(s => s.name === 'Vista Alegre') },
      { type: 'shop-grid', emoji: '🐟', title: 'Food & Wine', sub: 'Conservas, Port wine, cork products and Madeira wine — the edible and artisan treasures of Portugal', shops: [...FASHION_SHOPS.filter(s => s.name === 'Manuel Tavares'), ...LOCAL_SHOPS] },
    ],
  },
]

export const PRIORITY_COLOR = { HIGHEST: 'var(--color-primary)', HIGH: '#e07b39', MEDIUM: '#4a90d9' }
