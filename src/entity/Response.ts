/**
 * <p>
 *   Description: Response
 * </p>
 * @author c332030（袁兴旺）
 * @version 1.0
 * @date 2019-7-17 10:39
 */

import { ResponseHead } from './response/'

interface Response {

  head: ResponseHead,

  body: any
}

export default Response;
