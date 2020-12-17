import React, { Component } from "react";
import Identicon from "identicon.js";

import Options from "../Options/Options";

import logo from "../../assets/Uswapp.png";
import Button from "../Shared/Button";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="navbar-brand" href="#">
          <img src={logo} alt="uSwapp logo" /> &nbsp; <b>uSwapp</b>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto">
            <li class="nav-item ">
              <a class="nav-link" href="#">
                Swaps <span class="sr-only"></span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/#/frelances">
                Freelancers
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/#/search">
                Search
              </a>
            </li>
          </ul>
          <div className="form-inline my-2 my-lg-0 ">
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
                alt="User Identicon uSwapp"
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
