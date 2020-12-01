import React, { Component } from "react";

class Info extends Component {
  slides = [
    "uSwapp is a swaping protocol base on Ethereum blockchain",
    "You need to have metamask installed for using it in the browser"
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
              {this.slides[1]}
              <br />
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
