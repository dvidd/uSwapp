import React, { Component } from "react";

// import { useParams } from "react-router-dom";

class Button extends Component {
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
                {this.props.swap} ETH
              </h2>
              <br />
              <div className="row">
                <div className="col-5 addressSwap">
                  <label>From :</label>
                  <br />
                  <p>{this.props.creator}</p>
                </div>
                <div className="col-2 text-center arrowSwap">
                  <ion-icon name="arrow-forward-outline"></ion-icon>
                </div>
                <div className="col-5 addressSwap">
                  <label>To :</label> <br />
                  <p>{this.props.contractor}</p>
                </div>
              </div>
              <p>{this.props.description}</p>
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
