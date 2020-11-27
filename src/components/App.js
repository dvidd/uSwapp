import React, { Component } from "react";
import Navbar from "./Navbar/Navbar";
import Main from "./Main/Main";

import USwapp from "../abis/uSwapp.json";

import Web3 from "web3";

import "./App.css";
import Loader from "./Shared/Loader";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      uSwapp: {},
      balance: 0,
      account: "",
      latestID: 0
    };
  }

  async componentWillMount() {
    await this.loadWeb3();
    await this.loadBlockchainData();
  }

  getbalance() {
    window.web3.eth.getBalance(this.state.account, (err, balance) => {
      balance = window.web3.utils.fromWei(balance, "ether") + " ETH";
      this.setState({ balance: balance });
    });
  }

  async loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      console.log(
        "Non-Ethereum browser detected. You should consider trying MetaMask!"
      );
    }
  }
  async loadBlockchainData() {
    if (window.ethereum) {
      const web3 = window.web3;

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

  createNewSwap = (_description, _ammount, _toAddress) => {
    this.setState({ loading: true });
    this.state.uSwapp.methods
      .createNewSwap(_description, _ammount, _toAddress)
      .send({ from: this.state.account })
      .on("transactionHash", hash => {
        this.setState({ loading: false });
      });
  };

  // Get swap information

  getSwap = async _swapId => {
    const swap = await this.state.uSwapp.methods.swaps(_swapId).call();
    const dataSwap = JSON.stringify(swap);
    console.log(dataSwap);
    this.setState({ swap: dataSwap });
  };

  render() {
    return (
      <div>
        <Navbar account={this.state.account} />
        {this.state.loading ? (
          <Loader></Loader>
        ) : (
          <Main
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
