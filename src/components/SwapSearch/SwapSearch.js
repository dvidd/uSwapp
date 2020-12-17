import React, { Component } from "react";
import BigButton from "../Shared/Button";

import Swap from "../Swap/Swap";

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
  renderSwap() {
    const swap = this.props.swap;
    if (swap !== undefined && swap !== null) {
      return (
        <div>
          <Swap
            id={this.props.id}
            account={this.props.account}
            swap={swap}
            validSwap={this.props.validSwap}
          />
        </div>
      );
    }
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
    this.errors();
    this.setState({ loading: true });
    setTimeout(() => {
      if (this.state.notValidId === false) {
        this.setState({ loading: true });
        this.props.getSwap(this.state.id);
        this.setState({ loading: false });
      } else {
        // Errors
        this.errors();
      }
    }, 1000);
    this.setState({ loading: false });
  }
  render() {
    return (
      <div>
        {this.renderSwap()}

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
