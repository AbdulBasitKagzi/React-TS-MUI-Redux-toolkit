import fullbodyoutfit from "../assets/images/fullbodyoutfit.png";
import blacksemiformal from "../assets/images/blacksemiformal.png";
import oceanbluefullsleeved from "../assets/images/oceanbluefullsleeved.png";
import redbuttonsweater from "../assets/images/redbuttonedsweater.png";
import shirt_1 from "../assets/images/shirt-1.jpg";
import shirt_2 from "../assets/images/shirt-2.webp";
import shirt_3 from "../assets/images/shirt-3.webp";
import shirt_4 from "../assets/images/shirt-4.jpg";
import shoes_1 from "../assets/images/shoes-1.png";
import shoes_2 from "../assets/images/shoes-2.png";
import shoes_3 from "../assets/images/shoes-3.png";
import shoes_4 from "../assets/images/shoes-4.png";
import summer from "../assets/images/summer.png";
import sunglasses from "../assets/images/sunglasses.png";
import footwear from "../assets/images/footwear.png";
import hat_1 from "../assets/images/hat_1.png";
import watches from "../assets/images/watches.png";

export const newArrival = [
  {
    id: "b/w",
    image: fullbodyoutfit,
    title: "B/W Full Body Outfit",
    subTitle: "Jumper set for Women",
    price: "$89",
  },
  {
    id: "balcksemiformal",
    image: blacksemiformal,
    title: "Black Semi-Formal Coat",
    subTitle: "Coat for Women",
    price: "$159",
  },
  {
    id: "oceanblue",
    image: oceanbluefullsleeved,
    title: "Ocean Blue Fullsleeved",
    subTitle: "Denim Jacket for Men",
    price: "$79",
  },
  {
    id: "redbuttonedsweater",
    image: redbuttonsweater,
    title: "Red Buttoned Sweater",
    subTitle: "Sweater for Men",
    price: "$89",
  },
];

export const person_tabs = [
  {
    id: "forwomen",
    value: "For Women",
  },
  {
    id: "formen",
    value: "For men",
  },
];

export const product_tabs = [
  {
    id: "tShirt",
    value: "T-Shirt",
  },
  {
    id: "shirt",
    value: "Shirt",
  },
  {
    id: "shoes",
    value: "Shoes",
  },
  {
    id: "watch",
    value: "Watch",
  },
  {
    id: "sunglasses",
    value: "Sunglasses",
  },
  {
    id: "bagpack",
    value: "Bagpacks",
  },
];

export const products = [
  {
    id: "shirt-1",
    type: "shirt",
    category: "men",
    image: shirt_1,
    productName: "shirt",
    price: "$100",
    cancelPrice: "$200",
  },
  {
    id: "shirt-2",
    type: "shirt",
    category: "men",
    image: shirt_2,
    productName: "shirt",
    price: "$100",
    cancelPrice: "$200",
  },
  {
    id: "shirt-3",
    type: "shirt",
    category: "men",
    image: shirt_3,
    productName: "shirt",
    price: "$100",
    cancelPrice: "$200",
  },
  {
    id: "shirt-4",
    type: "shirt",
    category: "men",
    image: shirt_4,
    productName: "shirt",
    price: "$100",
    cancelPrice: "$200",
  },
  // shoes
  {
    id: "shoes-1",
    type: "shoes",
    category: "men",
    image: shoes_1,
    productName: "shoes",
    price: "$300",
    cancelPrice: "$400",
  },
  {
    id: "shoes-2",
    type: "shoes",
    category: "men",
    image: shoes_2,
    productName: "shoes",
    price: "$300",
    cancelPrice: "$400",
  },
  {
    id: "shoes-3",
    type: "shoes",
    category: "men",
    image: shoes_3,
    productName: "shoes",
    price: "$300",
    cancelPrice: "$400",
  },
  {
    id: "shoes-4",
    type: "shoes",
    category: "men",
    image: shoes_4,
    productName: "shoes",
    price: "$300",
    cancelPrice: "$400",
  },
];

export const Image_Lsit = [
  {
    img: summer,
    title: "Breakfast",
    rows: 6,
    cols: 2,
  },
  {
    img: sunglasses,
    title: "sunglasses",
    rows: 3,
    cols: 1,
  },
  {
    img: footwear,
    title: "footwear",
    rows: 3,
    // cols: 1,
  },
  {
    img: hat_1,
    title: "hat_1",
    rows: 3,
    cols: 1,
  },
  {
    img: watches,
    title: "watches",
    rows: 3,
    cols: 1,
  },
];

export const humanFilter = [
  { id: "women", value: "Women" },
  { id: "ladies", value: "Ladies" },
  { id: "girls", value: "Girls" },
  { id: "babies", value: "Babies" },
];

export const brandFilter = [
  { id: "h&m", value: "H & M" },
  { id: "mark&spencer", value: "Mark & Spencer" },
  { id: "victoria'ssecret", value: "Victoria's Secret" },
  { id: "dior", value: "Dior" },
  { id: "gucci", value: "Gucci" },
  { id: "fendi", value: "Fendi" },
  { id: "prada", value: "Prada" },
  { id: "chanel", value: "Chanel" },
  { id: "versace", value: "Versace" },
  { id: "dolce&gabbana", value: "Dolce & Gabbana" },
  { id: "zara", value: "Zara" },
];

export const categoriesFilter = [
  { id: "dresses", value: "Dresses" },
  { id: "tops", value: "Tops" },
  { id: "lingerie&loungewear", value: "Lingerie & Lounge Wear" },
  { id: "blouse", value: "Blouse" },
  { id: "vintage", value: "Vintage" },
];

export const sizeFilter = [
  { id: "Medium", value: "Medium" },
  { id: "Large", value: "Large" },
  { id: "Plus Size", value: "Plus Size" },
  { id: "Sexy Plus Size", value: "Sexy Plus Size" },
];
