import Http from '../common/Http';

class LoginService {
  // 登录方法
  login = async (param) => {
    const url = 'login';
    return Http.post(url, param);
  };
  // 获取token
  authToken = async (param) => {
    const url = 'oauth/token';
    return Http.post(url, param);
  };
  // 登出方法
  logout = async (param) => {
    const url = 'userLogout';
    return Http.post(url, param);
  };
  // 登出方法
  queryHeaderMenuNotifyCount = async (param) => {
    const url = 'index/queryHeaderMenuNotifyCount ';
    return Http.post(url, param);
  };
  // 记录菜单
  insertMenuOperateLog = async (param) => {
    return Http.post('operateLog/insertMenuOperateLog', param);
  };
}

export async function login(params) {
  const url = 'login';
  return Http.post(url, params);
}
export default new LoginService();
