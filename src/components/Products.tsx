import ProductCard from "./ProductCard";
import {
  CardWrapper,
  FilterWrapper,
  ProductsWrapper,
  SelectWrapper,
} from "./ui/Product.styles";
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
        <FilterWrapper>
          <SelectWrapper>
            <option value="h-l" selected>
              high to low
            </option>
            <option value="l-h">low to high</option>
          </SelectWrapper>
          <SelectWrapper>
            <option value="Clothing">clothing</option>
            <option value="Electronics">electronics</option>
            <option value="Appliances">appliances</option>
            <option value="Grocery">grocery</option>
            <option value="Toys">toys</option>
          </SelectWrapper>
        </FilterWrapper>
        <CardWrapper>
          {productsForPage.map((entry) => (
            <ProductCard product={entry} key={entry.Product_ID} />
          ))}
        </CardWrapper>
        <div>
          <Pagination pages={newlist.length / 12} currentpage={currentPage} />
        </div>
      </ProductsWrapper>
    </>
  );
};

export default Products;
