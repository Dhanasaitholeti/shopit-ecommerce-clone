import ProductCard from "./ProductCard";
import { ProductsWrapper } from "./ui/Product.styles";
import { products } from "../config/data";

const Products = () => {
  return (
    <>
      <ProductsWrapper>
        <h1>All Products</h1>
        <div>
          {products.map((entry) => (
            <ProductCard product={entry} />
          ))}
        </div>
      </ProductsWrapper>
    </>
  );
};

export default Products;
