/* eslint-disable no-plusplus */
import React from "react";
import ReactDOM from "react-dom";
import App from "../../App";

const _state: any[] = [];
let cursor = 0;

function useState<T>(initialState: T): [T, (value: T) => void] {
  _state[cursor] = _state[cursor] || initialState;
  const currentCursor = cursor;
  function setState(newState: T) {
    _state[currentCursor] = newState;
    // 重新渲染
    render();
  }
  return [_state[cursor++], setState];
}

const render = () => {
  ReactDOM.render(<App />, document.getElementById("root"));
  cursor = 0;
};

export default useState;
