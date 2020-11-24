import React, { Component } from "react";

class Button extends Component {
  render() {
    return <button className="btn btn-primary">{this.props.text}</button>;
  }
}

export default Button;
