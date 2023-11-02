import ProductCard from "./ProductCard";
import { ProductsWrapper } from "./ui/Product.styles";
import { products } from "../config/data";
import { useLocation } from "react-router-dom";

const Products = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const category = queryParams.getAll("category");
  console.log(category);

  let newlist;

  if (category.length < 1) newlist = products;
  else {
    newlist = products.filter((entry) => entry.Category == category[0]);
  }

  return (
    <>
      <ProductsWrapper>
        <h1>All Products</h1>
        <div>
          {newlist.map((entry) => (
            <ProductCard product={entry} key={entry.Product_ID} />
          ))}
        </div>
      </ProductsWrapper>
    </>
  );
};

export default Products;
