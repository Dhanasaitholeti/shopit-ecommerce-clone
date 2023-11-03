import { useNavigate } from "react-router-dom";
import { PageButton, PaginationWrapper } from "./ui/Pagination.styled";

const Pagination: React.FC<{ pages: number; currentpage: number }> = ({
  pages,
  currentpage,
}) => {
  const navigate = useNavigate();

  const handlePageClick = (page: number) => {
    navigate(`?page=${page}`);
  };

  if (pages <= 1) return;

  const renderBtns = () => {
    const buttons = [];
    for (let i = 1; i <= pages; i++) {
      buttons.push(
        <PageButton
          isActive={currentpage == i}
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
