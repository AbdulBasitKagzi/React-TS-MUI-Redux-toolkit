// import fullbodyoutfit from "./images/fullbodyoutfit.png";
// import blacksemiformal from "./images/blacksemiformal.png";
// import oceanbluefullsleeved from "./images/oceanbluefullsleeved.png";
// import redbuttonsweater from "./images/redbuttonedsweater.png";
// import shirt_1 from "./images/shirt-1.jpg";
// import shirt_2 from "./images/shirt-2.webp";
// import shirt_3 from "./images/shirt-3.webp";
// import shirt_4 from "./images/shirt-4.jpg";
// import assets.images.shoes_1 from "./images/shoes-1.png";
// import assets.images.shoes_2 from "./images/shoes-2.png";
// import shoes_3 from "./images/shoes-3.png";
// import shoes_4 from "./images/shoes-4.png";
// import summer from "./images/summer.png";
// import sunglasses from "./images/sunglasses.png";
// import footwear from "./images/footwear.png";
// import hat_1 from "./images/hat_1.png";
// import watches from "./images/watches.png";
import { assets } from '../assets';

import { brandProps, categoryProps, genderProps, product } from '../store/product/product.types';

export const gender: Array<genderProps> = [
  {
    id: 0,
    value: 'Majestic',
    slug: 'majestic'
  },
  {
    id: 1,
    value: 'Women',
    slug: 'women'
  },
  {
    id: 2,
    value: 'Men',
    slug: 'men'
  },
  {
    id: 3,
    value: 'Collection',
    slug: '/'
  },
  {
    id: 4,
    value: 'Outlet',
    slug: '/'
  }
];

export const newArrival = [
  {
    id: 'b/w',
    image: assets.images.fullbodyoutfit,
    title: 'B/W Full Body Outfit',
    subTitle: 'Jumper set for Women',
    price: '$89'
  },
  {
    id: 'balcksemiformal',
    image: assets.images.blacksemiformal,
    title: 'Black Semi-Formal Coat',
    subTitle: 'Coat for Women',
    price: '$159'
  },
  {
    id: 'oceanblue',
    image: assets.images.oceanbluefullsleeved,
    title: 'Ocean Blue Fullsleeved',
    subTitle: 'Denim Jacket for Men',
    price: '$79'
  },
  {
    id: 'redbuttonedsweater',
    image: assets.images.redbuttonsweater,
    title: 'Red Buttoned Sweater',
    subTitle: 'Sweater for Men',
    price: '$89'
  }
];

export const person_tabs = [
  {
    id: 'forwomen',
    value: 'For Women',
    slug: 'women'
  },
  {
    id: 'formen',
    value: 'For men',
    slug: 'men'
  }
];

export const product_tabs = [
  {
    id: 'tShirt',
    value: 'T-Shirt'
  },
  {
    id: 'shirt',
    value: 'Shirt'
  },
  {
    id: 'shoes',
    value: 'Shoes'
  },
  {
    id: 'watch',
    value: 'Watch'
  },
  {
    id: 'sunglasses',
    value: 'Sunglasses'
  },
  {
    id: 'bagpack',
    value: 'Bagpacks'
  }
];

