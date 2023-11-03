import { useLocation, useNavigate } from "react-router-dom";
import { FilterWrapper, SelectWrapper } from "./ui/Product.styles";
import { useState } from "react";
import queryString from "query-string";
import { Button } from "./ui/Sidebar.styles";

const FilterSection = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);

  const category = queryParams.getAll("category");
  const price = queryParams.getAll("price");

  interface paramsType {
    category: string | null;
    price: string | null;
  }

  const [queryparams, setQueryParams] = useState<paramsType>({
    category: null,
    price: "high-low",
  });

  const handleOnChange = (type: string, val: string | null) => {
    setQueryParams({
      ...queryparams,
      [type]: val,
    });

    const stringifiedParams = queryString.stringify({
      ...queryparams,
      [type]: val,
    });

    navigate(`/?${stringifiedParams}`);
  };

  return (
    <FilterWrapper>
      <SelectWrapper onChange={(e) => handleOnChange("price", e.target.value)}>
        <option value="">select</option>
        <option value="high-low" selected={price[0] === "high-low"}>
          high to low
        </option>
        <option value="low-high" selected={price[0] === "low-high"}>
          low to high
        </option>
      </SelectWrapper>
      <SelectWrapper
        onChange={(e) => handleOnChange("category", e.target.value)}
      >
        <option value="null">All</option>
        <option value="Clothing" selected={category[0] === "Clothing"}>
          clothing
        </option>
        <option value="Electronics" selected={category[0] === "Electronics"}>
          electronics
        </option>
        <option value="Appliances" selected={category[0] === "Appliances"}>
          appliances
        </option>
        <option value="Grocery" selected={category[0] === "Grocery"}>
          grocery
        </option>
        <option value="Toys" selected={category[0] === "Toys"}>
          toys
        </option>
      </SelectWrapper>

      <Button
        onClick={() => {
          handleOnChange("price", null);
          handleOnChange("category", null);
          navigate("/");
        }}
      >
        clear filters
      </Button>
    </FilterWrapper>
  );
};

export default FilterSection;
