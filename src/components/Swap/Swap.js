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
    if (swap.done) {
      return <span class="badge badge-pill badge-primary">Swap done</span>;
    } else if (swap.doneContractor) {
      return (
        <span className="badge badge-pill badge-primary">
          Swap check as finish by reciver
        </span>
      );
    }
    if (!swap.doneCreator && !swap.doneContractor && !swap.done) {
      return (
        <span className="badge badge-pill badge-primary">In progress</span>
      );
    }
  }

  // Validity button for validation of the Swap, this is mere for not confuse but displaying the user
  // could not validity if is not involve (the front end dont matter )
  renderValidityButton() {
    const address = this.props.account;
    const id = this.props.swap.id;
    const done = this.props.swap.done;

    if (
      (address === this.props.swap.contractor && !done) ||
      (address === this.props.swap.creator && !done)
    ) {
      return (
        <div>
          <div class="btn btn-primary" onClick={() => this.props.validSwap(id)}>
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
                {this.props.swap.amount.toNumber()} ETH
              </h2>
              <br />
              <div className="row">
                <div className="col-5 addressSwap">
                  <label>Creator :</label>
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
                  <label>Contractor :</label> <br />
                  <a
                    target="_blank"
                    href={`https://etherscan.io/address/${this.props.swap.contractor}`}
                  >
                    {this.props.swap.contractor}
                  </a>
                </div>
              </div>
              <p className="description">{this.props.swap.description}</p>
              <p className="description">
                Done by creator: {String(this.props.swap.doneCreator)}
              </p>
              <p className="description">
                Done by contractor: {String(this.props.swap.doneContractor)}
              </p>
              <p className="description">
                Swap done: {String(this.props.swap.done)}
              </p>
            </div>
            <div className="row">
              <div className="col-4 validationButton">
                {this.renderValidityButton()}
              </div>

              <div className="col-4 text-center swapId">
                {/* Swap id: #{this.props.id} */}
              </div>
              <div className="col-4 text-right">
                {this.getSwapStatus(this.props.swap)}
              </div>
            </div>
            <br />
          </div>
        </div>
      </div>
    );
  }
}

export default Button;
