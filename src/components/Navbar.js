import React, { Component } from "react";
import Identicon from "identicon.js";

import Web3 from "web3";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: false
    };
    this.inputRef = React.createRef();
  }
  componentWillMount() {
    document.addEventListener("mousedown", this.handleClick, false);
  }
  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClick, false);
  }
  handleClick = e => {
    /*Validating click is made inside a component*/
    if (this.inputRef.current === e.target) {
      return;
    }
    this.handleClickOutside();
  };
  handleClickOutside() {
    /*code to handle what to do when clicked outside*/
    this.changeOptions();
  }
  changeOptions() {
    this.setState({ options: !this.state.options });
  }
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">
          <img src={require("../assets/Uswapp.png")} /> &nbsp; <b>uSwapp</b>
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
            <div>
              <button class="btn btn-dark tools">
                <ion-icon size="medium" name="cog"></ion-icon>
              </button>
              <span
                ref={this.inputRef}
                className={this.state.options ? "options" : "d-none"}
              >
                <div class="element">
                  <a>
                    <ion-icon name="newspaper-outline"></ion-icon> About
                  </a>
                </div>
                <div class="element">
                  <a>
                    <ion-icon name="logo-github"></ion-icon> Code
                  </a>
                </div>
                <div class="element">
                  <a>
                    <ion-icon name="logo-twitter"></ion-icon> Twitter
                  </a>
                </div>
              </span>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
