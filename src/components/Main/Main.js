import React, { Component } from "react";

import Info from "../Shared/Info";
import CreationCard from "../CreationCard/CreationCard";
import Swap from "../Swap/Swap";
import SwapSearch from "../SwapSearch/SwapSearch";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      swapId: "",
      create: true
    };
  }
  changeCard() {
    this.setState({ create: !this.state.create });
  }

  renderSwap() {
    const swap = this.props.swap;
    if (swap !== undefined) {
      return (
        <div>
          <Swap swap={swap} />
        </div>
      );
    }
  }

  renderCard() {
    const create = this.state.create;
    if (create === true) {
      return (
        <CreationCard
          createNewSwap={this.props.createNewSwap}
          balance={this.props.balance}
        />
      );
    } else {
      return (
        <div>
          {this.renderSwap()}
          <SwapSearch getSwap={this.props.getSwap} />
        </div>
      );
    }
  }

  returnCardChanger() {
    if (this.state.create === true) {
      return (
        <h5 className="changeCardtext" onClick={() => this.changeCard()}>
          <ion-icon name="search-outline"></ion-icon> Search for a Swap
        </h5>
      );
    } else {
      return (
        <h5 className="changeCardtext" onClick={() => this.changeCard()}>
          <ion-icon name="add-circle-outline"></ion-icon> Create a new Swap
        </h5>
      );
    }
  }

  render() {
    return (
      <div className="container-fluid mt-5">
        <Info />
        <div className="row">
          <div
            id="content mt-3"
            className="col-lg-12 ml-auto mr-auto"
            style={{ maxWidth: "600px" }}
          >
            {/* Render Card of creation or search/swap */}
            {this.renderCard()}
          </div>
        </div>
        {/* element for changing between views  */}
        {this.returnCardChanger()}
      </div>
    );
  }
}

export default Main;
