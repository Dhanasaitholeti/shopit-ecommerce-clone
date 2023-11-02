import {
  AddToCartButton,
  ProductImage,
  ProductPrice,
  ProductTitle,
  Productcard,
} from "./ui/Product.styles";
import { products } from "../config/data";
const ProductCard = () => {
  return (
    <>
      <Productcard>
        <ProductImage src={products[0].Image_URL} />
        <ProductTitle>{products[0].Title}</ProductTitle>
        <ProductPrice>{products[0].Price}</ProductPrice>
        <AddToCartButton>Add to Cart</AddToCartButton>
      </Productcard>
    </>
  );
};

export default ProductCard;