export const products: Array<product> = [
  {
    id: 'shirt-1',
    type: 'shirt',
    category: 'men',
    image: assets.images.shirt_1,
    productName: 'shirt',
    price: '$100',
    cancelPrice: '$200'
  },
  {
    id: 'shirt-2',
    type: 'shirt',
    category: 'men',
    image: assets.images.shirt_2,
    productName: 'shirt',
    price: '$100',
    cancelPrice: '$200'
  },
  {
    id: 'shirt-3',
    type: 'shirt',
    category: 'men',
    image: assets.images.shirt_3,
    productName: 'shirt',
    price: '$100',
    cancelPrice: '$200'
  },
  {
    id: 'shirt-4',
    type: 'shirt',
    category: 'men',
    image: assets.images.shirt_4,
    productName: 'shirt',
    price: '$100',
    cancelPrice: '$200'
  },
  // shoes
  {
    id: 'shoes-1',
    type: 'shoes',
    category: 'men',
    image: assets.images.shoes_1,
    productName: 'shoes',
    price: '$300',
    cancelPrice: '$400'
  },
  {
    id: 'shoes-2',
    type: 'shoes',
    category: 'men',
    image: assets.images.shoes_2,
    productName: 'shoes',
    price: '$300',
    cancelPrice: '$400'
  },
  {
    id: 'shoes-3',
    type: 'shoes',
    category: 'men',
    image: assets.images.shoes_3,
    productName: 'shoes',
    price: '$300',
    cancelPrice: '$400'
  },
  {
    id: 'shoes-4',
    type: 'shoes',
    category: 'men',
    image: assets.images.shoes_4,
    productName: 'shoes',
    price: '$300',
    cancelPrice: '$400'
  }
];

export const Image_Lsit = [
  {
    img: assets.images.summer,
    title: 'Breakfast',
    rows: 6,
    cols: 2
  },
  {
    img: assets.images.sunglasses,
    title: 'sunglasses',
    rows: 0,
    cols: 1
  },
  {
    img: assets.images.footwear,
    title: 'footwear',
    rows: 0
    // cols: 1,
  },
  {
    img: assets.images.hat_1,
    title: 'hat_1',
    rows: 3,
    cols: 1
  },
  {
    img: assets.images.watches,
    title: 'watches',
    rows: 3,
    cols: 1
  }
];

export const humanFilter = [
  { id: 1, value: 'Women' },
  { id: 2, value: 'Ladies' },
  { id: 3, value: 'Girls' },
  { id: 4, value: 'Babies' }
];

export const brandFilter: Array<brandProps> = [
  { id: 1, value: 'H & M', slug: 'h&m' },
  { id: 2, value: 'Mark & Spencer', slug: 'mark&spencer' },
  { id: 3, value: "Victoria's Secret", slug: "victoria'ssecret" },
  { id: 4, value: 'Dior', slug: 'dior' },
  { id: 5, value: 'Gucci', slug: 'gucci' },
  { id: 6, value: 'Fendi', slug: 'fendi' },
  { id: 7, value: 'Prada', slug: 'prada' },
  { id: 8, value: 'Chanel', slug: 'chanel' },
  { id: 9, value: 'Versace', slug: 'versace' },
  { id: 10, value: 'Dolce & Gabbana', slug: 'delce&gabbana' },
  { id: 11, value: 'Zara', slug: 'zara' }
];

export const categoriesFilter: Array<categoryProps> = [
  { id: 1, value: 'Dresses', slug: 'dresses' },
  { id: 2, value: 'Tops', slug: 'tops' },
  { id: 3, value: 'Lingerie & Lounge Wear', slug: 'lingerie&loungewear' },
  { id: 4, value: 'Blouse', slug: 'blouse' },
  { id: 5, value: 'Vintage', slug: 'vintage' }
];

export const sizeFilter = [
  { id: 1, value: 'Medium', slug: 'M' },
  { id: 2, value: 'Large', slug: 'L' },
  { id: 3, value: 'Plus Size', slug: 'XL' },
  { id: 4, value: 'Sexy Plus Size', slug: 'XXL' }
];

export const colorLists = [
  {
    id: 1,
    name: 'Blue',
    haxValue: '#1B2437'
  },
  {
    id: 2,
    name: 'Green',
    haxValue: '#32E0C4'
  },
  {
    id: 3,
    name: 'Purple',
    haxValue: '#127681'
  },
  {
    id: 4,
    name: 'White',
    haxValue: '#FFFFFF'
  },
  {
    id: 5,
    name: 'Black',
    haxValue: '#000000'
  }
];
