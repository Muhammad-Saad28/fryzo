export interface Product {
  id: string;
  name: string;
  slug: string;
  weight: string;
  cutType: 'Straight Cut' | 'Crinkle Cut' | 'Curly Fries' | 'Hash Browns';
  price: number;
  originalPrice?: number;
  image: string;
  backImage?: string;
  description: string;
  features: string[];
  cookingTime: string;
  shelfLife: string;
}

export const PRODUCTS: Product[] = [
  {
    id: 'straight-1kg',
    name: 'Fryzo Straight Cut Fries 1.0 kg',
    slug: '1-kg-straight-cut-fries',
    weight: '1.0 KG',
    cutType: 'Straight Cut',
    price: 550,
    originalPrice: 650,
    image: '/images/products/straightcut1kg1.png',
    backImage: '/images/products/straightcutmain1kg2.png',
    description: 'The definitive classic golden straight-cut fry. Uniform 9mm cut pre-fried in pure vegetable oil for flawless crispy crust and fluffy potato core.',
    features: ['100% Selected Farm Potatoes', 'Flash Frozen at -18°C', 'Air-Fryer & Deep-Fryer Ready', 'Zero Trans Fat'],
    cookingTime: '3–4 mins at 175°C',
    shelfLife: '18 Months at -18°C'
  },
  {
    id: 'straight-2kg',
    name: 'Fryzo Straight Cut Fries 2.0 kg',
    slug: 'fryzo-straight-cut-fries-2-0-kg',
    weight: '2.0 KG',
    cutType: 'Straight Cut',
    price: 940,
    originalPrice: 1100,
    image: '/images/products/straightcut2kg1.png',
    backImage: '/images/products/straughtcut2kg2.png',
    description: 'Generous family pack for parties and gatherings. Delivers consistent restaurant-grade crunch and natural potato aroma in every serving.',
    features: ['Family Value Pack', 'Restaurant Quality Consistency', 'Quick Frying Formula', 'Natural Potato Flavor'],
    cookingTime: '3–4 mins at 175°C',
    shelfLife: '18 Months at -18°C'
  },
  {
    id: 'crinkle-2kg',
    name: 'Fryzo Crinkle Cut Fries 2.0 kg',
    slug: 'fryzo-crinkle-cut-fries-2-0-kg',
    weight: '2.0 KG',
    cutType: 'Crinkle Cut',
    price: 940,
    originalPrice: 1100,
    image: '/images/products/crinklecut1.png',
    backImage: '/images/products/crinklecut2.png',
    description: 'Sculpted deep ridges maximize surface area for extraordinary crispness and superior sauce retention. An unforgettable sensory bite.',
    features: ['Enhanced Surface Crisp', 'Holds Dips & Seasoning Better', 'Golden Crisp Exterior', 'Soft Velvety Interior'],
    cookingTime: '3.5–4.5 mins at 175°C',
    shelfLife: '18 Months at -18°C'
  },
  {
    id: 'curly-2kg',
    name: 'Fryzo Curly Fries 2.0 kg',
    slug: 'fryzo-curly-fries-2-0-kg',
    weight: '2.0 KG',
    cutType: 'Curly Fries',
    price: 1800,
    originalPrice: 2000,
    image: '/images/products/curlyfins2kg1.png',
    backImage: '/images/products/curlyfins2kg2.png',
    description: 'Signature spiral-cut fries seasoned with a light savory spice blend. Fun spiral shapes delivering a savory crunch that delights all ages.',
    features: ['Signature Spiral Geometry', 'Mildly Seasoned Coating', 'Extra Long Hold Time', 'Fun Gourmet Experience'],
    cookingTime: '3.5–4 mins at 175°C',
    shelfLife: '18 Months at -18°C'
  },
  {
    id: 'hashbrowns-2kg',
    name: 'Fryzo Crispy Hash Browns 2.0 kg',
    slug: 'fryzo-hash-browns-2-0-kg',
    weight: '2.0 KG',
    cutType: 'Hash Browns',
    price: 900,
    originalPrice: 1200,
    image: '/images/products/hashbrown2kg1.png',
    backImage: '/images/products/hashbrown2kg2.png',
    description: 'Golden triangular potato patties crafted with shredded organic potatoes. Crispy golden exterior, tender fluffy inside, quick to prepare in skillet, oven, or air fryer.',
    features: ['Crispy Triangular Patties', '100% Organic Potatoes', 'Halal Certified', 'Air Fryer & Skillet Ready'],
    cookingTime: '4–5 mins at 180°C',
    shelfLife: '18 Months at -18°C'
  }
];

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Procurement',
    description: 'Rigorous selection of premium high-solid potatoes sourced directly from certified contract farms in Punjab.',
    image: '/images/brand/farm-step1.png'
  },
  {
    step: '02',
    title: 'Cleaning & Peeling',
    description: 'Multi-stage hydrostatic washing and automated steam peeling preserve vital nutrients and pure flesh.',
    image: '/images/brand/farm-step2.png'
  },
  {
    step: '03',
    title: 'Precision Cutting',
    description: 'High-velocity water-jet cutter systems shape straight, crinkle, and curly fries with microscopic consistency.',
    image: '/images/brand/farm-step3.png'
  },
  {
    step: '04',
    title: 'Controlled Blanching',
    description: 'Precision thermal water treatment deactivates natural enzymes, extracts excess starches, and locks in golden clarity.',
    image: '/images/brand/farm-step4.png'
  },
  {
    step: '05',
    title: 'Par-Frying',
    description: 'Flash-frying in pure refined vegetable oil to create the initial micro-crust that ensures non-greasy home frying.',
    image: '/images/brand/farm-step1.png'
  },
  {
    step: '06',
    title: 'Flash Freezing (-18°C)',
    description: 'Individual Quick Freezing (IQF) tunnel drops core temperature in seconds, locking in peak moisture and crunch.',
    image: '/images/brand/farm-step2.png'
  }
];

export const FAQS = [
  {
    question: 'How are Fryzo fries different from standard frozen fries?',
    answer: 'Fryzo controls the entire supply chain from farm selection to blast-freezing. Our state-of-the-art par-frying and individual quick freeze (IQF) technology ensures our fries absorb up to 25% less oil during final preparation while staying crisp for longer.'
  },
  {
    question: 'What is the recommended cooking method for maximum crispness?',
    answer: 'For deep-frying: Heat cooking oil to 175°C (350°F). Fry straight from frozen for 3 to 4 minutes until golden and buoyant. Do not thaw before cooking. For Air-Fryers: Set to 200°C for 10-12 minutes, shaking midway.'
  },
  {
    question: 'How should Fryzo frozen fries be stored at home?',
    answer: 'Store unopened packs in your freezer at -18°C (0°F) or colder. If opened, fold the top tightly and secure with a freezer clip to prevent moisture absorption and freezer burn.'
  },
  {
    question: 'Do you offer nationwide cold-chain delivery in Pakistan?',
    answer: 'Yes! We operate temperature-controlled refrigerated distribution vans across major metropolitan hubs (Lahore, Karachi, Islamabad/Rawalpindi, Faisalabad) guaranteeing that your fries remain rock-frozen until your doorstep.'
  },
  {
    question: 'Are Fryzo products 100% Halal certified and vegetarian friendly?',
    answer: 'Fryzo fries are 100% Halal certified, processed in a sanitary facility, and prepared strictly with 100% pure vegetable oil with zero animal fats.'
  }
];
