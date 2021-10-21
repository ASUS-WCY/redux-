import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { increment, incrementAsync } from "../../redux/actions/num";

class Count extends Component {
  
  // 加法按钮的点击事件
  increment = () => {
    const { value } = this.num;
    this.props.increment(value * 1);
  };

  // 延迟按钮的延迟事件
  incrementAsync= () => {
    const { value } = this.num;
    this.props.incrementAsync(value * 1);
  };


  render() {
    return (
      <Fragment>
        <h3>Count:{this.props.num}</h3>
        <input type="text" ref={a => (this.num = a)} />
        <button onClick={this.increment}>+1</button>
        <button onClick={this.incrementAsync}>delay</button>
      </Fragment>
    );
  }
}

// react-redux的固定写法
export default connect(
  (state) => ({
    num: state.numReducer,
  }),
  {
    increment,
    incrementAsync,
  }
)(Count);
