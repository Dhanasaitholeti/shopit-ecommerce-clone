import ProductCard from "./ProductCard";
import { ProductsWrapper } from "./ui/Product.styles";

const Products = () => {
  return (
    <>
      <ProductsWrapper>
        <h1>All Products</h1>
        <div>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </ProductsWrapper>
    </>
  );
};

export default Products;
