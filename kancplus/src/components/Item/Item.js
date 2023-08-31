import React, { Component } from "react";
import { CardGoods, ImgCard, AddToCard } from "./Item.styled";
import { FiShoppingCart } from "react-icons/fi";

export class Item extends Component {
  render() {
    return (
      <CardGoods>
        <ImgCard
          // src={"./img/" + this.props.item.img}
          src={this.props.item.img}
          alt="{this.props.item.title}"
          onClick={() => this.props.onShowItem(this.props.item)}
        />
        <h2>{this.props.item.title}</h2>
        <p>{this.props.item.desc}</p>
        <b>{this.props.item.price} грн</b>
        <AddToCard onClick={() => this.props.onAdd(this.props.item)}>
          <FiShoppingCart />
        </AddToCard>
      </CardGoods>
    );
  }
}

export default Item;
