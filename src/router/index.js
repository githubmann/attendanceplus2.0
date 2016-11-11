// 引入其他路由
import * as attendance from './attendance'
import * as setupPunchTime from './setupPunchTime'
// 拼接成总路由
export default{
  routes: [
    ...attendance.routes,
    ...setupPunchTime.routes
  ]
}
