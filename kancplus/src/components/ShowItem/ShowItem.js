import { FiShoppingCart } from "react-icons/fi";
import React, { Component } from "react";
import {
  ImgCard,
  AddToCard,
  CardGoods,
  FullItem,
  ModalItem,
} from "./ShowItem.styled";

export class ShowItem extends Component {
  render() {
    return (
      <FullItem>
        <ModalItem>
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
        </ModalItem>
      </FullItem>
    );
  }
}

export default ShowItem;
