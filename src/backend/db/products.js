import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: "1",
    image: "https://m.media-amazon.com/images/I/715elCiMWRL._SL1500_.jpg",
    category: "Chordophones",
    rating: "4.5",
    description:
      "Acoustic Guitar, 38 Inch Cutaway with Bag, Strings, Pick, and Strap",
    title: "Acoustic Guitar",
    original_price: "5000",
    price: "4500",
    delivery_time: "7",
    reviews: "1.2k",
    in_stock: true,
  },
  {
    _id: "2",
    image: "https://m.media-amazon.com/images/I/61GjDwXG-CL._SL1319_.jpg",
    category: "Keyboard",
    rating: "4.8",
    description: "Digital Piano with Weighted Keys and Built-in Speakers",
    title: "Digital Piano",
    original_price: "15000",
    price: "12000",
    delivery_time: "14",
    reviews: "3.7k",
    in_stock: true,
  },
  {
    _id: "3",
    image: "https://m.media-amazon.com/images/I/8186g7plXaL._SL1500_.jpg",
    category: "Membranophones",
    rating: "4.2",
    description: "Professional Drum Set with Cymbals and Sticks",
    title: "Professional Drum Set",
    original_price: "8000",
    price: "6500",
    delivery_time: "10",
    reviews: "1.9k",
    in_stock: true,
  },
  {
    _id: "4",
    image: "https://m.media-amazon.com/images/I/51o2K5fOhSL._SL1000_.jpg",
    category: "Aerophones",
    rating: "4.6",
    description: "Bamboo Flute with Carrying Case",
    title: "Bamboo Flute",
    original_price: "1000",
    price: "850",
    delivery_time: "5",
    reviews: "500",
    in_stock: true,
  },
  {
    _id: "5",
    image: "https://m.media-amazon.com/images/I/61X-T0lbtYL._SL1500_.jpg",
    category: "Chordophones",
    rating: "4.3",
    description: "Handcrafted Violin with Bow and Case",
    title: "Handcrafted Violin",
    original_price: "3000",
    price: "2700",
    delivery_time: "7",
    reviews: "900",
    in_stock: true,
  },
  {
    _id: "6",
    image: "https://m.media-amazon.com/images/I/81ZXkxzogzL._SL1500_.jpg",
    category: "Aerophones",
    rating: "4.7",
    description: "Alto Saxophone with Carrying Case and Accessories",
    title: "Alto Saxophone",
    original_price: "7000",
    price: "6500",
    delivery_time: "9",
    reviews: "1.5k",
    in_stock: true,
  },
  {
    _id: "7",
    image: "https://m.media-amazon.com/images/I/61M84t1+fXL._SL1500_.jpg",
    category: "Aerophones",
    rating: "4.4",
    description: "Professional Bb Trumpet with Case and Mouthpiece",
    title: "Professional Trumpet",
    original_price: "4000",
    price: "3500",
    delivery_time: "6",
    reviews: "1.2k",
    in_stock: true,
  },
  {
    _id: "8",
    image: "https://m.media-amazon.com/images/I/61cBFJeNY9L._SL1100_.jpg",
    category: "Keyboard",
    rating: "4.8",
    description: "Electronic Keyboard with 61 Keys and Built-in Speakers",
    title: "Electronic Keyboard",
    original_price: "2500",
    price: "2000",
    delivery_time: "5",
    reviews: "1.8k",
    in_stock: true,
  },
  {
    _id: "9",
    image: "https://m.media-amazon.com/images/I/61jAPolxg9S._SL1500_.jpg",
    category: "Idiophones",
    rating: "4.1",
    description: "Wooden Tambourine with Double Row Jingles",
    title: "Wooden Tambourine",
    original_price: "500",
    price: "400",
    delivery_time: "3",
    reviews: "300",
    in_stock: true,
  },
  {
    _id: "10",
    image: "https://m.media-amazon.com/images/I/71sWN9lyp+L._SL1500_.jpg",
    category: "Aerophones",
    rating: "4.0",
    description: "10-Hole Diatonic Harmonica with Case",
    title: "Diatonic Harmonica",
    original_price: "300",
    price: "250",
    delivery_time: "2",
    reviews: "200",
    in_stock: true,
  },
  {
    _id: "11",
    image: "https://m.media-amazon.com/images/I/71bF1IJL8IL._SL1500_.jpg",
    category: "Chordophones",
    rating: "4.6",
    description: "4-String Bass Guitar with Amplifier and Accessories",
    title: "4-String Bass Guitar",
    original_price: "6000",
    price: "5500",
    delivery_time: "8",
    reviews: "1.3k",
    in_stock: true,
  },
  {
    _id: "12",
    image: "https://m.media-amazon.com/images/I/81mHVtvThZL._SL1500_.jpg",
    category: "Membranophones",
    rating: "4.3",
    description: "Wooden Conga Drum with Stand",
    title: "Wooden Conga Drum",
    original_price: "2000",
    price: "1800",
    delivery_time: "6",
    reviews: "800",
    in_stock: true,
  },
  {
    _id: "13",
    image: "https://m.media-amazon.com/images/I/61sfes1CRwL._SL1001_.jpg",
    category: "Chordophones",
    rating: "4.7",
    description: "Lyre Harp with Tuning Wrench and Bag",
    title: "Lyre Harp",
    original_price: "1200",
    price: "1000",
    delivery_time: "5",
    reviews: "400",
    in_stock: true,
  },
  {
    _id: "14",
    image: "https://m.media-amazon.com/images/I/71JOefTRjdL._SL1500_.jpg",
    category: "Chordophones",
    rating: "4.2",
    description: "5-String Banjo with Resonator and Picks",
    title: "5-String Banjo",
    original_price: "3500",
    price: "3200",
    delivery_time: "7",
    reviews: "700",
    in_stock: true,
  },
  {
    _id: "15",
    image: "https://m.media-amazon.com/images/I/619HTD9j8+L._SL1500_.jpg",
    category: "Membranophones",
    rating: "4.9",
    description: "Digital Drum Set with Mesh Pads and Drum Sticks",
    title: "Digital Drum Set",
    original_price: "10000",
    price: "9500",
    delivery_time: "12",
    reviews: "2.3k",
    in_stock: true,
  },
  {
    _id: "16",
    image: "https://m.media-amazon.com/images/I/51rSSEpV8KL.jpg",
    category: "Keyboard",
    rating: "4.4",
    description: "Harmonium 42 key, Bass Male",
    title: "Harmonium",
    original_price: "4000",
    price: "3700",
    delivery_time: "6",
    reviews: "900",
    in_stock: true,
  },
  {
    _id: "17",
    image: "https://m.media-amazon.com/images/I/81lqSPxa7KL._SL1500_.jpg",
    category: "Chordophones",
    rating: "4.1",
    description: "Soprano Ukulele with Gig Bag and Tuner",
    title: "Soprano Ukulele",
    original_price: "800",
    price: "700",
    delivery_time: "3",
    reviews: "400",
    in_stock: true,
  },
  {
    _id: "18",
    image: "https://m.media-amazon.com/images/I/61M9mBeRdgL._SL1500_.jpg",
    category: "Idiophones",
    rating: "4.0",
    description: "Wooden Maracas for Latin Percussion",
    title: "Wooden Maracas",
    original_price: "200",
    price: "150",
    delivery_time: "2",
    reviews: "100",
    in_stock: true,
  },
  {
    _id: "19",
    image: "https://m.media-amazon.com/images/I/71lACL6BO-S._SL1500_.jpg",
    category: "Keyboard",
    rating: "4.7",
    description: "48-Bass Piano Accordion with Straps and Case",
    title: "Bass Piano Accordion",
    original_price: "6000",
    price: "5500",
    delivery_time: "9",
    reviews: "1.2k",
    in_stock: true,
  },
  {
    _id: "20",
    image: "https://m.media-amazon.com/images/I/717LD6AWIRL._SL1500_.jpg",
    category: "Aerophones",
    rating: "4.3",
    description: "Tenor Trombone with Case and Mouthpiece",
    title: "Tenor Trombone",
    original_price: "3500",
    price: "3200",
    delivery_time: "7",
    reviews: "800",
    in_stock: true,
  },
];
