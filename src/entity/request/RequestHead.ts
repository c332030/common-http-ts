/**
 * <p>
 *   Description: RequestHead
 * </p>
 * @author c332030（袁兴旺）
 * @version 1.0
 * @date 2019-7-17 10:40
 */

import Head from '../Head';

import RequestHeadProxy from './RequestHeadProxy';


/**
 * 报文体的头
 */
interface RequestHead extends Head {

  proxy: RequestHeadProxy | null
}

export default RequestHead;
