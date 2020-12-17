import React, { Component } from "react";

import CreationCard from "../CreationCard/CreationCard";
import Info from "../../components/Shared/Info";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  returnInfo() {
    if (this.props.noWallet) {
      return <Info />;
    }
  }

  render() {
    return (
      <div className="container-fluid mt-5">
        {this.returnInfo()}
        <div className="row">
          <div
            id="content mt-3"
            className="col-lg-12 ml-auto mr-auto"
            style={{ maxWidth: "600px" }}
          >
            {/* Render Card of creation or search/swap */}
            <CreationCard
              createNewSwap={this.props.createNewSwap}
              balance={this.props.balance}
            />
          </div>
        </div>
        {/* element for changing between views  */}
        <span>{this.props.latestID}</span>
      </div>
    );
  }
}

export default Main;
