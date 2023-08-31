import React, { Component } from "react";
import { Category } from "./Categories.styled";

export class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        { key: "all", name: "Усі товари" },
        { key: "Письмові прилади", name: "Письмові прилади" },
        { key: "Паперова продукція", name: "Паперова продукція" },
        { key: "Малювання", name: "Малювання" },
        { key: "Органайзери", name: "Органайзери" },
        { key: "Гумки", name: "Гумки" },
        { key: "Рюкзаки", name: "Рюкзаки" },
      ],
    };
  }
  render() {
    return (
      <Category>
        {this.state.categories.map((e) => (
          <div key={e.key} onClick={() => this.props.chooseCategory(e.key)}>
            {e.name}
          </div>
        ))}
      </Category>
    );
  }
}

export default Categories;
