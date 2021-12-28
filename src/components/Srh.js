import React, { Component } from "react";

export default class Srh extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count1: 0,
      count2: 0,
      count3: 0,
      count4: 0,
      count5: 0,
      count6: 0,
    };
  }
  twothausand = ({ target }) => {
    this.setState({ count: target.value });
  };
  fivehundred = ({ target }) => {
    this.setState({ count1: target.value });
  };
  twohundred = ({ target }) => {
    this.setState({ count2: target.value });
  };
  onehundred = ({ target }) => {
    this.setState({ count3: target.value });
  };
  fifty = ({ target }) => {
    this.setState({ count4: target.value });
  };
  twenty = ({ target }) => {
    this.setState({ count5: target.value });
  };
  ten = ({ target }) => {
    this.setState({ count6: target.value });
  };
  totalnotes = () => {
    return (
      Number(this.state.count) +
      Number(this.state.count1) +
      Number(this.state.count2) +
      Number(this.state.count3) +
      Number(this.state.count4) +
      Number(this.state.count5) +
      Number(this.state.count6)
    );
  };
  totalvalue = () => {
    return (
      this.state.count * 2000 +
      this.state.count1 * 500 +
      this.state.count2 * 200 +
      this.state.count3 * 100 +
      this.state.count4 * 50 +
      this.state.count5 * 20 +
      this.state.count6 * 10
    );
  };

  render() {
    return (
      <div className="main-div">
        <div className="middle-div">
          <h1>Note Calculator</h1>
          <div className="values">
            <input type="number" onChange={this.twothausand} /> * 2000 ={" "}
            {this.state.count * 2000} <br /> <br />
            <input type="number" onChange={this.fivehundred} /> * 500 ={" "}
            {this.state.count1 * 500} <br />
            <br />
            <input type="number" onChange={this.twohundred} /> * 200 ={" "}
            {this.state.count2 * 200} <br /> <br />
            <input type="number" onChange={this.onehundred} /> * 100 ={" "}
            {this.state.count3 * 100} <br /> <br />
            <input type="number" onChange={this.fifty} /> * 50 ={" "}
            {this.state.count4 * 50} <br /> <br />
            <input type="number" onChange={this.twenty} /> * 20 ={" "}
            {this.state.count5 * 20} <br /> <br />
            <input type="number" onChange={this.ten} /> * 1 ={" "}
            {this.state.count6 * 10} <br /> <br />
          </div>
          <h1>Total Amount ={this.totalvalue()} </h1>
          <h1>Total Notes ={this.totalnotes()} </h1>
        </div>
      </div>
    );
  }
}
