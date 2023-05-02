import styled from "styled-components";
import ProductBox from "./ProductBox";

export default function ProductsGrid({ products }) {
  const StyledProductsGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  `;

  return (
    <StyledProductsGrid>
      {products.map((product) => (
        <ProductBox key={product._id} {...product} />
      ))}
    </StyledProductsGrid>
  );
}
