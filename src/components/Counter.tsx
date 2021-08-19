import React, { useEffect } from 'react'
import { Button } from './Button'
import s from "./Display.module.css"
import ss from './Button.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { AppRootStateType } from '../redux/store'
import { countValueAC,  disabledIncAC,  disabledResetAC,  MessageType } from '../redux/counterReducer'




export const Counter = () => {

  const dispatch = useDispatch()
  let startValue = useSelector<AppRootStateType, number>( state => state.counter.startValue)
  let maxValue = useSelector<AppRootStateType, number>( state => state.counter.maxValue)
  let countValue = useSelector<AppRootStateType, number>( state => state.counter.countValue)
  let inputValueMax = useSelector<AppRootStateType, number>( state => state.counter.inputValueMax)
  let inputValueStart = useSelector<AppRootStateType, number>( state => state.counter.inputValueStart)
  let message = useSelector<AppRootStateType, MessageType>( state => state.counter.message)
  let disabledSet = useSelector<AppRootStateType, boolean>( state => state.counter.disabledSet)
  let disabledInc = useSelector<AppRootStateType, boolean>( state => state.counter.disabledInc)
  let disabledReset = useSelector<AppRootStateType, boolean>( state => state.counter.disabledReset)


  function addCount(){
      if(countValue < maxValue){
        dispatch(countValueAC(countValue + 1))
        dispatch(disabledResetAC(false))
      }
    }


    useEffect(() => {
      dispatch(countValueAC(countValue = inputValueStart))
    },[disabledSet])


  function resetCount(){
    dispatch(countValueAC(startValue))
    dispatch(disabledResetAC(true))
    dispatch(disabledIncAC(false))
  }

  const spanClassMessage = countValue === maxValue ? (`${s.number} ${s.incorrect}`) : s.number
  const spanClass = message === "enter values and press 'set'" ? s.correct_message : (`${s.correct_message} ${s.incorrect}`)
  const spanMessages = message === "enter values and press 'set'" ? "enter values and press 'set'" : "Incorrect value!"

  return (
    <div className={s.app_wrapper}>
      <div className={s.app}>
        <div className={s.display}>
          <div className={s.wrapper_display}>
              { message === ""
                      ? <span className={spanClassMessage}>{countValue}</span>
                      : <span className={spanClass}>{spanMessages}</span>
              }
          </div>
        </div>
        <div className={ss.counter_wrapper}>
          <Button disable={disabledInc} name={"inc"} onclick={addCount}/>
          <Button disable={disabledReset} name={"reset"} onclick={resetCount}/>
        </div>
      </div>
    </div>
  )
}

