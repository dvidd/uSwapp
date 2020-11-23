import React, { Component } from "react";
import BigButton from "../Shared/Button";

import Loader from "../Shared/Loader";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      loading: false
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }
  async getSwap() {
    this.setState({ loading: true });
    await this.props.getSwap(this.state.id);
    this.setState({ loading: false });
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
                placeholder="0"
                required
              />
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
