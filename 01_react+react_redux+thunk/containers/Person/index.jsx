import React, { Component, Fragment } from "react";
import { nanoid } from "nanoid";
import { connect } from "react-redux";
import { addPerson } from "../../redux/actions/person.js";

class Person extends Component {
  // 添加人员信息的方法
  addP = () => {
    // 解构获取姓名 年龄 和 状态中的人员信息
    const { value: name } = this.name;
    const { value: age } = this.age;

    // 将新信息添加进状态中
    const newInfo = { id: nanoid(), name, age };

    this.props.addPerson(newInfo);
  };

  render() {
    return (
      <Fragment>
        <h2>人员列表如下</h2>
        <ul>
          {/* 三元表达式判断初识人员信息数组是否为空 为空则展示暂无数据 */}
          {this.props.person === 0 ? (
            <li>暂无数据</li>
          ) : (
            this.props.person.map((item) => {
              return (
                <li key={item.id}>
                  <div>编号：{item.id}</div>
                  <div>姓名：{item.name}</div>
                  <div>年龄：{item.age}</div>
                </li>
              );
            })
          )}
        </ul>
        <input
          type="text"
          placeholder="name"
          ref={(a) => {
            this.name = a;
          }}
        />{" "}
        &nbsp;&nbsp;
        <input
          type="text"
          placeholder="age"
          ref={(a) => {
            this.age = a;
          }}
        />{" "}
        <br />
        <button onClick={this.addP}>addPerson</button>
      </Fragment>
    );
  }
}

export default connect(
  (state) => ({
    person: state.person,
    count: state.count,
  }),
  {
    addPerson,
  }
)(Person);
