import React, { Component } from "react";

class Assignment1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      output: "",
      num1: "",
      num2: "",
    };
  }

  handleNum1 = (event) => {
    this.setState({
      num1: event.target.value,
    });
  };

  handleNum2 = (event) => {
    this.setState({
      num2: event.target.value,
    });
  };

  add = (e) => {
    this.setState({
      output: parseInt(this.state.num1) + parseInt(this.state.num2),
    });
  };

  sub = (e) => {
    this.setState({
      output: parseInt(this.state.num1) - parseInt(this.state.num2),
    });
  };

  mult = (e) => {
    this.setState({
      output: parseInt(this.state.num1) * parseInt(this.state.num2),
    });
  };

  div = (e) => {
    this.setState({
      output: parseInt(this.state.num1) / parseInt(this.state.num2),
    });
  };

  render() {
    return (
      <div >
        <h2 >Assignment - 1</h2>
        Number 1
        <input
          placeholder=" Number 1"
          type="text"
          value={this.state.name1}
          onChange={this.handleNum1}
        />
        <br />
        Number 2
        <input
           placeholder=" Number 2"
          type="text"
          value={this.state.name2}
          onChange={this.handleNum2}
        />
        <br />
        <br />
        <button onClick={() => this.add()}>Add</button>
        <button onClick={() => this.sub()}>Substract</button>
        <button onClick={() => this.mult()}>Multiply</button>
        <button onClick={() => this.div()}>Divide</button>
        <h2>
          {" "}
          Output is <span>{this.state.output}</span>{" "}
        </h2>

      </div>
    );
  }
}
export default Assignment1;
