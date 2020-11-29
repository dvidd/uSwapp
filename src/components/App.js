import React, { Component } from "react";
import Navbar from "./Navbar/Navbar";
import Main from "./Main/Main";

import USwapp from "../abis/uSwapp.json";

import Web3 from "web3";

import "./App.css";
import Swal from "sweetalert2";
import Loader from "./Shared/Loader";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      uSwapp: {},
      balance: 0,
      account: "",
      latestID: 0
    };
  }

  async componentWillMount() {
    // Detect wallet
    const walletInstall = typeof window.web3 !== "undefined";
    this.setState({ walletInstall });
    if (walletInstall) {
      await this.loadWeb3();
      await this.loadBlockchainData();
      this.getSwap(1236);
    }
  }
  // Get the balance of the address account in Ether
  getbalance() {
    window.web3.eth.getBalance(this.state.account, (err, balance) => {
      balance = window.web3.utils.fromWei(balance, "ether") + " ETH";
      this.setState({ balance: balance });
    });
  }
  // TODO :
  // Conect wallet with other providers  :
  async loadWeb3() {
    // Load web3 current provider
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      // Is not install metamask or other provider
    }
  }
  async loadBlockchainData() {
    if (window.ethereum) {
      const web3 = window.web3;
      // Get the accounts
      const accounts = await web3.eth.getAccounts();
      this.setState({ account: accounts[0] });
      const networkId = await web3.eth.net.getId();
      // Load uSwapp
      const uSwappData = USwapp.networks[networkId];
      if (uSwappData) {
        const uSwapp = new web3.eth.Contract(USwapp.abi, uSwappData.address);
        this.setState({ uSwapp });
      } else {
        window.alert("uSwapp contract not deployed to detected network.");
      }
      this.getbalance();
    }
    this.setState({ loading: false });
  }
  // Create a new swap
  createNewSwap = (_description, _ammount, _toAddress) => {
    this.setState({ loading: true });
    this.state.uSwapp.methods
      .createNewSwap(_description, _ammount, _toAddress)
      .send({
        from: this.state.account,
        value: window.web3.utils.toWei(_ammount, "ether")
      })
      .on("transactionHash", hash => {
        this.setState({ loading: false });
      });
  };

  // Get swap info
  getSwap = async _swapId => {
    const swap = await this.state.uSwapp.methods.swaps(_swapId).call();
    console.log(swap);
    this.setState({ swap: swap });
  };
  // Confirm swap validity
  validSwap = async _swapId => {
    await this.state.uSwapp.methods.checkValidity(_swapId).call();
    this.getSwap(_swapId);
  };

  render() {
    return (
      <div>
        <Navbar account={this.state.account} />
        {this.state.loading ? (
          <Loader></Loader>
        ) : (
          <Main
            account={this.state.account}
            validSwap={this.validSwap}
            swap={this.state.swap}
            getSwap={this.getSwap}
            createNewSwap={this.createNewSwap}
            balance={this.state.balance}
            latestID={this.state.latestID}
          />
        )}
      </div>
    );
  }
}

export default App;
