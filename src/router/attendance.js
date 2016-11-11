import Attendance from '../views/Attendance.vue'
import AttendanceManage from '../views/AttendanceManage.vue'
import SelectManage from '../views/SelectManage.vue'
import SelectPunchPosition from '../views/SelectPunchPosition.vue'
import SelectWifi from '../views/SelectWifi.vue'
export let
  routes = [
    {
      path: '/attendance',
      component: Attendance,
      name: 'attendance'
    },
    {
      path: '/attendance/attendanceManage',
      component: AttendanceManage,
      name: 'attendanceManage'
    },
    {
      path: '/attendance/attendanceManage/selectManage',
      component: SelectManage,
      name: 'selectManage'
    },

    {
      path: '/attendance/attendanceManage/selectManage/selectPunchPosition',
      component: SelectPunchPosition,
      name: 'selectPunchPosition'
    },
    {
      path: '/attendance/attendanceManage/selectManage/selectWifi',
      component: SelectWifi,
      name: 'selectWifi'
    }
  ]

