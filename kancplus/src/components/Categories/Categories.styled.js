import styled from "styled-components";

export const Category = styled.div`
  div {
    display: inline-block;
    background: #f2f2f2;
    border-radius: 50px;
    padding: 10px;
    margin-bottom: 40px;
    margin-right: 15px;
    cursor: pointer;
    border: 1px solid transparent;
    transition: transform 400ms ease;
    &:hover,
    &:focus {
      border-color: silver;
      transform: scale(1.05);
    }
  }
`;
