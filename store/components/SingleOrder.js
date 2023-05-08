import { primary } from "@/lib/colors";
import styled from "styled-components";

const StyledOrder = styled.div`
  margin: 10px 0;
  padding: 10px 0;
  border-bottom: 1px solid #ddd;
  display: flex;
  gap: 20px;
  align-items: center;
  time {
    font-size: 1rem;
    color: #555;
  }
`;
const ProductRow = styled.div`
  margin-left: 2rem;
  span {
    color: #000;
  }
`;
const Address = styled.div`
  font-size: 0.8rem;
  line-height: 1rem;
  margin-top: 5px;
  color: #888;
`;

const Status = styled.div`
  color: ${primary};
`;

export default function SingleOrder({ line_items, createdAt, ...rest }) {
  return (
    <StyledOrder>
      <div>
        <time>{new Date(createdAt).toLocaleString("en-SG")}</time>
        <Address>
          Name: {rest.name}
          <br />
          Email: {rest.email}
          <br />
          Address: {rest.streetAddress}, {rest.country}
          <br />
          Postal Code: {rest.city} ({rest.postalCode})
          <br />
          <Status>Order Status: {rest.status}</Status>
        </Address>
      </div>
      <div>
        {line_items.map((item) => (
          <ProductRow key={item.price_data.product_data.name}>
            <span>{item.quantity} x </span>
            {item.price_data.product_data.name}
          </ProductRow>
        ))}
      </div>
    </StyledOrder>
  );
}
