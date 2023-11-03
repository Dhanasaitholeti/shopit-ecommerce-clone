import { PageButton, PaginationWrapper } from "./ui/Pagination.styled";

const Pagination: React.FC<{ pages: number }> = ({ pages }) => {
  const renderBtns = () => {
    const buttons = [];
    for (let i = 1; i <= pages; i++) {
      buttons.push(<PageButton key={i}>{i}</PageButton>);
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
