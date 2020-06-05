import React from "react";
import inject_unount from "./base";

@inject_unount
class TestTwo extends React.Component {
  constructor() {
    super();
    this.state = {
      num: 0
    };
  }

  getNum = () => {
    // 模拟异步请求
    this.timer = setTimeout(() => {
      this.setState({ num: Math.random() });
    }, 3000);
  };

  render() {
    return (
      <div onClick={this.getNum} style={{ width: 100, height: 100, background: "red" }}>
        {this.state.num}
      </div>
    );
  }
}

export default TestTwo;
