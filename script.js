/**
 * ==========================================================================
 * TrendNEXT - "BE THE TREND WHERE FASHION MEETS COMFORT"
 * Core E-Commerce Logic & LocalStorage Management Engine
 * ==========================================================================
 */

// --- Global Product Catalog (All products priced strictly below ₹5000) ---
const PRODUCTS_DATA = [
  // =========================================================================
  // --- WOMEN'S COLLECTIONS ---
  // =========================================================================

  // --- Sarees: Onam, Silk, Traditional & Contemporary ---
  {
    id: 'w1',
    title: 'Graceful Banarasi Silk Saree with Zari Border',
    category: 'women',
    type: 'sarees',
    price: 1899,
    originalPrice: 3799,
    discount: '50% OFF',
    rating: 4.8,
    ratingCount: 342,
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=700&q=80',
    description: 'Elegantly woven soft Banarasi art silk saree with royal golden zari border and matching unstitched blouse piece. Breathable and comfortable.',
    sizes: ['Free Size'],
    tags: ['saree', 'traditional', 'wedding', 'party', 'women', 'silk', 'banarasi']
  },
  {
    id: 'w2',
    title: 'Authentic Kerala Kasavu Onam Saree with Gold Temple Border',
    category: 'women',
    type: 'sarees',
    price: 2299,
    originalPrice: 4599,
    discount: '50% OFF',
    rating: 4.9,
    ratingCount: 428,
    image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=700&q=80',
    description: 'Traditional off-white Kerala cotton-silk Onam Kasavu saree with rich woven gold temple motifs and contrast golden blouse piece.',
    sizes: ['Free Size'],
    tags: ['saree', 'onam', 'kasavu', 'kerala', 'traditional', 'southwear', 'festive', 'women']
  },
  {
    id: 'w3',
    title: 'Royal Kanjivaram Pure Silk Brocade Saree with Rich Pallu',
    category: 'women',
    type: 'sarees',
    price: 4499,
    originalPrice: 8999,
    discount: '50% OFF',
    rating: 4.9,
    ratingCount: 285,
    image: 'https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=700&q=80',
    description: 'Heritage Kanjivaram pure silk saree handwoven with lustrous gold brocade and ornate bridal temple pallu for weddings and grand festivities.',
    sizes: ['Free Size'],
    tags: ['saree', 'kanjivaram', 'pure silk', 'traditional', 'wedding', 'southwear', 'women']
  },
  {
    id: 'w4',
    title: 'Heritage Mysore Crepe Pure Silk Saree with Antique Zari',
    category: 'women',
    type: 'sarees',
    price: 3999,
    originalPrice: 7999,
    discount: '50% OFF',
    rating: 4.8,
    ratingCount: 194,
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=700&q=80',
    description: 'Feather-light pure Mysore crepe silk saree with smooth matte sheen, solid rich body, and intricate antique golden zari borders.',
    sizes: ['Free Size'],
    tags: ['saree', 'mysore silk', 'pure silk', 'traditional', 'southwear', 'women']
  },
  {
    id: 'w5',
    title: 'Handwoven Paithani Traditional Silk Saree with Peacock Pallu',
    category: 'women',
    type: 'sarees',
    price: 3699,
    originalPrice: 7399,
    discount: '50% OFF',
    rating: 4.9,
    ratingCount: 162,
    image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=700&q=80',
    description: 'Exquisite Maharani Paithani handwoven silk saree featuring vibrant oblique square borders and a majestic multi-coloured peacock zari pallu.',
    sizes: ['Free Size'],
    tags: ['saree', 'paithani', 'traditional', 'silk', 'festive', 'women']
  },

  // --- Southern Wear & Kurta with Palazzo Sets ---
  {
    id: 'w6',
    title: 'South Handblock Print Pure Cotton Kurta with Flared Palazzo Set',
    category: 'women',
    type: 'kurta-palazzo',
    price: 1899,
    originalPrice: 3799,
    discount: '50% OFF',
    rating: 4.8,
    ratingCount: 512,
    image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=700&q=80',
    description: '100% breathable organic cotton straight-cut ethnic kurta with detailed handblock floral prints paired with a super-flared palazzo pant and dupatta.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    tags: ['kurta', 'palazzo', 'southwear', 'ethnic', 'cotton', 'set', 'women', 'casual']
  },
  {
    id: 'w7',
    title: 'Embroidered Rayon Anarkali Kurti with Wide-Leg Palazzo & Dupatta',
    category: 'women',
    type: 'kurta-palazzo',
    price: 2499,
    originalPrice: 4999,
    discount: '50% OFF',
    rating: 4.9,
    ratingCount: 380,
    image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=700&q=80',
    description: 'Festive floor-length flared Anarkali kurta crafted from silky soft viscose rayon with detailed mirror threadwork and matching wide-leg palazzo.',
    sizes: ['S', 'M', 'L', 'XL'],
    tags: ['kurta', 'palazzo', 'anarkali', 'southwear', 'ethnic', 'party', 'women', 'set']
  },
  {
    id: 'w8',
    title: 'Rooh Pari Red Pure Cotton Festive Kurta Set with Dupatta',
    category: 'women',
    type: 'kurta-palazzo',
    price: 2799,
    originalPrice: 5599,
    discount: '50% OFF',
    rating: 4.9,
    ratingCount: 385,
    image: 'https://shahenaz.com/cdn/shop/files/RoohPariRedKurtiSetwithDupatta_2.jpg?v=1757318202',
    description: 'Handcrafted pure cotton festive party wear red kurta set featuring detailed neck handwork, delicate lace borders, matching bottoms and breezy printed dupatta.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    tags: ['kurta', 'palazzo', 'party', 'cotton', 'ethnic', 'women', 'set', 'festive', 'red']
  },
  {
    id: 'w9',
    title: 'Festive Crimson Red Kurta with Organza Ruffle Dupatta & Palazzo Set',
    category: 'women',
    type: 'kurta-palazzo',
    price: 2499,
    originalPrice: 4999,
    discount: '50% OFF',
    rating: 4.8,
    ratingCount: 420,
    image: 'https://trendia.co/cdn/shop/products/DSC5024_0045efab-3485-4de4-bd33-993d1f446a33.jpg?v=1749619003&width=2333',
    description: 'Statement red festive kurta ensemble with dramatic tiered ruffle organza dupatta and tailored stretch palazzo pants for weddings and celebrations.',
    sizes: ['S', 'M', 'L', 'XL'],
    tags: ['kurta', 'palazzo', 'ruffle', 'organza', 'party', 'festive', 'women', 'set', 'red']
  },
  {
    id: 'w10',
    title: 'Chaand Shimmer Party Wear Saree with Readymade Designer Blouse',
    category: 'women',
    type: 'sarees',
    price: 2999,
    originalPrice: 5999,
    discount: '50% OFF',
    rating: 4.9,
    ratingCount: 340,
    image: 'https://cdn.shopaccino.com/nakhrali/products/23-89419750967879_l.jpg?v=732',
    description: 'Exquisite pre-styled Chaand shimmer party wear saree paired with a heavy hand-embroidered readymade designer blouse piece for festive evenings.',
    sizes: ['Free Size'],
    tags: ['saree', 'party', 'chaand', 'readymade blouse', 'festive', 'women', 'wedding']
  },

  // --- Combo Sets of Short Kurta Tops ---
  {
    id: 'w11',
    title: 'Combo Set of 3 Daily-Wear Pure Cotton Short Kurti Tops',
    category: 'women',
    type: 'combo-sets',
    price: 1499,
    originalPrice: 2999,
    discount: '50% OFF',
    rating: 4.8,
    ratingCount: 615,
    image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=700&q=80',
    description: 'Value pack of 3 daily-wear 100% breathable cotton short kurtas in vibrant ethnic prints (Indigo, Rust & Mustard). Perfect for jeans and leggings.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    tags: ['combo', 'short kurta', 'kurti', 'tops', 'cotton', 'casual', 'women', 'set']
  },
  {
    id: 'w12',
    title: 'Royal Wedding Tissue Silk Saree with Antique Gold Temple Zari',
    category: 'women',
    type: 'sarees',
    price: 3499,
    originalPrice: 6999,
    discount: '50% OFF',
    rating: 4.9,
    ratingCount: 295,
    image: 'https://photos.ethnicsuits.in/2025/08/Wedding-Tissue-Silk-Saree-for-Women-1.webp',
    description: 'Luminous bridal tissue pure silk saree woven with antique golden metallic sheen and floral temple zari pallu for grand wedding celebrations.',
    sizes: ['Free Size'],
    tags: ['saree', 'tissue silk', 'wedding', 'bridal', 'traditional', 'women', 'gold']
  },

  // --- Modern Dresses, Frocks & Party Wear ---
  {
    id: 'w13',
    title: 'Bohemian Floral Tiered Maxi Dress with Smocked Bodice',
    category: 'women',
    type: 'frocks',
    price: 1699,
    originalPrice: 3399,
    discount: '50% OFF',
    rating: 4.8,
    ratingCount: 290,
    image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=700&q=80',
    description: 'Airy bohemian multi-tiered floral maxi dress in breathable cotton-georgette with a stretchy smocked bodice and fluttering sleeves.',
    sizes: ['S', 'M', 'L', 'XL'],
    tags: ['dress', 'modern dress', 'frock', 'maxi', 'floral', 'casual', 'women']
  },
  {
    id: 'w14',
    title: 'Velvet Wrap Evening Cocktail Midi Dress with Slit',
    category: 'women',
    type: 'party',
    price: 2799,
    originalPrice: 5599,
    discount: '50% OFF',
    rating: 4.9,
    ratingCount: 175,
    image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=700&q=80',
    description: 'Luxe midnight emerald stretch velvet wrap cocktail dress with a plunging V-neckline, ruched waist, and elegant side slit.',
    sizes: ['S', 'M', 'L', 'XL'],
    tags: ['dress', 'modern dress', 'party', 'velvet', 'cocktail', 'gown', 'women']
  },
  {
    id: 'w15',
    title: 'Executive Notch-Lapel Formal Blazer & Pant Set',
    category: 'women',
    type: 'formal',
    price: 2999,
    originalPrice: 5999,
    discount: '50% OFF',
    rating: 4.9,
    ratingCount: 156,
    image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=700&q=80',
    description: 'Tailored slim-fit formal co-ord blazer and trousers set in stretch poly-viscose. Crisp, wrinkle-resistant and boardroom ready.',
    sizes: ['S', 'M', 'L', 'XL'],
    tags: ['formal', 'blazer', 'office', 'women', 'suit', 'pants']
  },

  // =========================================================================
  // --- MEN'S COLLECTIONS ---
  // =========================================================================
  {
    id: 'm1',
    title: 'Traditional Kerala Kasavu Mundu & Golden Border Kurta Set',
    category: 'men',
    type: 'kurta-palazzo',
    price: 2199,
    originalPrice: 4399,
    discount: '50% OFF',
    rating: 4.9,
    ratingCount: 380,
    image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=700&q=80',
    description: 'Authentic pure cotton off-white traditional Kerala Mundu paired with a matching golden tissue border festive kurta shirt for Onam and celebrations.',
    sizes: ['38', '40', '42', '44'],
    tags: ['onam', 'southwear', 'mundu', 'kurta', 'traditional', 'ethnic', 'men', 'festive']
  },
  {
    id: 'm2',
    title: 'Royal Silk Sherwani Indo-Western Jacket & Dhoti Pant Set',
    category: 'men',
    type: 'party',
    price: 4499,
    originalPrice: 8999,
    discount: '50% OFF',
    rating: 4.9,
    ratingCount: 220,
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=700&q=80',
    description: 'Majestic jacquard silk Indo-western sherwani coat with ornate metal buttons, paired with pre-pleated cowl dhoti pants for grand weddings.',
    sizes: ['38', '40', '42', '44'],
    tags: ['party', 'sherwani', 'indo-western', 'wedding', 'ethnic', 'men', 'traditional']
  },
  {
    id: 'm3',
    title: 'Heavyweight Relaxed Baggy Fit Denim Jeans',
    category: 'men',
    type: 'baggy-pants',
    price: 1899,
    originalPrice: 3799,
    discount: '50% OFF',
    rating: 4.8,
    ratingCount: 540,
    image: 'https://images.unsplash.com/photo-1542272604-780c96856592?auto=format&fit=crop&w=700&q=80',
    description: '100% 14oz rigid cotton denim baggy skater jeans with a wide straight leg, deep pockets, and vintage mid-blue wash.',
    sizes: ['30', '32', '34', '36'],
    tags: ['baggy', 'pants', 'jeans', 'denim', 'streetwear', 'casual', 'men']
  },
  {
    id: 'm4',
    title: 'Urban Streetwear Baggy Parachute Cargo Track Pants',
    category: 'men',
    type: 'baggy-pants',
    price: 1599,
    originalPrice: 3199,
    discount: '50% OFF',
    rating: 4.7,
    ratingCount: 420,
    image: 'https://images.unsplash.com/photo-1517445312882-bc9910d016b7?auto=format&fit=crop&w=700&q=80',
    description: 'Water-repellent matte parachute nylon baggy trousers with knee dart pleating, oversized cargo pouches, and adjustable drawcord hems.',
    sizes: ['M', 'L', 'XL', 'XXL'],
    tags: ['baggy', 'cargo', 'pants', 'parachute', 'streetwear', 'casual', 'men']
  },
  {
    id: 'm5',
    title: 'Combo Pack of 2 Pure Linen Mandarin Collar Short Kurta Shirts',
    category: 'men',
    type: 'combo-sets',
    price: 1799,
    originalPrice: 3599,
    discount: '50% OFF',
    rating: 4.8,
    ratingCount: 310,
    image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=700&q=80',
    description: 'Value set of 2 premium organic linen short kurta shirts (White & Pastel Sage) with rolled-tab sleeves and wooden buttons.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    tags: ['combo', 'short kurta', 'linen', 'shirts', 'casual', 'men', 'southwear']
  },
  {
    id: 'm6',
    title: 'Single-Breasted Charcoal Formal Blazer',
    category: 'men',
    type: 'formal',
    price: 3499,
    originalPrice: 6999,
    discount: '50% OFF',
    rating: 4.9,
    ratingCount: 215,
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=700&q=80',
    description: 'Sleek matte charcoal notch-lapel blazer with dual vents and interior silk lining. Unmatched sophistication under ₹5000.',
    sizes: ['38', '40', '42', '44'],
    tags: ['formal', 'blazer', 'suit', 'men', 'wedding', 'office']
  },
  {
    id: 'm7',
    title: 'Red Floral Embroidered Satin Silk Bridal Designer Saree',
    category: 'women',
    type: 'sarees',
    price: 3899,
    originalPrice: 7799,
    discount: '50% OFF',
    rating: 4.9,
    ratingCount: 260,
    image: 'https://diademstore.com/cdn/shop/files/Red_Floral_Embroidered_Satin_Bridal_Designer_Saree1.webp?v=1747726402',
    description: 'Opulent crimson red satin silk bridal designer saree adorned with rich tone-on-tone floral threadwork and golden scalloped borders.',
    sizes: ['Free Size'],
    tags: ['saree', 'bridal', 'satin silk', 'embroidered', 'wedding', 'women', 'red']
  },
  {
    id: 'm8',
    title: 'Urban Cuban Collar Relaxed Resort Shirt',
    category: 'men',
    type: 'shirts',
    price: 799,
    originalPrice: 1599,
    discount: '50% OFF',
    rating: 4.6,
    ratingCount: 310,
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=700&q=80',
    description: 'Breezy textured rayon cuban-collar casual shirt in earth tones. Pairs effortlessly with chinos, baggy jeans, or linen shorts.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    tags: ['shirt', 'casual', 'summer', 'men', 'resort']
  },

  // =========================================================================
  // --- GIRLS' COLLECTIONS ---
  // =========================================================================
  {
    id: 'g1',
    title: 'Traditional South Silk Pattu Pavadai / Lehenga Choli Set',
    category: 'girls',
    type: 'party',
    price: 1999,
    originalPrice: 3999,
    discount: '50% OFF',
    rating: 4.9,
    ratingCount: 320,
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=700&q=80',
    description: 'Stunning traditional South Indian pure silk jacquard Pattu Pavadai skirt and blouse set with gleaming gold zari borders for festive poojas and Onam.',
    sizes: ['3-4Y', '5-6Y', '7-8Y', '9-10Y', '11-12Y'],
    tags: ['pattu pavadai', 'southwear', 'traditional', 'silk', 'festive', 'girls', 'onam']
  },
  {
    id: 'g2',
    title: 'Fabulous Indian Wedding Wear Hand-Printed Pure Silk Saree',
    category: 'women',
    type: 'sarees',
    price: 3199,
    originalPrice: 6399,
    discount: '50% OFF',
    rating: 4.8,
    ratingCount: 310,
    image: 'http://ragthm.com/cdn/shop/files/photo_2024-04-23_14-18-43.jpg?v=1721907405',
    description: 'Heritage Indian wedding pure silk saree featuring handcrafted ethnic motifs, rich contrasting pallu, and matching unstitched blouse.',
    sizes: ['Free Size'],
    tags: ['saree', 'wedding', 'printed silk', 'traditional', 'festive', 'women']
  },
  {
    id: 'g3',
    title: 'Flared Cotton Kurti with Palazzo & Dupatta 3-Piece Set',
    category: 'girls',
    type: 'kurta-palazzo',
    price: 1499,
    originalPrice: 2999,
    discount: '50% OFF',
    rating: 4.8,
    ratingCount: 190,
    image: 'https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?auto=format&fit=crop&w=700&q=80',
    description: 'Charming festive printed flared kurti with matching printed palazzo bottoms and lightweight net dupatta with gota lace borders.',
    sizes: ['4-5Y', '6-7Y', '8-9Y', '10-11Y', '12-13Y'],
    tags: ['kurta', 'palazzo', 'girls', 'ethnic', 'southwear', 'set', 'festive']
  },
  {
    id: 'g4',
    title: 'Putali Shop Designer Party Wear Silk Blend Wedding Saree',
    category: 'women',
    type: 'sarees',
    price: 2299,
    originalPrice: 4599,
    discount: '50% OFF',
    rating: 4.8,
    ratingCount: 225,
    image: 'https://assets0.mirraw.com/images/12209869/photo_6109468310455300685_y_zoom.jpg?1706175348',
    description: 'Graceful wedding guest silk blend saree featuring all-over festive jacquard weaving, gleaming zari work, and lightweight comfortable drape.',
    sizes: ['Free Size'],
    tags: ['saree', 'silk blend', 'wedding', 'party', 'festive', 'women']
  },
  {
    id: 'g5',
    title: 'Princess Tulle Ballgown Party Frock with Bow',
    category: 'girls',
    type: 'frocks',
    price: 1199,
    originalPrice: 2399,
    discount: '50% OFF',
    rating: 4.9,
    ratingCount: 230,
    image: 'https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?auto=format&fit=crop&w=700&q=80',
    description: 'Dreamy multi-layer pastel pink tulle frock with satin inner lining and a detachable crystal bow. Perfect for birthdays.',
    sizes: ['3-4Y', '5-6Y', '7-8Y', '9-10Y', '11-12Y'],
    tags: ['frock', 'girls', 'party', 'dress', 'pink']
  },
  {
    id: 'g6',
    title: 'Teen Girls Grey Organza Digital Printed Party Dress',
    category: 'girls',
    type: 'frocks',
    price: 2199,
    originalPrice: 4399,
    discount: '50% OFF',
    rating: 4.9,
    ratingCount: 318,
    image: 'images/girls_collection.jpg',
    description: 'Designer teen girls grey organza party wear dress featuring digital prints, transparent yoke, elbow sleeves, and a flare with detachable can-can.',
    sizes: ['11-12Y', '13-14Y', '15-16Y'],
    tags: ['dress', 'girls', 'organza', 'party', 'digital print', 'teen', 'frock']
  },
  {
    id: 'g7',
    title: 'Teen Girls Multicolor Printed Gathered Style Midi Dress',
    category: 'girls',
    type: 'frocks',
    price: 1599,
    originalPrice: 3199,
    discount: '50% OFF',
    rating: 4.8,
    ratingCount: 275,
    image: 'images/girls_midi_dress.jpg',
    description: 'Vibrant teen girls multicolor printed gathered midi dress with adjustable straps, layered calf-length flare, decorative buttons, and soft breathable lining.',
    sizes: ['9-10Y', '11-12Y', '13-14Y', '15-16Y'],
    tags: ['dress', 'girls', 'midi', 'festive', 'printed', 'gathered', 'teen', 'frock']
  },

  // =========================================================================
  // --- BOYS' COLLECTIONS ---
  // =========================================================================
  {
    id: 'b1',
    title: 'Traditional South Silk Kurta & Golden Border Dhoti/Veshti Set',
    category: 'boys',
    type: 'party',
    price: 1799,
    originalPrice: 3599,
    discount: '50% OFF',
    rating: 4.9,
    ratingCount: 360,
    image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=700&q=80',
    description: 'Grand silk-blend golden-cream ethnic kurta paired with pre-stitched Velcro-fit gold border Veshti/Dhoti and matching Angavastram for Onam.',
    sizes: ['3-4Y', '5-6Y', '7-8Y', '9-10Y', '11-12Y'],
    tags: ['southwear', 'onam', 'dhoti', 'kurta', 'traditional', 'ethnic', 'boys', 'festive']
  },
  {
    id: 'b2',
    title: 'Little Gentleman 3-Piece Formal Suit with Waistcoat & Bowtie',
    category: 'boys',
    type: 'formal',
    price: 2299,
    originalPrice: 4599,
    discount: '50% OFF',
    rating: 4.9,
    ratingCount: 310,
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=700&q=80',
    description: 'Smart tailored formal set including cotton dress shirt, woven waistcoat, matching trousers and a red satin bowtie.',
    sizes: ['3-4Y', '5-6Y', '7-8Y', '9-10Y', '11-12Y'],
    tags: ['formal', 'suit', 'boys', 'party', 'wedding']
  },
  {
    id: 'b3',
    title: 'Traditional Heritage Indian Bridal Pure Kanjivaram Silk Saree',
    category: 'women',
    type: 'sarees',
    price: 4199,
    originalPrice: 8399,
    discount: '50% OFF',
    rating: 4.9,
    ratingCount: 450,
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=700&q=80',
    description: 'Grand traditional south Indian bridal pure silk saree handwoven with lustrous gold brocade and ornate bridal temple pallu for weddings.',
    sizes: ['Free Size'],
    tags: ['saree', 'kanjivaram', 'pure silk', 'traditional', 'wedding', 'women', 'southwear']
  },
  {
    id: 'b4',
    title: 'Handcrafted Festive Chikankari Silk Kurta & Tailored Pant Set',
    category: 'women',
    type: 'kurta-palazzo',
    price: 2699,
    originalPrice: 5399,
    discount: '50% OFF',
    rating: 4.8,
    ratingCount: 275,
    image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=700&q=80',
    description: 'Delicate pastel festive Chikankari thread embroidered straight kurta paired with straight-cut silk pants and sheer dupatta.',
    sizes: ['S', 'M', 'L', 'XL'],
    tags: ['kurta', 'palazzo', 'chikankari', 'ethnic', 'festive', 'party', 'women', 'set']
  },
  {
    id: 'b5',
    title: 'Superheroes Graphic Crew Neck Cotton T-Shirt',
    category: 'boys',
    type: 'tshirts',
    price: 449,
    originalPrice: 899,
    discount: '50% OFF',
    rating: 4.8,
    ratingCount: 490,
    image: 'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=700&q=80',
    description: 'Vibrant pop-art comic graphic tee made of soft breathable combed cotton. Fade-resistant and machine washable.',
    sizes: ['2-3Y', '4-5Y', '6-7Y', '8-9Y', '10-12Y'],
    tags: ['tshirt', 'boys', 'casual', 'cotton', 'superhero']
  }
];

