import React, { Component } from "react";

import Info from "../Shared/Info";
import Card from "../Card/Card";
import List from "../SwapList/List";

class Main extends Component {
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
            <Card
              createNewSwap={this.props.createNewSwap}
              balance={this.props.balance}
            ></Card>
            {/* <List></List> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
