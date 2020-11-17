import React, { Component } from "react";
class Main extends Component {
  render() {
    return (
      <div className="container-fluid mt-5">
        <div className="row">
          <div
            id="content mt-3"
            className="col-lg-12 ml-auto mr-auto"
            style={{ maxWidth: "600px" }}
          >
            <div className="card mb-4">
              <div className="card-body">
                <form className="mb-3">
                  <div>
                    <label className="float-left">
                      <b>Start swapp</b>
                    </label>
                    <span className="float-right">Balance : 2.23 eth </span>
                  </div>
                  <div className="input-group mb-4">
                    <input
                      type="text"
                      ref={input => {
                        this.input = input;
                      }}
                      className="form-control form-control-lg"
                      placeholder="0"
                      required
                    />
                    <div className="input-group-append">
                      <div className="input-group-text">
                        &nbsp;&nbsp;&nbsp; Tokens
                      </div>
                    </div>
                  </div>
                  <button class="btn btn-primary">
                    <a>Connect wallet</a>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
