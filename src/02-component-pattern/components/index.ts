import { ProductCard as ProductCardHOc } from "./ProductCard";
import { ProductTitle } from "./ProductTitle";

// export { ProductCard } from './ProductCard';

import { ProductButtons } from "./ProductButtons";
import { ProductImage } from "./ProductImage";
import { ProductCardHOCprops } from "../interfaces/interfaces";

export { ProductTitle } from "./ProductTitle";
export { ProductButtons } from "./ProductButtons";
export { ProductImage } from "./ProductImage";

export const ProductCard:ProductCardHOCprops = Object.assign(ProductCardHOc, {
	Title: ProductTitle,
	Image: ProductImage,
	Buttons: ProductButtons
});

export default ProductCard;
