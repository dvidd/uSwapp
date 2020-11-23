import React, { Component } from "react";

class Info extends Component {
  slides = [
    "uSwapp is a swaping protocol for base on ETH",
    " Send and receive ether, where the transaction will be done once both parties agree "
  ];
  constructor(props) {
    super(props);
    this.state = {
      onSlide: 0,
      display: true
    };
  }

  render() {
    if (this.state.onSlide < this.slides.length) {
      return (
        <div className="cardInfo">
          <div className="container cardInfoContainer">
            <p>
              {this.slides[0]}
              <br />
              {this.slides[1]}
            </p>
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}

export default Info;
