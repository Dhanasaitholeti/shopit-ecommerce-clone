import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Para,
  SectionsWrapper,
  SidebarWrapper,
} from "./ui/Sidebar.styles";
import queryString from "query-string";

const SideBar = () => {
  const navigate = useNavigate();

  // const queryparams = new URLSearchParams(location.search);
  // console.log(queryparams.getAll("category"));
  // // const currentCategory = queryparams.get("category");

  interface paramsType {
    category: string | null;
    price: string | null;
  }

  const [queryparams, setQueryParams] = useState<paramsType>({
    category: null,
    price: null,
  });

  const handleOnChange = (type: string, val: string | null) => {
    setQueryParams((prevQueryParams) => ({
      ...prevQueryParams,
      [type]: val,
    }));

    const stringifiedParams = queryString.stringify({
      ...queryparams,
      [type]: val,
    });

    navigate(`/?${stringifiedParams}`);
  };

  console.log(queryparams);

  return (
    <>
      <SidebarWrapper>
        <h3>Category:</h3>
        <SectionsWrapper>
          <Para onClick={() => handleOnChange("category", "Clothing")}>
            Clothing
          </Para>

          <Para onClick={() => handleOnChange("category", "Electronics")}>
            Electronics
          </Para>
          <Para onClick={() => handleOnChange("category", "Appliances")}>
            Appliances
          </Para>
          <Para onClick={() => handleOnChange("category", "Grocery")}>
            Grocery
          </Para>
          <Para onClick={() => handleOnChange("category", "Toys")}>Toys</Para>
        </SectionsWrapper>
        <h3>Price:</h3>
        <SectionsWrapper>
          <Para onClick={() => handleOnChange("price", "low-high")}>
            Low to High
          </Para>
          <Para onClick={() => handleOnChange("price", "high-low")}>
            High to Low
          </Para>
        </SectionsWrapper>
        <SectionsWrapper>
          <Button
            onClick={() => {
              handleOnChange("price", null);
              handleOnChange("category", null);
              navigate("/");
            }}
          >
            clear filters
          </Button>
        </SectionsWrapper>
      </SidebarWrapper>
    </>
  );
};

export default SideBar;
