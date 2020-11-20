import React, { Component } from "react";

import Info from "../Shared/Info";
import Card from "../Card/Card";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ammount: 0,
      addres: 0x0,
      balance: 1,
      title: "",
      description: ""
    };
  }

  render() {
    return (
      <div className="container-fluid mt-5">
        <Info></Info>
        <Card balance={this.props.balance}></Card>
      </div>
    );
  }
}

export default Main;
