import SetUpPunchTime from '../views/attendance/setupPunchTime/SetUpPunchTime.vue'
import EditPunch from '../views/attendance/setupPunchTime/editPunch/EditPunch.vue'
import PunchName from '../views/attendance/setupPunchTime/editPunch/PunchName.vue'
import LunchBreakSetUp from '../views/attendance/setupPunchTime/editPunch/LunchBreakSetUp.vue'
import PunchDate from '../views/attendance/setupPunchTime/editPunch/PunchDate.vue'
import PunchTime from '../views/attendance/setupPunchTime/editPunch/PunchTime.vue'
import SelectBeSavedScheme from '../views/attendance/setupPunchTime/editPunch/SelectBeSavedScheme.vue'
import SelectPunchRange from '../views/attendance/setupPunchTime/editPunch/SelectPunchRange.vue'
// url拼接前缀
const baseUrl = '/attendance/attendanceManage/selectManage/'
export default {
  routes: [
    {
      path: baseUrl + 'setUpPunchTime',
      component: SetUpPunchTime,
      name: 'setUpPunchTime'
    },
    {
      path: baseUrl + 'editPunch',
      component: EditPunch,
      name: 'editPunch'
    },
    {
      path: baseUrl + 'punchName',
      component: PunchName,
      name: 'punchName'
    },
    {
      path: baseUrl + 'lunchBreakSetUp',
      component: LunchBreakSetUp,
      name: 'lunchBreakSetUp'
    },
    {
      path: baseUrl + 'punchDate',
      component: PunchDate,
      name: 'punchDate'
    },
    {
      path: baseUrl + 'punchTime',
      component: PunchTime,
      name: 'punchTime'
    },
    {
      path: baseUrl + 'selectPunchRange',
      component: SelectPunchRange,
      name: 'selectPunchRange'
    },
    {
      path: baseUrl + 'selectBeSavedScheme',
      component: SelectBeSavedScheme,
      name: 'selectBeSavedScheme'
    }]
}
