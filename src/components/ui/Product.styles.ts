import styled from "styled-components";

export const ProductsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  h1 {
    font-size: larger;
    opacity: 0.8;
    font-weight: 600;
  }
`;

export const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
  height: fit-content;
  margin-bottom: 5%;
  place-items: center;
  @media screen and (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2%;
  }
  @media screen and (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const Productcard = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  max-height: 300px;
  aspect-ratio: 1/1;
  border: 1px solid #e1e1e1;
  border-radius: 8px;
  padding: 16px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-4px);
  }

  @media screen and (min-width: 460px) {
    width: 250px;
  }

  @media screen and (min-width: 726px) {
    width: 300px;
  }
  @media screen and (min-width: 900px) {
    width: 280px;
  }
  @media screen and (min-width: 1300px) {
    max-width: 320px;
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  aspect-ratio: 1/1;
  max-width: 250px;
  object-position: center;
`;

export const ProductTitle = styled.h3`
  font-size: 0.9rem;
  margin: 8px 0;
  @media screen and (min-width: 726px) {
    font-size: 1rem;
  }
`;

export const ProductPrice = styled.span`
  font-size: 0.95rem;
  font-weight: 600;
  color: #f00; /* Change the color to your preference */
  @media screen and (min-width: 726px) {
    font-size: 1rem;
  }
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

export const FilterWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 5%;
  padding: 0 5%;

  @media screen and (min-width: 900px) {
    display: none;
  }
`;

export const SelectWrapper = styled.select`
  min-width: 30%;
  height: 30px;
  border-radius: 15px;
  padding: 0 10px;
`;
