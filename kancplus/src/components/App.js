import React from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import { Wrapper } from "./Header/Header.styled";
import Items from "./Items/Items";
import data from "./data.json";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      items: data,
    };

    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
  }
  render() {
    return (
      <Wrapper>
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Items items={this.state.items} onAdd={this.addToOrder} />
        <Footer />
      </Wrapper>
    );
  }

  deleteOrder(id) {
    this.setState({
      orders: this.state.orders.filter((order) => order.id !== id),
    });
  }

  addToOrder(item) {
    let isInArray = false;
    this.state.orders.forEach((el) => {
      if (el.id === item.id) isInArray = true;
    });
    if (!isInArray) this.setState({ orders: [...this.state.orders, item] });
  }
}

export default App;
