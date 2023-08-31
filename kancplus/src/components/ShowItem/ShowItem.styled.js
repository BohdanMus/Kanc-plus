import { styled } from "styled-components";

export const FullItem = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rbg(0, 0, 0, 0.8);
  z-index: 9999;
  overflow: auto;
`;

export const ModalItem = styled.div`
  width: 600px;
  position: relative;
  margin: 10px auto;
  padding: 40px 30px;
  background: #fff;
  border-radius: 16px;
`;
export const CardGoods = styled.div`
  position: relative;
  padding: 20px;
  border: grey solid 2px;
  border-radius: 16px;
  overflow: hidden;
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
