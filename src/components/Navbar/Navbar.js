import React, { Component } from "react";
import Identicon from "identicon.js";

import Options from "../Options/Options";

import logo from "../../assets/Uswapp.png";
import Button from "../Shared/Button";

class Navbar extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">
          <img src={logo} /> &nbsp; <b>uSwapp</b>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav mr-auto"></ul>
          <div class="form-inline my-2 my-lg-0 ">
            <div className="text-secondary mr-auto">
              <small id="account ">{this.props.account}</small>
            </div>
            {this.props.account ? (
              <img
                className="ml-2"
                width="30"
                height="30"
                src={`data:image/png;base64,${new Identicon(
                  this.props.account,
                  30
                ).toString()}`}
                alt=""
              />
            ) : (
              <Button text="Connect wallet" />
            )}
            <Options></Options>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
