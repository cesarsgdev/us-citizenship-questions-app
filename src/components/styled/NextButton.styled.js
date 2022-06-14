import styled from "styled-components";

export const NextButton = styled.button`
  font-size: 18px;
  letter-spacing: -0.5px;
  padding: 15px 50px;
  /* background: rgb(170, 170, 170); */
  background: ${({ active }) => (active ? "red" : `rgb(170,170,170)`)};
  /* color: #000; */
  color: ${({ active }) => (active ? "#FFF" : `#000`)};
  border: none;
  border-radius: 3px;
  cursor: pointer;
  transition: 0.5s;
  align-self: flex-end;
`;
