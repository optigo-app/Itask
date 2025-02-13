import { atom } from "recoil";

export const openFormDrawer = atom({
  key: 'openFormDrawer',
  default: false
})

export const formData = atom({
  key: 'formData',
  default: {}
})

export const flowRemember = atom({
  key: 'flowRemember',
  default: []
})

export const masterDataValue = atom({
  key: 'masterDataValue',
  default: []
})


export const TaskData = atom({
  key: 'TaskData',
  default: []
})

export const rootSubrootflag = atom({
  key: 'rootSubrootflag',
  default: {}
})

export const calendarSideBarOpen = atom({
  key: 'calendarSideBarOpen',
  default: false
})

export const fetchlistApiCall = atom({
  key: 'fetchlistApiCall',
  default: true
})

export const selectedRowData = atom({
  key: 'selectedRowData',
  default: {}
})

export const selectedCategoryAtom = atom({
  key: 'selectedCategoryAtom',
  default: []
})

export const calendarM = atom({
  key: 'calendarM',
  default: {}
})

export const CalformData = atom({
  key: 'CalformData',
  default: []
})

export const CalEventsFilter = atom({
  key: 'CalEventsFilter',
  default: []
})



