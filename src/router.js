/**
 * 定义应用路由
 */
import { Switch, Route, Redirect } from 'react-router-dom';
import React from 'react';
import asyncComponent from './components/AsyncComponent/Loadable';

const UserLayout = asyncComponent(() => import('./layouts/UserLayout'));
const BasicLayout = asyncComponent(() => import('./layouts/BasicLayout'));

// 按照 Layout 分组路由
// UserLayout 对应的路由：/user/xxx
// BasicLayout 对应的路由：/xxx
const hasLogined = (props) => {
  if (!sessionStorage.item) {
    return true;
  }
  return true;
};
const router = () => {
  return (
    <Switch >
      <Route path="/user" component={UserLayout} />
      <Route render={(props) => {
        return hasLogined(props)
          ? <Route path="/" component={BasicLayout} />
          : <Redirect to="/user/login" />;
      }}
      />
    </Switch >
  );
};

export default router;
