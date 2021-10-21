import React, { Component } from "react";
import { connect } from "react-redux";

import {
  Increment as Inc,
  Decrement as Dec,
  IncrementAsync as IncAsync,
} from "../../redux/actions/count";

class Count extends Component {
  increment = () => {
    const { value } = this.selectNum;
    this.props.Inc(value * 1);
  };

  decrement = () => {
    const { value } = this.selectNum;
    this.props.Dec(value * 1);
  };

  incrementOdd = () => {
    if (this.props.state % 2 !== 0) {
      this.increment();
    }
  };

  incrementAsync = () => {
    const { value } = this.selectNum;
    this.props.IncAsync(value * 1, 1000);
  };

  render() {
    return (
      <div>
        <h2>Count的值为：{this.props.count}</h2>
        <select ref={(a) => (this.selectNum = a)}>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
        </select>{" "}
        <br />
        <br />
        <button onClick={this.increment}>increment</button>
        <button onClick={this.decrement}>decrement</button>
        <button onClick={this.incrementOdd}>incrementIfOdd</button>
        <button onClick={this.incrementAsync}>incrementAsync</button>
      </div>
    );
  }
}

export default connect(
  (state) => ({ count: state.count, person: state.person }),
  {
    Inc,
    Dec,
    IncAsync,
  }
)(Count);
