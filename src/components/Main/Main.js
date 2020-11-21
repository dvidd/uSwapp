import React, { Component } from "react";

import Info from "../Shared/Info";
import Card from "../Card/Card";

class Main extends Component {
  render() {
    return (
      <div className="container-fluid mt-5">
        <Info></Info>
        <Card
          createNewSwap={this.props.createNewSwap}
          balance={this.props.balance}
        ></Card>
      </div>
    );
  }
}

export default Main;
