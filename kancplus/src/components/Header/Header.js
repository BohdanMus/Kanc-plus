import React, { useState } from "react";
import mySvg from "../../path/image/logo_kp.png";
import {
  Presentation,
  List,
  ItemNav,
  Svg,
  Nav,
  Empty,
  Soma,
} from "./Header.styled.js";
import Order from "../Order/Order";

const showOrders = (props) => {
  let soma = 0;
  props.orders.forEach((e) => (soma += Number.parseFloat(e.price)));
  return (
    <div>
      {props.orders.map((el) => (
        <Order onDelete={props.onDelete} key={el.id} item={el} />
      ))}
      <Soma>Сума: {new Intl.NumberFormat().format(soma)} грн</Soma>
    </div>
  );
};

const showNothing = () => {
  return (
    <Empty>
      <h2>Товарів не має</h2>
    </Empty>
  );
};

const Header = (props) => {
  let [cartOpen, setcartOpen] = useState(false);
  return (
    <header>
      <Nav>
        <img src={mySvg} alt="Kanc Plus" width={120} height={120} />
        <List>
          <ItemNav>Про нас</ItemNav>
          <ItemNav>Контакти</ItemNav>
          <ItemNav>Кабінет</ItemNav>
        </List>
        <Svg
          onClick={() => setcartOpen((cartOpen = !cartOpen))}
          className={`shop-cart-button ${cartOpen && "active"}`}
        />
        {cartOpen && (
          <div className="shop-cart">
            {props.orders.length > 0 ? showOrders(props) : showNothing()}
          </div>
        )}
      </Nav>
      <Presentation></Presentation>
    </header>
  );
};

export default Header;
