import React, { Component } from "react";
import BigButton from "../Shared/Button";

class Info extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      toAddress: "",
      ammount: 0,
      errors: []
    };
    this.handleChange = this.handleChange.bind(this);
  }

  createNewSwap() {
    if (
      this.state.title != null ||
      this.state.title != undefined ||
      this.state.title != ""
    ) {
      this.errors["title"] = true;
    } else {
      this.props.createNewSwap(
        this.state.title,
        this.state.description,
        this.state.ammount,
        this.state.toAddress
      );
    }
  }
  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }
  render() {
    return (
      <div className="card mb-4">
        <div className="card-body">
          <div className="mb-3">
            <div>
              <label className="float-left">
                <b>Start Swap</b>
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
            <br />
            <input
              type="text"
              name="toAddress"
              className="form-control form-control-lg"
              placeholder="@ or address of compensate"
              required
              onChange={this.handleChange}
            />
            <br />
            <input
              type="text"
              name="title"
              className="form-control form-control-lg"
              placeholder="Title of Swap"
              required
              onChange={this.handleChange}
            />
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
            <br />
            <div onClick={() => this.createNewSwap()}>
              <BigButton text={"Confirm Swapp"}></BigButton>
            </div>

            <div class="invalid-feedback">Insufficient funds</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Info;
