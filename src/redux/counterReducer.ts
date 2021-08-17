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
  message: MessageType
}

export type incorrectValueAT = {
  type: 'INCORRECT-VALUE',
  value: boolean
}

export type disabledValueAT = {
  type: 'DISABLED-VALUE',
  value: boolean
}

export type ActionTypes =   ChangeCountAT |
                            MaxValueAT |
                            StartValueAT |
                            MaxValueInputAT |
                            StartValueInputAT |
                            MessageAT |
                            incorrectValueAT |
                            disabledValueAT

export type AppStateType = {
  countValue: number
  maxValue: number
  startValue: number
  inputValueMax: number
  inputValueStart: number
  message: MessageType
  incorrectValue: boolean
  disabled: boolean
}

export type MessageType = "enter values and press 'set'" | "Incorrect value!" | ""

const initialState: AppStateType = {
  countValue: 0,
  maxValue: 0,
  startValue: 0,
  inputValueMax: 0,
  inputValueStart: 0,
  disabled: true,
  message: "",
  incorrectValue: false,
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
      case 'INCORRECT-VALUE':
          return {...state, incorrectValue: action.value}
      case 'DISABLED-VALUE':
          return {...state, disabled: action.value}
      default:
          return state
  }
}


export const countValueAC = (countValue: number): ChangeCountAT => {
  return { type: 'COUNT-VALUE', countValue} as const
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
export const messageValueChangedAC = (message: MessageType): MessageAT => {
  return { type: 'MESSAGE', message}
}
export const disabledValueAC = (value: boolean): disabledValueAT => {
  return { type: 'DISABLED-VALUE', value}
}
