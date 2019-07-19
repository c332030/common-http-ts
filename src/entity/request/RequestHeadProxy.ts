/**
 * <p>
 *   Description: RequestHeadProxy
 * </p>
 * @author c332030（袁兴旺）
 * @version 1.0
 * @date 2019-7-17 10:31
 */

import {
  HttpMethodEnum
  ,HttpSchemeEnum
} from '@/enum'

/**
 * [协议名]://[用户名]:[密码]@[主机名]:[端口]/[路径]?[查询参数]#[片段ID]
 *
 * [scheme]://[username]:[password]@[host]:[port]/[path]?[query]#[fragment]
 */
interface RequestHeadProxy {

  /**
   * 主机路径前的地址
   *
   * [scheme]://[username]:[password]@[host]:[port]/
   */
  url: string

  /**
   * 请求方式 get / post
   */
  method: HttpMethodEnum

  /**
   * 协议 http / https
   */
  scheme: HttpSchemeEnum

  /**
   * 用户名
   */
  username: string

  /**
   * 密码
   */
  password: string

  /**
   * 主机名
   */
  host: string

  /**
   * 端口
   */
  port: number

  /**
   * 主机下地址
    */
  path: string

  /**
   * get 参数
   */
  query: Map<string, string>

  /**
   * 片段 id
   */
  fragment:string
}

export default RequestHeadProxy;
