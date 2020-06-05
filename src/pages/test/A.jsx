import React from "react";
import TestTwo from "./B";

class TestOne extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: true
    };
  }

  render() {
    return (
      <div>
        <button onClick={() => this.setState({ isShow: !this.state.isShow })}>toggle</button>
        {this.state.isShow && <TestTwo />}
      </div>
    );
  }
}

export default TestOne;
