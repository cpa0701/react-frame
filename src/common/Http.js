import axios from 'axios';
import { Message } from '@alifd/next';

class Http {
  mode = 'remote';

  getUrl(url) {
    let prefix = '';
    switch (this.mode) {
      case 'local': {
        prefix = 'mock/';
        break;
      }
      case 'remote': {
        prefix = '/';
        break;
      }
      case 'product': {
        prefix = 'api/';
        break;
      }
      default: {
        prefix = '';
        break;
      }
    }
    return prefix + url;
  }

  get(api, data = {}, config = {}) {
    return this.request(
      {
        url: api,
        method: 'GET',
        params: data,
      }, config,
    );
  }

  post(api, data = {}, config = {}) {
    return this.request(
      {
        url: api,
        method: 'POST',
        data,
      }, config,
    );
  }

  delete(api, data = {}, config = {}) {
    return this.request(
      {
        url: api,
        method: 'DELETE',
        data,
      }, config,
    );
  }

  put(api, data = {}, config = {}) {
    return this.request(
      {
        url: api,
        method: 'PUT',
        data,
      }, config,
    );
  }

  request(params, config) {
    params.url = this.getUrl(params.url);
    params = Object.assign(params, config);
    axios.interceptors.request.use(
      (configs) => {
        const token = localStorage.getItem('authToken');
        if (token) {
          configs.headers.Authorization = `Bearer${token}`;
        }
        return configs;
      });
    return axios(params)
      .then((result) => {
        if (result.data.code === 200) {
          return result.data.data ? result.data.data : false;
        }
        return result.data;
      })
      .catch((error) => {
        if (error.response) {
          if (error.response.data.code === 401 || error.response.status === 401) {
            window.location.href = '#/login';
          } else if (error.response.data.code === 500) {
            Message.error('服务器错误');
          } else {
            Message.error(error.response.data.description);
          }
        }
        return false;
      });
  }

  log(msg) {
    if (this.mode !== 'product') {
      console.log(msg);
    }
  }
}

export default new Http();
