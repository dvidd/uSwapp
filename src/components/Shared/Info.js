import React, { Component } from "react";

import SmallButton from "../Shared/SmallButton";

class Info extends Component {
  slides = [
    "uSwapp is a protocol for exchanging product and services base in the Ethereum blockchain.",
    "Add a layer of security on your crypto transactions",
    "Add a new swapp and commit to proccess the transaction once both part are ready"
  ];
  constructor(props) {
    super(props);
    this.state = {
      onSlide: 0,
      display: true
    };
    setInterval(() => {
      if (this.state.onSlide != this.slides.length) {
        this.setState({ onSlide: this.state.onSlide + 1 });
      } else {
        this.setState({ onSlide: 0 });
      }
    }, 5000);
  }

  render() {
    if (this.state.onSlide < this.slides.length) {
      return (
        <div class="cardInfo">
          <div class="container cardInfoContainer">
            <p>{this.slides[this.state.onSlide]}</p>
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}

export default Info;
