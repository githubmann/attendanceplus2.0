import Attendance from '../views/attendance/Attendance.vue'
import AttendanceManage from '../views/attendance/AttendanceManage.vue'
import SelectManage from '../views/attendance/SelectManage.vue'
import SelectPunchPosition from '../views/attendance/SelectPunchPosition.vue'
import SelectWifi from '../views/attendance/SelectWifi.vue'
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

