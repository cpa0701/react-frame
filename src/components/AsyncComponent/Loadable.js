import Loadable from 'react-loadable';
import React, { Component } from 'react';
import { Loading } from '@alifd/next';

export default function asyncComponent(importComponent) {
  const LoadingFunc = (props) => {
    let tip = '';
    if (props.error) {
      tip = '加载失败，请清除缓存并刷新';
      sessionStorage.clear();
      localStorage.clear();
    } else if (props.timedOut) {
      tip = '加载超时';
    } else if (props.pastDelay) {
      tip = '加载中';
    } else {
      return null;
    }
    return (<Loading
      style={{ display: 'block', height: '100%', background: 'rgba(0, 3, 35, 0.2)', color: '#fff' }}
      tip={tip}
      shape="fusion-reactor"
    />);
  };
  const LoadableBar = Loadable({
    loader: importComponent,
    loading: LoadingFunc,
    delay: 200, // 组件闪烁最小时间
    timeout: 20000, // 超时
  });

  class AsyncComponent extends Component {
    render() {
      return <LoadableBar {...this.props} />;
    }
  }

  return AsyncComponent;
}
