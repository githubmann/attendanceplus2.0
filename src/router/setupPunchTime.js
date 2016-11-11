import SetUpPunchTime from '../views/SetUpPunchTime.vue'
import EditPunch from '../views/EditPunch.vue'
import PunchName from '../views/PunchName.vue'
import LunchBreakSetUp from '../views/LunchBreakSetUp.vue'
import PunchDate from '../views/PunchDate.vue'
import PunchTime from '../views/PunchTime.vue'
import SelectPunchRange from '../views/SelectPunchRange.vue'
import SelectBeSavedScheme from '../views/PunchTime.vue'
// url拼接前缀
const baseUrl = '/attendance/attendanceManage/selectManage/'
export default {
  routes: [{
        path: baseUrl+'/setUpPunchTime',
        component: SetUpPunchTime,
        name: 'setUpPunchTime'
      },
      {
        path: baseUrl+'editPunch',
        component: EditPunch,
        name: 'editPunch'
      },
      {
        path: baseUrl+'punchName',
        component: PunchName,
        name: 'punchName'
      },
      {
        path :baseUrl+'lunchBreakSetUp',
        component: LunchBreakSetUp,
        name: 'lunchBreakSetUp'
      },
      {
        path:baseUrl+'punchDate',
        component:PunchDate,
        name:'punchDate'
      },
      {
        path: baseUrl+'punchTime',
        component: PunchTime,
        name: 'punchTime'
      },
      {
        path :baseUrl+'selectPunchRange',
        component: SelectPunchRange,
        name: 'selectPunchRange'
      },
      {
        path: baseUrl+'selectBeSavedScheme',
        component: SelectBeSavedScheme,
        name: 'selectBeSavedScheme'
      }]
}
