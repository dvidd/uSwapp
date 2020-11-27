import React, { Component } from "react";
import BigButton from "../Shared/Button";

import Loader from "../Shared/Loader";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      loading: false,
      notValidId: true,
      touch: false
    };
    this.handleChange = this.handleChange.bind(this);
  }

  errors() {
    this.setState({ touch: true });
    var id = this.state.id;
    if (id === 0 || id < 0 || id === null) {
      this.setState({ notValidId: true });
    } else {
      this.setState({ notValidId: false });
    }
  }

  handleChange(evt) {
    this.setState({ id: evt.target.value });
    setTimeout(() => {
      this.errors();
    }, 1000);
  }
  getSwap() {
    if (this.state.notValidId === false && this.state.touch === true) {
      this.setState({ loading: true });
      this.props.getSwap(this.state.id);
      this.setState({ loading: false });
    } else {
      // Errors
      this.errors();
    }
  }
  render() {
    return (
      <div>
        <div className="card light-card mb-4">
          <div className="card-body">
            <div className="mb-3">
              <label>Search Swap</label>
              <input
                onChange={this.handleChange}
                type="number"
                name="id"
                className="form-control form-control-lg"
                placeholder="#9494"
                required
              />
              {this.state.notValidId && this.state.touch && (
                <div className="invalid-feedback d-block">
                  Please enter a valid id
                </div>
              )}
            </div>

            {this.state.loading ? (
              <Loader></Loader>
            ) : (
              <div onClick={() => this.getSwap()}>
                <BigButton text={"Search"} />
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
