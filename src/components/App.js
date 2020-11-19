import React, { Component } from "react";
import Navbar from "./Navbar/Navbar";
import Main from "./Main/Main";

import uSwapp from "../abis/uSwapp.json";

import Web3 from "web3";

import "./App.css";
import Loader from "./Shared/Loader";
class App extends Component {
  async componentWillMount() {
    await this.loadWeb3();
    await this.loadBlockchainData();
    this.getbalance();
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
      const web3 = new Web3(window.web3.currentProvider);
      // Load account
      const accounts = await web3.eth.getAccounts();
      this.setState({ account: accounts[0] });
      // Network ID
      const networkId = await web3.eth.net.getId();

      // Load Uswapp
      // const uSwappData = uSwapp.networks[networkId];
      // if (uSwappData) {
      //   const uSwapp = new web3.eth.Contract(uSwapp.abi, uSwappData.address);
      //   this.setState({ uSwapp });
      // } else {
      //   // window.alert("Uswapp contract not deployed to  network.");
      // }
    }
    this.setState({ loading: false });
  }

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      uSwapp: {},
      balance: 0
    };
  }

  render() {
    return (
      <div>
        <Navbar account={this.state.account} />
        {this.state.loading ? (
          <Loader></Loader>
        ) : (
          <Main balance={this.state.balance} />
        )}
      </div>
    );
  }
}

export default App;
