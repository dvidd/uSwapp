import React, { Component } from "react";

class Button extends Component {
  render() {
    return (
      <button class="btn btn-primary">
        <a>{this.props.text}</a>
      </button>
    );
  }
}

export default Button;
