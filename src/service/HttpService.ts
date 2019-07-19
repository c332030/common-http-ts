/**
 * <p>
 *   Description: HttpService
 * </p>
 * @author c332030（袁兴旺）
 * @version 1.0
 * @date 2019-7-17 11:04
 */

import {
  Request
  ,Response
} from '../entity/'

class HttpService {

  /**
   * 获取完整的请求链接
   * @param request
   */
  getUrl(request: Request) {

    let proxy = request.head.proxy;
    if(!proxy) {
      return '';
    }
    let url = proxy ? proxy.url : '';

    if(!url) {

    }

    url += proxy.path ? proxy.path : '';

    let query = proxy.query;
    if(query && query.size > 0) {
      url += '?';

      query.forEach((value, key) => {

        url += `${key}=${value}&`;
      })
    }

    return '';
  }

  /**
   * post 请求
   * @param request
   */
  post(request: Request) {

    let response: Response | null  = null;

    return response;
  }
}

export default HttpService;
