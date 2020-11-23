import React, { Component } from "react";

import Logo from "../../assets/Uswapp.png";

class Loader extends Component {
  render() {
    return (
      <div className="loader">
        <img src={Logo} />
      </div>
    );
  }
}

export default Loader;
