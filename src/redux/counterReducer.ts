import { v1 } from "uuid";

export type ChangeCountAT = {
  type: 'COUNT-VALUE',
  countValue: number
}

export type MaxValueAT = {
  type: 'MAX-VALUE',
  maxValue: number
}

export type StartValueAT = {
  type: 'START-VALUE',
  startValue: number
}

export type MaxValueInputAT = {
  type: 'MAX-INPUT-VALUE',
  inputValueMax: number
}

export type StartValueInputAT = {
  type: 'START-INPUT-VALUE',
  inputValueStart: number
}

export type MessageAT = {
  type: 'MESSAGE',
  message: "enter values and press 'set'" | "Incorrect value!"
}

export type ActionTypes =   ChangeCountAT |
                            MaxValueAT |
                            StartValueAT |
                            MaxValueInputAT |
                            StartValueInputAT |
                            MessageAT

export type AppStateType = {
  countValue: number
  maxValue: number
  startValue: number
  disable: boolean
  inputValueMax: number
  inputValueStart: number
  message: "enter values and press 'set'" | "Incorrect value!"
}

const initialState: AppStateType = {
  countValue: 0,
  maxValue: 0,
  startValue: 0,
  disable: false,
  inputValueMax: 0,
  inputValueStart: 0,
  message: "enter values and press 'set'",
}


export const counterReducer = (state: AppStateType = initialState, action: ActionTypes): AppStateType => {
  switch (action.type) {
      case 'COUNT-VALUE':
          return {...state, countValue: action.countValue}
      case 'MAX-VALUE':
          return {...state, maxValue: action.maxValue}
      case 'START-VALUE':
          return {...state, startValue: action.startValue}
      case 'MAX-INPUT-VALUE':
          return {...state, inputValueMax: action.inputValueMax}
      case 'START-INPUT-VALUE':
          return {...state, inputValueStart: action.inputValueStart}
      case 'MESSAGE':
          return {...state, message: action.message}
      default:
          return state
  }
}


export const countValueAC = (countValue: number): ChangeCountAT => {
  return { type: 'COUNT-VALUE', countValue}
}
export const maxValueAC = (maxValue: number): MaxValueAT => {
  return { type: 'MAX-VALUE', maxValue}
}
export const startValueAC = (startValue: number): StartValueAT => {
  return { type: 'START-VALUE', startValue}
}
export const inputValueMaxAC = (inputValueMax: number): MaxValueInputAT => {
  return { type: 'MAX-INPUT-VALUE', inputValueMax}
}
export const inputValueStartAC = (inputValueStart: number): StartValueInputAT => {
  return { type: 'START-INPUT-VALUE', inputValueStart}
}
export const messageValueChangedAC = (message: "enter values and press 'set'" | "Incorrect value!"): MessageAT => {
  return { type: 'MESSAGE', message}
}
