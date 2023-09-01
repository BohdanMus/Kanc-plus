import styled from "styled-components";
import banner from "../../path/image/top-view-school-items-arrangement.jpg";
import { FiShoppingCart } from "react-icons/fi";

export const Wrapper = styled.div`
  width: 1280px;
  margin: 50px auto;
`;
export const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Presentation = styled.div`
  margin: 50px 0;
  background-image: url(${banner});
  width: 100%;
  height: 400px;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 16px;
  /* background-position: center center; */
`;

export const List = styled.ul`
  /* float: right; */
  align-items: center;
  display: flex;
`;

export const ItemNav = styled.li`
  display: inline;
  margin-left: 24px;
  cursor: pointer;
  transition: opacity 400ms ease;
  &:hover,
  &:focus {
    opacity: 0.5;
  }
`;

export const Svg = styled(FiShoppingCart)`
  float: right;
  cursor: pointer;
  transition: color, transform 400ms ease;
  &:hover,
  &:focus {
    color: #dc3d3d;
  }
`;

export const Soma = styled.p`
  float: left;
  width: 100%;
  font-weight: 600;
  font-size: 20px;
  margin-bottom: 20px;
`;

export const Empty = styled.div`
  h2 {
    font-size: 20px;
    margin-bottom: 20px;
  }
`;
