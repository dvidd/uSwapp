import React, { Component } from "react";

import Info from "../Shared/Info";
import Card from "../Card/Card";
import Swap from "../Swap/Swap";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      swapId: "2"
    };
  }
  render() {
    return (
      <div className="container-fluid mt-5">
        <Info></Info>

        <div className="row">
          <div
            id="content mt-3"
            className="col-lg-12 ml-auto mr-auto"
            style={{ maxWidth: "600px" }}
          >
            {this.state.swapId == "" ? (
              <Card
                createNewSwap={this.props.createNewSwap}
                balance={this.props.balance}
              ></Card>
            ) : (
              <Swap></Swap>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
