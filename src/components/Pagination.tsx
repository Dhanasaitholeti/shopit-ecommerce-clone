import { useLocation, useNavigate } from "react-router-dom";
import { PageButton, PaginationWrapper } from "./ui/Pagination.styled";

const Pagination: React.FC<{ pages: number }> = ({ pages }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const queryparams = new URLSearchParams(location.search);

  const page = queryparams.get("page");

  const handlePageClick = (page: number) => {
    navigate(`?page=${page}`);
  };

  if (pages <= 1) return;

  const renderBtns = () => {
    const buttons = [];
    for (let i = 1; i <= pages; i++) {
      buttons.push(
        <PageButton
          isActive={(page && parseInt(page)) == i}
          key={i}
          onClick={() => handlePageClick(i)}
        >
          {i}
        </PageButton>
      );
    }
    return buttons;
  };

  return (
    <>
      <PaginationWrapper>{renderBtns()}</PaginationWrapper>
    </>
  );
};

export default Pagination;
