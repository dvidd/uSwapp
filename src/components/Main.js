import React, { Component } from "react";
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ammount: 0,
      addres: 0x0,
      balance: 1,
      title: "",
      description: ""
    };
  }

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
                    <span className="float-right">
                      Balance : {this.props.balance}
                    </span>
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
                  <div class="invalid-feedback">Insufficient funds</div>
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