// --- Customer Trial / Feedback Reviews Dataset ---
const DEFAULT_REVIEWS = [];

// --- LocalStorage Storage Helpers ---
const Storage = {
  getCart() {
    try {
      const data = localStorage.getItem('trendnext_cart');
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  },
  setCart(cart) {
    localStorage.setItem('trendnext_cart', JSON.stringify(cart));
    updateNavbarBadges();
  },
  getWishlist() {
    try {
      const data = localStorage.getItem('trendnext_wishlist');
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  },
  setWishlist(wishlist) {
    localStorage.setItem('trendnext_wishlist', JSON.stringify(wishlist));
    updateNavbarBadges();
  },
  getReviews() {
    try {
      const data = localStorage.getItem('trendnext_reviews');
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  },
  addReview(review) {
    const reviews = Storage.getReviews();
    reviews.unshift(review);
    localStorage.setItem('trendnext_reviews', JSON.stringify(reviews));
  },
  getCoupon() {
    return localStorage.getItem('trendnext_coupon') || null;
  },
  setCoupon(code) {
    if (code) localStorage.setItem('trendnext_coupon', code);
    else localStorage.removeItem('trendnext_coupon');
  }
};

// --- Toast Notification System ---
function showToast(message, type = 'success') {
  let container = document.getElementById('toastContainer');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toastContainer';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `
    <span>${type === 'success' ? '✓' : 'ℹ'}</span>
    <span>${message}</span>
  `;
  container.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 3000);
}

// --- Dynamic Badge Counter Updater ---
function updateNavbarBadges() {
  const cart = Storage.getCart();
  const wishlist = Storage.getWishlist();

  const totalCartCount = cart.reduce((sum, item) => sum + (item.qty || 1), 0);
  const totalWishlistCount = wishlist.length;

  document.querySelectorAll('.cart-count-badge').forEach(el => {
    el.textContent = totalCartCount;
    el.style.display = totalCartCount > 0 ? 'flex' : 'none';
  });

  document.querySelectorAll('.wishlist-count-badge').forEach(el => {
    el.textContent = totalWishlistCount;
    el.style.display = totalWishlistCount > 0 ? 'flex' : 'none';
  });
}

// --- Cart Actions ---
function addToCart(productId, selectedSize = null, qty = 1) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;

  const size = selectedSize || product.sizes[0];
  const cart = Storage.getCart();
  const existingIndex = cart.findIndex(item => item.id === productId && item.size === size);

  if (existingIndex > -1) {
    cart[existingIndex].qty += qty;
  } else {
    cart.push({
      id: product.id,
      title: product.title,
      price: product.price,
      originalPrice: product.originalPrice,
      image: product.image,
      category: product.category,
      type: product.type,
      size: size,
      qty: qty
    });
  }

  Storage.setCart(cart);
  showToast(`Added "${product.title.substring(0, 22)}..." to Cart!`, 'success');
}

function updateCartQuantity(cartIndex, delta) {
  const cart = Storage.getCart();
  if (cart[cartIndex]) {
    cart[cartIndex].qty += delta;
    if (cart[cartIndex].qty <= 0) {
      cart.splice(cartIndex, 1);
      showToast('Item removed from cart', 'info');
    }
    Storage.setCart(cart);
    if (typeof renderCartPage === 'function') {
      renderCartPage();
    }
  }
}

function removeFromCart(cartIndex) {
  const cart = Storage.getCart();
  if (cart[cartIndex]) {
    cart.splice(cartIndex, 1);
    Storage.setCart(cart);
    showToast('Item removed from cart', 'info');
    if (typeof renderCartPage === 'function') {
      renderCartPage();
    }
  }
}

// --- Wishlist Actions ---
function toggleWishlist(productId) {
  let wishlist = Storage.getWishlist();
  const exists = wishlist.includes(productId);

  if (exists) {
    wishlist = wishlist.filter(id => id !== productId);
    showToast('Removed from Wishlist', 'info');
  } else {
    wishlist.push(productId);
    const prod = PRODUCTS_DATA.find(p => p.id === productId);
    showToast(`Added "${prod ? prod.title.substring(0, 20) : 'Item'}..." to Wishlist!`, 'success');
  }

  Storage.setWishlist(wishlist);

  // Update heart buttons active state across page
  document.querySelectorAll(`.wishlist-btn-${productId}`).forEach(btn => {
    btn.classList.toggle('active', !exists);
    btn.innerHTML = !exists ? '♥' : '♡';
  });

  if (typeof renderWishlistPage === 'function') {
    renderWishlistPage();
  }
}

// --- Product Card Renderer Helper ---
function createProductCardHTML(product) {
  const wishlist = Storage.getWishlist();
  const isWishlisted = wishlist.includes(product.id);
  const saveAmount = product.originalPrice - product.price;

  return `
    <div class="product-card" data-id="${product.id}">
      <div class="product-image-wrap">
        <img src="${product.image}" alt="${product.title}" class="product-image" loading="lazy" onerror="this.onerror=null; this.src='images/girls_collection.jpg';">
        <span class="product-badge-discount">${product.discount}</span>
        <span class="product-badge-category">${product.category.toUpperCase()} • ${product.type.toUpperCase()}</span>
        <button class="product-wishlist-btn wishlist-btn-${product.id} ${isWishlisted ? 'active' : ''}" 
                onclick="toggleWishlist('${product.id}')" 
                title="${isWishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}">
          ${isWishlisted ? '♥' : '♡'}
        </button>
      </div>
      <div class="product-info">
        <div class="product-rating">
          <span class="star-icon">★</span>
          <span>${product.rating}</span>
          <span class="product-rating-count">(${product.ratingCount})</span>
        </div>
        <h4 class="product-title" title="${product.title}">${product.title}</h4>
        <div class="product-prices">
          <span class="price-current">₹${product.price.toLocaleString('en-IN')}</span>
          <span class="price-original">₹${product.originalPrice.toLocaleString('en-IN')}</span>
          <span class="price-save">Save ₹${saveAmount}</span>
        </div>
        <div class="product-actions">
          <button class="btn-add-cart" onclick="addToCart('${product.id}')">
            🛒 Add to Cart
          </button>
          <button class="btn-quick-view" onclick="openQuickView('${product.id}')" title="Quick View">
            👁
          </button>
        </div>
      </div>
    </div>
  `;
}

// --- Quick View Modal System ---
function openQuickView(productId) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;

  let modal = document.getElementById('quickViewModal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'quickViewModal';
    modal.className = 'quick-view-modal';
    document.body.appendChild(modal);
  }

  const wishlist = Storage.getWishlist();
  const isWishlisted = wishlist.includes(product.id);

  modal.innerHTML = `
    <div class="quick-view-content">
      <button class="quick-view-close" onclick="closeQuickView()">✕</button>
      <div class="quick-view-img-wrap">
        <img src="${product.image}" alt="${product.title}" class="quick-view-img" onerror="this.onerror=null; this.src='images/girls_collection.jpg';">
      </div>
      <div class="quick-view-body">
        <span class="section-tag">${product.category.toUpperCase()} • ${product.type.toUpperCase()}</span>
        <h3>${product.title}</h3>
        <div class="product-rating">
          <span class="star-icon">★</span>
          <span>${product.rating} / 5.0</span>
          <span class="product-rating-count">(${product.ratingCount} reviews)</span>
        </div>
        <div class="product-prices" style="margin: 0.5rem 0;">
          <span class="price-current" style="font-size: 1.6rem;">₹${product.price.toLocaleString('en-IN')}</span>
          <span class="price-original">₹${product.originalPrice.toLocaleString('en-IN')}</span>
          <span class="price-save" style="font-size: 0.9rem;">${product.discount}</span>
        </div>
        <p style="font-size: 0.9rem; color: var(--text-secondary);">${product.description}</p>
        
        <div>
          <label style="font-size: 0.85rem; font-weight: 700; display: block; margin-bottom: 0.5rem;">Select Size:</label>
          <div class="size-chips" id="quickViewSizes">
            ${product.sizes.map((s, idx) => `
              <button class="size-chip ${idx === 0 ? 'selected' : ''}" onclick="selectQuickViewSize(this)">${s}</button>
            `).join('')}
          </div>
        </div>

        <div style="display: flex; gap: 0.75rem; margin-top: 1rem;">
          <button class="btn btn-primary" style="flex-grow: 1;" onclick="addQuickViewToCart('${product.id}')">
            Add to Cart
          </button>
          <button class="btn btn-outline-dark" onclick="toggleWishlist('${product.id}'); closeQuickView();">
            ${isWishlisted ? '♥ In Wishlist' : '♡ Wishlist'}
          </button>
        </div>
      </div>
    </div>
  `;

  modal.classList.add('active');
}

function selectQuickViewSize(el) {
  document.querySelectorAll('#quickViewSizes .size-chip').forEach(c => c.classList.remove('selected'));
  el.classList.add('selected');
}

function addQuickViewToCart(productId) {
  const selectedSizeEl = document.querySelector('#quickViewSizes .size-chip.selected');
  const size = selectedSizeEl ? selectedSizeEl.textContent.trim() : null;
  addToCart(productId, size, 1);
  closeQuickView();
}

function closeQuickView() {
  const modal = document.getElementById('quickViewModal');
  if (modal) modal.classList.remove('active');
}

// --- Recommendation Recommender Engine ---
function renderRecommendations(categoryOrType, containerId, limit = 4) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const lowerTarget = (categoryOrType || 'women').toLowerCase();
  
  // Find similar products by category or matching tags
  let similar = PRODUCTS_DATA.filter(p => 
    p.category.toLowerCase() === lowerTarget || 
    p.type.toLowerCase() === lowerTarget ||
    p.tags.some(t => t.includes(lowerTarget))
  );

  if (similar.length < limit) {
    similar = PRODUCTS_DATA;
  }

  // Shuffle and slice
  const selected = [...similar].sort(() => 0.5 - Math.random()).slice(0, limit);
  container.innerHTML = selected.map(p => createProductCardHTML(p)).join('');
}

// --- Mobile Navigation Drawer Setup ---
function setupMobileDrawer() {
  const toggleBtn = document.getElementById('mobileNavToggle');
  const drawer = document.getElementById('mobileNavDrawer');
  const closeBtn = document.getElementById('closeMobileNav');

  if (toggleBtn && drawer) {
    toggleBtn.addEventListener('click', () => {
      drawer.classList.add('open');
    });
  }

  if (closeBtn && drawer) {
    closeBtn.addEventListener('click', () => {
      drawer.classList.remove('open');
    });
  }

  if (drawer) {
    drawer.addEventListener('click', (e) => {
      if (e.target === drawer) {
        drawer.classList.remove('open');
      }
    });
  }
}

// --- Highlight Active Nav Link ---
function highlightActiveNav() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link, .drawer-nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

// --- Cart Calculation Helper ---
function calculateCartTotals() {
  const cart = Storage.getCart();
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const coupon = Storage.getCoupon();

  let discount = 0;
  if (coupon === 'FIRST10' && subtotal > 0) {
    discount = Math.round(subtotal * 0.10); // 10% discount
  }

  const deliveryFee = subtotal > 499 || subtotal === 0 ? 0 : 49;
  const finalTotal = Math.max(0, subtotal - discount + deliveryFee);

  return {
    subtotal,
    discount,
    deliveryFee,
    finalTotal,
    coupon
  };
}

// --- Initializer for all pages ---
document.addEventListener('DOMContentLoaded', () => {
  setupMobileDrawer();
  highlightActiveNav();
  updateNavbarBadges();
});
