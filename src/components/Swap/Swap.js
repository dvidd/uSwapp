import React, { Component } from "react";

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      swap: this.props.swap
    };
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
            <br />
            <br />
            <br />
          </div>
        </div>
      </div>
    );
  }
}

export default Button;
