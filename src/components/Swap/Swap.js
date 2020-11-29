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
        <span className="badge badge-pill badge-primary">
          Swapp check as finish by reciver
        </span>
      );
    }
    if (
      swap.doneCreator === false &&
      swap.doneContractor === false &&
      swap.done === false
    ) {
      return (
        <span className="badge badge-pill badge-primary">In progress</span>
      );
    }
  }

  // Validity button for validation of the Swap, this is mere for not confuse but displaying the user
  // could not validity if is not involve (the front end dont matter )
  renderValidityButton() {
    const address = this.props.account;
    if (
      address === this.props.swap.contractor ||
      address === this.props.swap.creator
    ) {
      return (
        <div>
          <div class="btn btn-primary">
            <ion-icon name="checkmark-circle-outline"></ion-icon> Mark as valid
          </div>
          <div className="informativeText">
            <ion-icon
              className="infoIcon"
              name="help-circle-outline"
            ></ion-icon>
            <a className="infotext d-none" id="infoText">
              When the two parties validate the swapp, the money is sent to the
              receiver
            </a>
          </div>
        </div>
      );
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
                  <a
                    target="_blank"
                    href={`https://etherscan.io/address/${this.props.swap.creator}`}
                  >
                    {this.props.swap.creator}
                  </a>
                </div>
                <div className="col-2 text-center arrowSwap">
                  <ion-icon name="arrow-forward-outline"></ion-icon>
                </div>
                <div className="col-5 addressSwap">
                  <label>To :</label> <br />
                  <a
                    target="_blank"
                    href={`https://etherscan.io/address/${this.props.swap.contractor}`}
                  >
                    {this.props.swap.contractor}
                  </a>
                </div>
              </div>
              <p className="description">{this.props.swap.description}</p>
            </div>
            <div className="row">
              <div className="col-5 validationButton">
                {this.renderValidityButton()}
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
