const sampleListings = [
  {
    title: "Alpine Chalet with Mountain Views",
    description: "Experience authentic alpine living in this cozy chalet featuring panoramic mountain views and a traditional wood-burning fireplace.",
    image: {
      filename: "stayimage",
      url: "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YWxwaW5lJTIwY2hhbGV0fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
    },
    price: 2200,
    location: "Zermatt",
    country: "Switzerland",
  },
  {
    title: "Urban Jungle Loft",
    description: "Industrial-chic loft in the arts district featuring vertical gardens, floor-to-ceiling windows, and designer furnishings.",
    image: {
      filename: "stayimage",
      url: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXJiYW4lMjBsb2Z0fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
    },
    price: 1750,
    location: "Berlin",
    country: "Germany",
  },
  {
    title: "Desert Adobe Retreat",
    description: "Authentic adobe house nestled in the red rock landscape featuring a private cactus garden and stargazing deck.",
    image: {
      filename: "stayimage",
      url: "https://images.unsplash.com/photo-1501183638710-841dd1904471?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVzZXJ0JTIwaG9tZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
    },
    price: 950,
    location: "Sedona",
    country: "United States",
  },
  {
    title: "Floating Lake House",
    description: "Unique overwater cabin with direct lake access, featuring a wraparound deck and fishing platform.",
    image: {
      filename: "stayimage",
      url: "https://images.unsplash.com/photo-1561501900-3701fa6a0864?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bGFrZSUyMGhvdXNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
    },
    price: 1300,
    location: "Lake Powell",
    country: "United States",
  },
  {
    title: "Minimalist Kyoto Machiya",
    description: "Traditional Japanese townhouse renovated with minimalist design, featuring a zen garden and tatami meditation room.",
    image: {
      filename: "stayimage",
      url: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a3lvdG8lMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
    },
    price: 1850,
    location: "Kyoto",
    country: "Japan",
  },
  {
    title: "Clifftop Mediterranean Villa",
    description: "Luxurious villa perched on seaside cliffs featuring infinity pools, olive groves, and panoramic sea views.",
    image: {
      filename: "stayimage",
      url: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2xpZmZ0b3AlMjB2aWxsYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
    },
    price: 4200,
    location: "Santorini",
    country: "Greece",
  },
  {
  title: "Historic Parisian Atelier",
  description: "Sunlit artist's studio in Montmartre with original easel, vintage furnishings, and balcony overlooking Parisian rooftops.",
  image: {
    filename: "stayimage",
    url: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFyaXMlMjBhcGFydG1lbnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
  },
  price: 1900,
  location: "Paris",
  country: "France"
},
{
  title: "Rainforest Eco Lodge",
  description: "Sustainable treehouse complex deep in the rainforest, featuring canopy walkways and natural swimming ponds.",
  image: {
    filename: "stayimage",
    url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmFpbmZvcmVzdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
  },
  price: 1150,
  location: "Monteverde",
  country: "Costa Rica"
},
{
  title: "Converted Windmill Cottage",
  description: "Charming 18th-century windmill transformed into unique accommodation with circular rooms and countryside views.",
  image: {
    filename: "stayimage",
    url: "https://images.unsplash.com/photo-1593696140826-c58b021acf8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2luZG1pbGx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
  },
  price: 1350,
  location: "Cotswolds",
  country: "United Kingdom"
},
{
  title: "Mid-Century Desert Retreat",
  description: "Iconic Palm Springs architecture featuring glass walls, rock gardens, and vintage designer furniture.",
  image: {
    filename: "stayimage",
    url: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGFsbSUyMHNwcmluZ3MlMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
  },
  price: 2400,
  location: "Palm Springs",
  country: "United States"
},
{
  title: "Floating Venice Apartment",
  description: "Historic canal-side home with water entrance, featuring Murano glass chandeliers and gondola views.",
  image: {
    filename: "stayimage",
    url: "https://images.unsplash.com/photo-1533779283484-8ad4940aa3a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmVuaWNlJTIwYXBhcnRtZW50fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
  },
  price: 2750,
  location: "Venice",
  country: "Italy"
},
{
  title: "Arctic Glass Igloo",
  description: "See the Northern Lights from your heated glass igloo, complete with reindeer hides and sauna.",
  image: {
    filename: "stayimage",
    url: "https://images.unsplash.com/photo-1518183214770-9cffbec72538?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aWdvb298ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
  },
  price: 3200,
  location: "Lapland",
  country: "Finland"
},
{
  title: "Hawaiian Oceanfront Ohana",
  description: "Traditional Hawaiian cottage steps from volcanic sand beaches, featuring outdoor lava rock shower and tiki torches.",
  image: {
    filename: "stayimage",
    url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aGF3YWlpJTIwYmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
  },
  price: 2100,
  location: "Big Island",
  country: "United States"
},
{
  title: "Lavender Farm Cottage",
  description: "Romantic Provençal cottage surrounded by blooming lavender fields, featuring antique furnishings and stone terrace.",
  image: {
    filename: "stayimage",
    url: "https://images.unsplash.com/photo-1508873696983-2dfd5898f08b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGF2ZW5kZXIlMjBmYXJtfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
  },
  price: 1650,
  location: "Provence",
  country: "France"
},
{
  title: "Designer Warehouse Conversion",
  description: "Sleek industrial space with 20ft ceilings, exposed brick, and curated contemporary art collection.",
  image: {
    filename: "stayimage",
    url: "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2FyZWhvdXNlJTIwY29udmVyc2lvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
  },
  price: 2300,
  location: "Melbourne",
  country: "Australia"
},
{
  title: "Fjordside A-Frame Cabin",
  description: "Dramatic Norwegian fjord views from this minimalist A-frame cabin with floating staircase and sauna.",
  image: {
    filename: "stayimage",
    url: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YWZyYW1lJTIwY2FiaW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
  },
  price: 1950,
  location: "Fjord Norway",
  country: "Norway"
},
{
  title: "Boutique Marrakech Riad",
  description: "Traditional Moroccan courtyard house with mosaic tiles, rooftop terrace, and plunge pool.",
  image: {
    filename: "stayimage",
    url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
  },
  price: 1250,
  location: "Marrakech",
  country: "Morocco"
},
{
  title: "Vineyard Guest House",
  description: "Stay amid working vineyards with wine tastings included, featuring sunset views over the vines.",
  image: {
    filename: "stayimage",
    url: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmluZXlhcmR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
  },
  price: 1800,
  location: "Napa Valley",
  country: "United States"
},
{
  title: "Geodesic Dome in Redwoods",
  description: "Futuristic dome nestled among ancient redwoods, featuring skylight stargazing and forest bathing platform.",
  image: {
    filename: "stayimage",
    url: "https://images.unsplash.com/photo-1533779283484-8ad4940aa3a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9tZSUyMGhvdXNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
  },
  price: 1450,
  location: "California Redwoods",
  country: "United States"
},
{
  title: "Historic Lighthouse Keepers Cottage",
  description: "Stay in a heritage-listed lighthouse cottage with dramatic coastal views and maritime history exhibits.",
  image: {
    filename: "stayimage",
    url: "https://images.unsplash.com/photo-1583845112239-97ef1341b271?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGlnaHRob3VzZSUyMGhvdXNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
  },
  price: 1550,
  location: "Nova Scotia",
  country: "Canada"
}
];

module.exports = { data: sampleListings };


