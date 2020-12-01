import React, { Component } from "react";

import CreationCard from "../CreationCard/CreationCard";
import Swap from "../Swap/Swap";
import SwapSearch from "../SwapSearch/SwapSearch";
import Info from "../../components/Shared/Info";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      create: true // for more quick develop in the interface (( take this offf ))
    };
  }
  changeCard() {
    this.setState({ create: !this.state.create });
  }

  renderSwap() {
    const swap = this.props.swap;
    if (swap !== undefined && swap !== null) {
      return (
        <div>
          <Swap
            id={this.props.id}
            account={this.props.account}
            swap={swap}
            validSwap={this.props.validSwap}
          />
        </div>
      );
    }
  }

  renderCard() {
    const create = this.state.create;
    if (create) {
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
    if (this.state.create) {
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
            {this.renderCard()}
          </div>
        </div>
        {/* element for changing between views  */}
        {this.returnCardChanger()}
        <span>{this.props.latestID}</span>
      </div>
    );
  }
}

export default Main;
