import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { getInfo } from "../../redux/actions/info";

class Info extends Component {

  // GETINFO按钮的点击事件
  getInfo = () => {

    // 返回一个 type 为 GET_INFO 的 action
    this.props.getInfo();
  };
  render() {
    return (
      <Fragment>
        <ul>
          {/* 对数据进行判断 若为空 则显示 "暂无数据" 否则循环遍历显示数据 */}
          {JSON.stringify(this.props.info) === "{}" ? (
            <li>暂无数据</li>
          ) : (
            this.props.info.data.map((item) => {
              return <li key={item.id}>{item.name}</li>;
            })
          )}
        </ul>
        <button onClick={this.getInfo}>GETINFO</button>
      </Fragment>
    );
  }
}

// react-redux固定写法 会自动重新渲染组件 和 dispatch action
export default connect((state) => ({ info: state.infoReducer }), {
  getInfo,
})(Info);
