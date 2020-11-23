import React, { Component } from "react";
import BigButton from "../Shared/Button";

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
            </div>
            <br />
            <br />
            <br />
            <div onClick={() => this.createNewSwap()}>
              <BigButton text={"Confirm Swapp"}></BigButton>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Button;
