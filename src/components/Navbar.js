import React, { Component } from "react";
import Identicon from "identicon.js";
import Web3 from "web3";

class Navbar extends Component {
  disconectwallet() {
    Web3.eth.accounts.wallet.clear();
  }

  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">
          <img src={require("../assets/Uswapp.png")} /> &nbsp; <b>Uswapp</b>
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
          <form class="form-inline my-2 my-lg-0">
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
            <button class="btn btn-dark tools">
              <ion-icon
                onPress={() => this.clearWallet()}
                size="medium"
                name="cog"
              ></ion-icon>
            </button>
          </form>
        </div>
      </nav>
    );
  }
}

export default Navbar;
