/* eslint-disable no-plusplus */
import React from "react";
import ReactDOM from "react-dom";
import App from "../../App";

const allDeps: any[][] = [];
let effectCursor = 0;

export function useEffect(callback: () => void, deps: any[]) {
  if (!allDeps[effectCursor]) {
    // 初次渲染：赋值 + 调用回调函数
    allDeps[effectCursor] = deps;
    ++effectCursor;
    setTimeout(() => {
      callback();
    });
    return;
  }

  const currenEffectCursor = effectCursor;
  const rawDeps = allDeps[currenEffectCursor];
  // 检测依赖项是否发生变化，发生变化需要重新render
  const isChanged = rawDeps.some((dep: any, index: number) => dep !== deps[index]);
  if (isChanged) {
    callback();
    allDeps[effectCursor] = deps;
    render();
  }
  ++effectCursor;
}

const render = () => {
  ReactDOM.render(<App />, document.getElementById("root"));
  effectCursor = 0;
};
