export interface SelectedProductProps {
  id: number;
  productName: string;
  productImages: { id: number; productImage: string | undefined }[];
  productDescription: string;
  productOriginalPrice: number;
  productCurrentPrice: number;
  gender: number;
  human: number;
  category: number;
  brand: number;
  size: Array<Number>;
  color: Array<Number>;
  reviewRate: number;
  slug: string;
  selectedSize: number;
  selectedColor: number;
}

export interface productProps {
  id: number;
  productName: string;
  productImages: { id: number; productImage: string | undefined }[];
  productDescription: string[];
  productOriginalPrice: number;
  productCurrentPrice: number;
  gender: number;
  human: number;
  category: number;
  brand: number;
  size: Array<number>;
  color: Array<number>;
  reviewRate: number;
  slug: string;
}
export interface product {
  id: string;
  type: string;
  category: string;
  image: string;
  productName: string;
  price: string;
  cancelPrice: string;
}
export interface genderProps {
  id: number;
  value: string;
  slug: string;
}
export interface brandProps {
  id: number;
  value: string;
  slug: string;
}
export interface categoryProps {
  id: number;
  value: string;
  slug: string;
}

export interface productstate {
  Products: product[];
  ProductsList: productProps[];
  // filteredProducts: Array<Object>;
  filterByPrice: productProps[];
  filter: productProps[];
  filterByHuman: productProps[];
  filterBySize: productProps[];
  filterByCategory: productProps[];
  filterByBrand: productProps[];
  filteredGender: any;
  filteredCategory: any;
  fitleredBrand: any;
  gender: genderProps[];
  brand: brandProps[];
  category: categoryProps[];
  selectedProduct: SelectedProductProps | null;
  minValue: number;
  maxValue: number;
  mainArray: productProps[];
}
