import {
  AddToCartButton,
  ProductImage,
  ProductPrice,
  ProductTitle,
  Productcard,
  Text,
} from "./ui/Product.styles";
import { productType } from "../config/types";

interface propsType {
  product: productType;
}

const ProductCard: React.FC<propsType> = ({ product }) => {
  return (
    <>
      <Productcard>
        <ProductImage src={product.Image_URL} />
        <ProductTitle>{product.Title}</ProductTitle>
        <Text>{product.short_description}</Text>
        <ProductPrice>{`\u20B9${product.Price}`}</ProductPrice>
        <AddToCartButton>Add to Cart</AddToCartButton>
      </Productcard>
    </>
  );
};

export default ProductCard;
