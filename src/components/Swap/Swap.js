import React, { Component } from "react";

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      swap: this.props.swap
    };
  }
  // Check the status of the swap
  getSwapStatus(swap) {
    if (swap.done === true) {
      return (
        <span class="badge badge-pill badge-primary">
          Swapp done aprove by sender
        </span>
      );
    }
    if (swap.doneContractor === true) {
      return (
        <span class="badge badge-pill badge-primary">
          Swapp check as finish by reciver
        </span>
      );
    }
    if (
      swap.doneCreator === false &&
      swap.doneContractor === false &&
      swap.done === false
    ) {
      return <span class="badge badge-pill badge-primary">In progress</span>;
    }
  }
  render() {
    return (
      <div className="card mb-4">
        <div className="card-body">
          <div className="mb-3">
            <div>
              <label className="float-left">
                <b>Swap</b>
              </label>
              <h2 className="text-center" width="100%">
                {this.props.swap.ammount.toNumber()} ETH
              </h2>
              <br />
              <div className="row">
                <div className="col-5 addressSwap">
                  <label>From :</label>
                  <br />
                  <p>{this.props.swap.contractor}</p>
                </div>
                <div className="col-2 text-center arrowSwap">
                  <ion-icon name="arrow-forward-outline"></ion-icon>
                </div>
                <div className="col-5 addressSwap">
                  <label>To :</label> <br />
                  <p>{this.props.swap.contractor}</p>
                </div>
              </div>
              <p>{this.props.swap.description}</p>
            </div>
            <div className="row">
              <div className="col-5">
                <ion-icon name="checkmark-circle-outline"></ion-icon>
                <ion-icon name="close-circle-outline"></ion-icon>
              </div>
              <div className="col-2"></div>
              <div className="col-5">{this.getSwapStatus(this.props.swap)}</div>
            </div>
            <br />
          </div>
        </div>
      </div>
    );
  }
}

export default Button;
