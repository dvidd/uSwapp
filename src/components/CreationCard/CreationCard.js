import React, { Component } from "react";
import BigButton from "../Shared/Button";

var WAValidator = require("wallet-address-validator");

class Info extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toAddress: "",
      ammount: 0,
      description: "",
      notValidAddress: true,
      notValidAmmount: true,
      notValidDescription: true,
      touch: false
    };
    this.handleChange = this.handleChange.bind(this);
  }

  createNewSwap() {
    this.errors();
    if (
      this.state.notValidAddress === false ||
      this.state.notValidAmmount === false ||
      this.state.notValidDescription === false ||
      this.state.touch === false
    ) {
      // Errors
    } else {
      this.props.createNewSwap(
        this.state.description,
        this.state.ammount,
        this.state.toAddress
      );
    }
  }
  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
    setTimeout(() => {
      this.errors();
    }, 1000);
  }
  errors() {
    this.setState({ touch: true });
    var address = WAValidator.validate(this.state.toAddress, "ETH", "testnet");
    if (!address) {
      this.setState({ notValidAddress: true });
    } else {
      this.setState({ notValidAddress: false });
    }
    var ammount = this.state.ammount;
    if (ammount == 0 || ammount < 0 || ammount === null) {
      this.setState({ notValidAmmount: true });
    } else {
      this.setState({ notValidAmmount: false });
    }
    var description = this.state.description;
    if (description === "" || description === null) {
      this.setState({ notValidDescription: true });
    } else {
      this.setState({ notValidDescription: false });
    }

    // form error TODO
  }
  render() {
    return (
      <div className="card mb-4">
        <div className="card-body">
          <div className="mb-3">
            <div>
              <label className="float-left">
                <b>Create Swap</b>
              </label>
              <span className="float-right">
                Balance : {this.props.balance}
              </span>
            </div>
            <input
              onChange={this.handleChange}
              type="number"
              name="ammount"
              className="form-control form-control-lg"
              placeholder="0"
              required
            />
            {this.state.notValidAmmount && this.state.touch && (
              <div class="invalid-feedback d-block">
                Please enter a valid ammount for the swap
              </div>
            )}
            <br />
            <input
              type="text"
              name="toAddress"
              className="form-control form-control-lg"
              placeholder="@ or address of compensate"
              required
              onChange={this.handleChange}
            />
            {this.state.notValidAddress && this.state.touch && (
              <div class="invalid-feedback d-block">
                Please enter a valid ETH address
              </div>
            )}
            <br />
            <textarea
              name="description"
              onChange={this.handleChange}
              type="text"
              value={this.state.description}
              className="form-control form-control-lg"
              placeholder="Description of swap to be made"
              required
            />
            {this.state.notValidDescription && this.state.touch && (
              <div class="invalid-feedback d-block">
                Please enter a description for the swap
              </div>
            )}
            <br />
            <div onClick={() => this.createNewSwap()}>
              <BigButton text={"Create Swapp"}></BigButton>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Info;
