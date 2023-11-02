import styled from "styled-components";

export const ProductsWrapper = styled.div`
  h1 {
    font-size: larger;
    opacity: 0.8;
    font-weight: 600;
  }
  div {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
`;

export const Productcard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 320px;
  border: 1px solid #e1e1e1;
  border-radius: 8px;
  padding: 16px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-4px);
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  aspect-ratio: 1/1;
  max-width: 300px;
  object-position: center;
`;

export const ProductTitle = styled.h3`
  font-size: 1.2rem;
  margin: 8px 0;
`;

export const ProductPrice = styled.span`
  font-size: 1.1rem;
  font-weight: 600;
  color: #f00; /* Change the color to your preference */
`;

export const AddToCartButton = styled.button`
  background-color: #007bff; /* Change the color to your preference */
  color: #fff;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #0056b3; /* Change the color to your preference */
  }
`;
