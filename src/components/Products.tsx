import ProductCard from "./ProductCard";
import { CardWrapper, ProductsWrapper } from "./ui/Product.styles";
import { products } from "../config/data";
import { useLocation } from "react-router-dom";
import Pagination from "./Pagination";
import FilterSection from "./FilterSection";
import { PaginationContainer } from "./ui/Pagination.styled";

const Products = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const category = queryParams.getAll("category");
  const price = queryParams.getAll("price");
  const pages = queryParams.getAll("page");

  let filteredProducts = [...products];

  if (category[0] != "")
    if (category.length > 0) {
      filteredProducts = filteredProducts.filter(
        (product) => product.Category === category[0]
      );
    }

  if (price.length > 0) {
    if (price[0] === "low-high") {
      filteredProducts.sort((a, b) => a.Price - b.Price);
    } else if (price[0] === "high-low") {
      filteredProducts.sort((a, b) => b.Price - a.Price);
    }
  }

  const currentPage = pages.length > 0 ? parseInt(pages[0]) : 1;
  const productsPerPage = 12;

  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;

  const productsForPage = filteredProducts.slice(startIndex, endIndex);

  return (
    <>
      <ProductsWrapper>
        <h1>
          {category.length > 0 ? category[0] : "All"} Products
          {price.length > 0 &&
            ` - ${price[0] === "low-high" ? "Low to High" : "High to Low"}`}
        </h1>

        <FilterSection />

        <CardWrapper>
          {productsForPage.map((product) => (
            <ProductCard product={product} key={product.Product_ID} />
          ))}
        </CardWrapper>

        <PaginationContainer>
          <Pagination
            pages={filteredProducts.length / 12}
            currentpage={currentPage}
          />
        </PaginationContainer>
      </ProductsWrapper>
    </>
  );
};

export default Products;
