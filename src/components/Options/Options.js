import React, { Component } from "react";

import SmallButton from "../Shared/SmallButton";

class Options extends Component {
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
    if (this.state.options === true) {
      setTimeout(() => {
        this.setState({ options: false });
      }, 200);
    }
  }
  handleDisplay() {
    this.setState({ options: true });
  }
  render() {
    return (
      <div ref={this.inputRef} onClick={() => this.handleDisplay()}>
        <SmallButton name={"cog"}></SmallButton>
        <span className={this.state.options ? "options" : "d-none"}>
          <div className="element">
            <a href="https://github.com/dvidd/uSwapp" target="_blank">
              <ion-icon name="logo-github"></ion-icon> Code
            </a>
          </div>
          <div className="element">
            <a href="https://twitter.com/uSwapp" target="_blank">
              <ion-icon name="logo-twitter"></ion-icon> Twitter
            </a>
          </div>
          <div className="element">
            <a href="https://twitter.com/dviddb" target="_blank">
              <ion-icon name="logo-twitter"></ion-icon> @dviddb
            </a>
          </div>
        </span>
      </div>
    );
  }
}

export default Options;
