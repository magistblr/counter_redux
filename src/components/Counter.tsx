import React, { useState } from 'react'
import { Button } from './Button'
import s from "./Display.module.css"
import ss from './Button.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { AppRootStateType } from '../redux/store'
import { countValueAC,  MessageType } from '../redux/counterReducer'




export const Counter = () => {

  const dispatch = useDispatch()
  let startValue = useSelector<AppRootStateType, number>( state => state.counter.startValue)
  let maxValue = useSelector<AppRootStateType, number>( state => state.counter.maxValue)
  let countValue = useSelector<AppRootStateType, number>( state => state.counter.countValue)
  let inputValueMax = useSelector<AppRootStateType, number>( state => state.counter.inputValueMax)
  let inputValueStart = useSelector<AppRootStateType, number>( state => state.counter.inputValueStart)
  let message = useSelector<AppRootStateType, MessageType>( state => state.counter.message)
  let incorrectValue = useSelector<AppRootStateType, boolean>( state => state.counter.incorrectValue)
  let disabled = useSelector<AppRootStateType, boolean>( state => state.counter.disabled)


  let [disableInc, setDisableInc] = useState<boolean>(disabled)
  let [disableReset, setDisableReset] = useState<boolean>(disabled)

  function addCount(){
    if(countValue === inputValueMax){
      setDisableInc(true)
    }
    if(countValue < maxValue){
      dispatch(countValueAC(countValue + 1))
      setDisableReset(false)
    }
  }

  function resetCount(){
    dispatch(countValueAC(startValue))
    setDisableReset(true)
    setDisableInc(false)
  }

console.log(disableInc);


  return (
    <div className={s.app_wrapper}>
      <div className={s.app}>
        <div className={s.display}>
          <div className={s.wrapper_display}>
               { message === ""
                      ? <span className={s.number}>{countValue}</span>
                      : <span className={s.incorrect}>{message}</span>
               }
          </div>
        </div>
        <div className={ss.counter_wrapper}>
          <Button disable={disableInc} name={"inc"} onclick={addCount}/>
          <Button disable={disableReset} name={"reset"} onclick={resetCount}/>
        </div>
      </div>
    </div>
  )
}

