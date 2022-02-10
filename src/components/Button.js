import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  padding: 0.375rem 0.75rem;
  border-radius: 0.25rem;
  font-size: 1rem;
  line-height: 1.5;
  border: 1px solid lightgray;
  color: gray;
  backgroud: white;
`;

function Button({ children }) {
  return <StyledButton>{children}</StyledButton>;
}
export default Button;