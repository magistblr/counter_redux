import React, { ChangeEvent, useEffect, useState } from 'react';
import { Button } from './Button';
import s from './Display.module.css';
import ss from './Button.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { AppRootStateType } from '../redux/store';
import { disabledIncAC, disabledResetAC, disabledSetAC, inputValueMaxAC, inputValueStartAC, maxValueAC, messageValueChangedAC, startValueAC } from '../redux/counterReducer';



export const Settings = () => {

  // useEffect(() => {
  //   let valueStorageMax = localStorage.getItem('maxValue');
  //   if (valueStorageMax) {
  //     let newValueMax = JSON.parse(valueStorageMax);
  //     setValueMax(newValueMax);
  //   }
  //   let valueStorageStart = localStorage.getItem('startValue');
  //   if (valueStorageStart) {
  //     let newValueStart = JSON.parse(valueStorageStart);
  //     setValueStart(newValueStart);
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem('maxValue', JSON.stringify(valueMax));
  //   localStorage.setItem('startValue', JSON.stringify(valueStart));
  // }, [valueMax, valueStart]);

  const dispatch = useDispatch()
  let inputValueMax = useSelector<AppRootStateType, number>( state => state.counter.inputValueMax)
  let inputValueStart = useSelector<AppRootStateType, number>( state => state.counter.inputValueStart)
  let startValue = useSelector<AppRootStateType, number>( state => state.counter.startValue)
  let maxValue = useSelector<AppRootStateType, number>( state => state.counter.maxValue)
  let countValue = useSelector<AppRootStateType, number>( state => state.counter.countValue)
  let message = useSelector<AppRootStateType, string>( state => state.counter.message)
  let disabledSet = useSelector<AppRootStateType, boolean>( state => state.counter.disabledSet)
  let disabledInc = useSelector<AppRootStateType, boolean>( state => state.counter.disabledInc)
  let disabledReset = useSelector<AppRootStateType, boolean>( state => state.counter.disabledReset)

  let [valueStart, setValueStart] = useState(inputValueStart)
  let [valueMax, setValueMax] = useState(inputValueMax)

  useEffect(() => {
    if(countValue === inputValueMax){
      dispatch(disabledIncAC(true))
    }
  }, [countValue])


  const onChangeStartHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValueStart(Number(e.currentTarget.value))
    dispatch(messageValueChangedAC("enter values and press 'set'"))
    dispatch(disabledSetAC(false))
    dispatch(disabledIncAC(true))
    dispatch(disabledResetAC(true))
  };

  const onChangeMaxHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValueMax(Number(e.currentTarget.value))
    dispatch(messageValueChangedAC("enter values and press 'set'"))
    dispatch(disabledSetAC(false))
    dispatch(disabledIncAC(true))
    dispatch(disabledResetAC(true))
  };

  useEffect(() => {
    if((valueMax < 0) || (valueStart < 0) || (valueMax <= valueStart)){
      dispatch(messageValueChangedAC(message = "Incorrect value!"))
      dispatch(disabledSetAC(true))
      dispatch(disabledIncAC(true))
      dispatch(disabledResetAC(true))
      }
  })


  const onSetCount = () => {
    dispatch(startValueAC(valueStart))
    dispatch(maxValueAC(valueMax))
    dispatch(inputValueStartAC(valueStart))
    dispatch(inputValueMaxAC(valueMax))
    dispatch(messageValueChangedAC(message = ""))
    dispatch(disabledSetAC(true))
    dispatch(disabledIncAC(false))
    dispatch(disabledResetAC(false))
  }

  const inputClass = message === "Incorrect value!" ? s.input_incorrect : s.input;

  return (
    <div className={s.wrapper}>
      <div className={s.app}>
        <div className={s.display}>
          <div className={s.wrapper_input}>
            <span className={s.text}>max value</span>
            <input
              className={inputClass}
              onChange={onChangeMaxHandler}
              type="number"
              step="1"
              value={valueMax}
            />
          </div>
          <div className={s.wrapper_input}>
            <span className={s.text}>start value</span>
            <input
              className={inputClass}
              onChange={onChangeStartHandler}
              type="number"
              step="1"
              value={valueStart}
            />
          </div>
        </div>
        <div className={ss.settings_wrapper}>
          <Button disable={disabledSet} name={"set"} onclick={onSetCount}/>
        </div>
      </div>
    </div>
  );
};
