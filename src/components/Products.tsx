import ProductCard from "./ProductCard";
import { ProductsWrapper } from "./ui/Product.styles";
import { products } from "../config/data";
import { useLocation } from "react-router-dom";
import Pagination from "./Pagination";

const Products = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const category = queryParams.getAll("category");
  const pages = queryParams.getAll("page");
  console.log(pages);
  console.log(category);

  let newlist;

  if (category.length < 1) newlist = products;
  else {
    newlist = products.filter((entry) => entry.Category == category[0]);
  }

  const currentPage = pages.length > 0 ? parseInt(pages[0]) : 1;
  const productsPerPage = 12;

  // Calculate the start and end indices for the current page
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;

  // Slice 'newlist' to get the products for the current page
  const productsForPage = newlist.slice(startIndex, endIndex);

  return (
    <>
      <ProductsWrapper>
        <h1>{category.length < 1 ? "All" : category[0]} Products</h1>
        <div>
          {productsForPage.map((entry) => (
            <ProductCard product={entry} key={entry.Product_ID} />
          ))}
        </div>
      </ProductsWrapper>
      <div>
        <Pagination pages={newlist.length / 12} />
      </div>
    </>
  );
};

export default Products;
