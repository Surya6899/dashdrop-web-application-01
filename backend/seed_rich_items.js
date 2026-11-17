const { db } = require('./database.js');

const itemsToSeed = [
  {
    name: 'Calculus: Early Transcendentals',
    category: 'books',
    price: 20,
    rental_price: 5,
    rental_period: 'month',
    item_type: 'sell',
    condition: 'good',
    description: 'James Stewart 8th Edition. Perfect for Math-I and Math-II semesters. Clean pages with minimal pencil highlights.',
    contact: 'Block A Hostel, Room 104',
    icon: '📖',
    file_url: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=500&q=80',
    hostel_block: 'Block A',
    rating: 4.8,
    review_count: 14
  },
  {
    name: 'Study lamp',
    category: 'electronics',
    price: 25,
    rental_price: 3,
    rental_period: 'month',
    item_type: 'rent',
    condition: 'like-new',
    description: 'Touch control desk lamp with 3 color modes and stepless dimming. USB powered, ideal for late night study sessions.',
    contact: 'Block B Hostel, Room 215',
    icon: '💡',
    file_url: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500&q=80',
    hostel_block: 'Block B',
    rating: 4.5,
    review_count: 9
  },
  {
    name: 'Mini-fridge',
    category: 'furniture',
    price: 120,
    rental_price: 15,
    rental_period: 'month',
    item_type: 'rent',
    condition: 'good',
    description: 'Low-noise 45L compact refrigerator. Kept in clean condition, keeps drinks and snacks cold.',
    contact: 'Block A Hostel, Ground Floor',
    icon: '🧊',
    file_url: 'https://images.unsplash.com/photo-1584992236310-6edddc08acff?w=500&q=80',
    hostel_block: 'Block A',
    rating: 4.7,
    review_count: 18
  },
  {
    name: 'Headphones',
    category: 'electronics',
    price: 45,
    rental_price: 8,
    rental_period: 'month',
    item_type: 'sell',
    condition: 'like-new',
    description: 'Active noise cancelling Bluetooth over-ear headphones with 25hr battery and deep bass.',
    contact: 'Academic / Library Desk',
    icon: '🎧',
    file_url: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80',
    hostel_block: 'Academic / Library',
    rating: 4.9,
    review_count: 22
  },
  {
    name: 'Office chair',
    category: 'furniture',
    price: 35,
    rental_price: 6,
    rental_period: 'month',
    item_type: 'sell',
    condition: 'good',
    description: 'Breathable mesh back with adjustable lumbar support, hydraulic lift and smooth rolling casters.',
    contact: 'Block B Hostel, Room 302',
    icon: '🪑',
    file_url: 'https://images.unsplash.com/photo-1580481077195-c3a821a5060f?w=500&q=80',
    hostel_block: 'Block B',
    rating: 4.6,
    review_count: 11
  },
  {
    name: 'Introduction to Algorithms...',
    category: 'books',
    price: 25,
    rental_price: 4,
    rental_period: 'month',
    item_type: 'sell',
    condition: 'like-new',
    description: 'Third Edition, Thomas H. Cormen. Standard textbook for CSE algorithms and competitive programming.',
    contact: 'Block A Hostel, Room 209',
    icon: '📚',
    file_url: 'https://images.unsplash.com/photo-1532012164546-f432f2e3777f?w=500&q=80',
    hostel_block: 'Block A',
    rating: 5.0,
    review_count: 31
  },
  {
    name: 'electric kettle',
    category: 'electronics',
    price: 10,
    rental_price: 2,
    rental_period: 'month',
    item_type: 'sell',
    condition: 'good',
    description: 'Fast boiling 1500W electric kettle with auto-shutoff and boil-dry protection. Great for noodles and coffee.',
    contact: 'Block B Hostel, Room 107',
    icon: '🫖',
    file_url: 'https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?w=500&q=80',
    hostel_block: 'Block B',
    rating: 4.4,
    review_count: 8
  },
  {
    name: 'Backpack',
    category: 'clothes',
    price: 18,
    rental_price: 3,
    rental_period: 'month',
    item_type: 'sell',
    condition: 'good',
    description: 'Multi-compartment backpack with dedicated 15.6 inch padded laptop sleeve, USB charging port and bottle holder.',
    contact: 'Academic / Library Lobby',
    icon: '🎒',
    file_url: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=80',
    hostel_block: 'Academic / Library',
    rating: 4.7,
    review_count: 15
  },
  {
    name: 'Fujifilm Instax Mini Camera',
    category: 'electronics',
    price: 3200,
    rental_price: 50,
    rental_period: 'day',
    item_type: 'rent',
    condition: 'like-new',
    description: 'Perfect for capturing campus memories. Includes 10 shots of film. Available for quick pickup!',
    contact: 'Block B Hostel, Room 408',
    icon: '📷',
    file_url: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&q=80',
    hostel_block: 'Block B',
    rating: 4.8,
    review_count: 12
  }
];

const insertStmt = db.prepare(`
  INSERT INTO items (owner_id, name, category, price, condition, description, contact, icon, file_url, hostel_block, item_type, rental_period, rental_price, rating, review_count)
  VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
`);

for (const it of itemsToSeed) {
  const existing = db.prepare('SELECT id FROM items WHERE name = ?').get(it.name);
  if (!existing) {
    insertStmt.run(
      2,
      it.name,
      it.category,
      it.price,
      it.condition,
      it.description,
      it.contact,
      it.icon,
      it.file_url,
      it.hostel_block,
      it.item_type,
      it.rental_period,
      it.rental_price,
      it.rating,
      it.review_count
    );
  } else {
    db.prepare(`
      UPDATE items SET file_url = ?, item_type = ?, rental_price = ?, rental_period = ?, rating = ?, review_count = ?, hostel_block = ?
      WHERE id = ?
    `).run(it.file_url, it.item_type, it.rental_price, it.rental_period, it.rating, it.review_count, it.hostel_block, existing.id);
  }
}

console.log('Seeded items count:', db.prepare('SELECT COUNT(*) as count FROM items').get().count);
