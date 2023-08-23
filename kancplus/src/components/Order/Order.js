import React, { Component } from "react";
import { Item, ImgCard, DeleteIcon } from "./Order.styled";

export class Order extends Component {
  render() {
    return (
      <Item>
        <ImgCard src={this.props.item.img} alt="{this.props.item.title}" />
        <h2>{this.props.item.title}</h2>
        <p>{this.props.item.price} грн</p>
        <DeleteIcon onClick={() => this.props.onDelete(this.props.item.id)} />
      </Item>
    );
  }
}

export default Order;
