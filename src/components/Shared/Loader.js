import React, { Component } from "react";

import Logo from "../../assets/Uswapp.png";

class Loader extends Component {
  render() {
    return (
      <div className="loader">
        <img src={Logo} alt="uSwapp logo" />
      </div>
    );
  }
}

export default Loader;
