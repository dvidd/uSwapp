import React, { Component } from "react";

import Logo from "../../assets/Uswapp.png";

class Loader extends Component {
  render() {
    return (
      <div class="loader">
        <img src={Logo} />
      </div>
    );
  }
}

export default Loader;
