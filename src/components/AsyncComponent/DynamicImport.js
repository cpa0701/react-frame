import React, { Component } from 'react';
import { Loading } from '@alifd/next';

export default function asyncComponent(importComponent) {
  class AsyncComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        component: null,
      };
    }

    async componentWillMount() {
      const { default: component } = await importComponent();
      this.setState({
        component,
      });
    }

    render() {
      const C = this.state.component;
      return C ?
        <C {...this.props} /> :
        <Loading
          style={{ display: 'block', height: '100%', background: 'rgba(0, 3, 35, 0.2)', color: '#fff' }}
          tip="加载中"
          shape="fusion-reactor"
        />;
    }
  }

  return AsyncComponent;
}
