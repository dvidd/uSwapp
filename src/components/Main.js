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
                  <input
                    type="number"
                    ref={input => {
                      this.input = input;
                    }}
                    className="form-control form-control-lg"
                    placeholder="0"
                    required
                  />
                  <br />
                  <input
                    type="text"
                    ref={input => {
                      this.input = input;
                    }}
                    className="form-control form-control-lg"
                    placeholder="@ or address of compensate"
                    required
                  />
                  <br />
                  <input
                    type="text"
                    ref={input => {
                      this.input = input;
                    }}
                    className="form-control form-control-lg"
                    placeholder="Title of swap"
                    required
                  />
                  <br />
                  <textarea
                    type="text"
                    ref={input => {
                      this.input = input;
                    }}
                    className="form-control form-control-lg"
                    placeholder="Description of swap to be made"
                    required
                  />
                  <br />
                  <button class="btn btn-primary">
                    <a>Confirm swapp</a>
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
