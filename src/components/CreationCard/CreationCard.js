import React, { Component } from "react";
import BigButton from "../Shared/Button";

var WAValidator = require("wallet-address-validator");

class Info extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toAddress: "",
      amount: 0,
      description: "",
      notValidAddress: true,
      notValidAmount: true,
      notValidDescription: true,
      touch: false
    };
    this.handleChange = this.handleChange.bind(this);
  }
  // TODO transform amount to USD and EU
  createNewSwap() {
    if (
      !this.state.notValidAddress &&
      !this.state.notValidAmount &&
      !this.state.notValidDescription &&
      this.state.touch
    ) {
      this.props.createNewSwap(
        this.state.description,
        this.state.amount,
        this.state.toAddress
      );
    } else {
      // Errors
      this.errors();
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
    var amount = this.state.amount;
    if (amount === 0 || amount < 0 || amount === null) {
      this.setState({ notValidAmount: true });
    } else {
      this.setState({ notValidAmount: false });
    }
    var description = this.state.description;
    if (description === "" || description === null) {
      this.setState({ notValidDescription: true });
    } else {
      this.setState({ notValidDescription: false });
    }
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
              name="amount"
              className="form-control form-control-lg"
              placeholder="0"
              required
            />
            {this.state.notValidAmount && this.state.touch && (
              <div className="invalid-feedback d-block">
                Please enter a valid amount for the swap
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
              <div className="invalid-feedback d-block">
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
              <div className="invalid-feedback d-block">
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
