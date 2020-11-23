import React, { Component } from "react";

class Button extends Component {
  render() {
    return (
      <button className="btn btn-primary">
        <a>{this.props.text}</a>
      </button>
    );
  }
}

export default Button;
