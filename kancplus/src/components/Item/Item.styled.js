import { styled } from "styled-components";

export const CardGoods = styled.div`
  position: relative;

  padding: 20px;
  width: 20%;
  margin-bottom: 50px;
  border: grey solid 2px;
  border-radius: 16px;
  overflow: hidden;
  transition: transform 400ms ease;
  &:hover,
  &:focus {
    transform: scale(1.05);
    /* cursor: pointer; */
  }
  h2,
  p {
    margin: 10px 20px;
    color: #333;
  }
  b {
    margin: 10px 20px;
    color: #5fa35f;
  }
`;

export const ImgCard = styled.img`
  width: 100%;
  border-radius: 16px 16px 0px 0px;
`;

export const AddToCard = styled.div`
  position: absolute;
  right: 20px;
  bottom: 20px;
  background: #ca5252;
  width: 35px;
  height: 35px;
  text-align: center;
  line-height: 40px;
  color: #fff;
  border-radius: 50%;
  cursor: pointer;
  font-weight: 600;
  transition: transform 400ms ease;
  &:hover,
  &:focus {
    transform: scale(1.5) translateY(-5px);
  }
`;
