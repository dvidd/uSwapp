import React, { Component } from "react";
import Identicon from "identicon.js";

import Options from "../Options/Options";

import logo from "../../assets/Uswapp.png";

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
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="/explore">
                Explore <span class="sr-only"></span>
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                target="_blank"
                href="https://github.com/uswapp"
              >
                Github
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link">About</a>
            </li>
          </ul>
          <div class="form-inline my-2 my-lg-0">
            <div className="text-secondary">
              <small id="account">{this.props.account}</small>
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
              <button class="btn btn-primary">
                <a>Connect wallet</a>
              </button>
            )}
            <Options></Options>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
