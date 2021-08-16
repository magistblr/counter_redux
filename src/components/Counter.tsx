import React from 'react'
import { Button } from './Button'
import s from "./Display.module.css"
import ss from './Button.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { AppRootStateType } from '../redux/store'
import { countValueAC } from '../redux/counterReducer'




export const Counter = () => {

  const dispatch = useDispatch()
  let startValue = useSelector<AppRootStateType, number>( state => state.counter.startValue)
  let maxValue = useSelector<AppRootStateType, number>( state => state.counter.maxValue)
  let disable = useSelector<AppRootStateType, boolean>( state => state.counter.disable)
  let countValue = useSelector<AppRootStateType, number>( state => state.counter.countValue)
  let inputValueMax = useSelector<AppRootStateType, number>( state => state.counter.inputValueMax)
  let inputValueStart = useSelector<AppRootStateType, number>( state => state.counter.inputValueStart)
  let message = useSelector<AppRootStateType, "enter values and press 'set'" | "Incorrect value!">( state => state.counter.message)

  const incorrectMessage = "Incorrect value!"
  const value = (inputValueMax >= 0) || (inputValueMax > inputValueStart)

  function addCount(){
    if(countValue < maxValue){
      dispatch(countValueAC(countValue + 1))
    }
  }

  function resetCount(){
    dispatch(countValueAC(countValue = startValue))
  }



  return (
    <div className={s.app_wrapper}>
      <div className={s.app}>
        <div className={s.display}>
          <div className={s.wrapper_display}>
               { value
                      ? <span className={s.number}>{countValue}</span>
                      : <span className={s.incorrect}>{incorrectMessage}</span>
               }
          </div>
        </div>
        <div className={ss.counter_wrapper}>
          <Button disable={disable} name={"inc"} onclick={addCount}/>
          <Button disable={disable} name={"reset"} onclick={resetCount}/>
        </div>
      </div>
    </div>
  )
}

