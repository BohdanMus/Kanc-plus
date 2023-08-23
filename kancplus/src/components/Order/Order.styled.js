import { styled } from "styled-components";
import { FaTrash } from "react-icons/fa";

export const Item = styled.div`
  width: 100%;
  float: left;
  margin-bottom: 20px;
  h2 {
    font-size: 20px;
    margin-bottom: 10px;
  }
  p {
    color: #797979;
    font-weight: 600;
  }
`;

export const ImgCard = styled.img`
  width: 70px;
  float: left;
  margin-right: 20px;
  background-color: transparent;
`;

export const DeleteIcon = styled(FaTrash)`
  color: #ca5252;
  float: right;
  position: relative;
  top: -25px;
  cursor: pointer;
  transition: color, transform 400ms ease;
  &:hover,
  &:focus {
    color: #d83030;
    transform: scale(1.5);
  }
`;
