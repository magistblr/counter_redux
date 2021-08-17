import React, { ChangeEvent, useEffect, useState } from 'react';
import { Button } from './Button';
import s from './Display.module.css';
import ss from './Button.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { AppRootStateType } from '../redux/store';
import { countValueAC, disabledValueAC, inputValueMaxAC, inputValueStartAC, maxValueAC, messageValueChangedAC, startValueAC } from '../redux/counterReducer';



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
  let incorrectValue = useSelector<AppRootStateType, boolean>( state => state.counter.incorrectValue)
  let disabled = useSelector<AppRootStateType, boolean>( state => state.counter.disabled)

  let [valueStart, setValueStart] = useState(inputValueStart)
  let [valueMax, setValueMax] = useState(inputValueMax)
  let [disableSet, setDisableSet] = useState(false)


  function value() {
    if((valueMax < 0) || (valueStart < 0) || (valueMax <= valueStart)){
      dispatch(messageValueChangedAC("Incorrect value!"))
      dispatch(disabledValueAC(true))
    }
    if(((valueMax > 0) && (valueStart > 0)) || (valueMax > valueStart)){
      dispatch(messageValueChangedAC(""))
      dispatch(disabledValueAC(false))
    }

  }

  const onChangeStartHandler = (e: ChangeEvent<HTMLInputElement>) => {
    value()
    setValueStart(Number(e.currentTarget.value))
    setDisableSet(false)
  };

  const onChangeMaxHandler = (e: ChangeEvent<HTMLInputElement>) => {
    value()
    setValueMax(Number(e.currentTarget.value))
    setDisableSet(false)
  };


  // useEffect(() => {
  //   if((valueMax < 0) || (valueStart < 0) || (valueMax <= valueStart)){
  //     dispatch(messageValueChangedAC(message = "Incorrect value!"))
  //   }
  // }, [setValueStart, setValueMax])
console.log(valueStart);



  const onSetCount = () => {
    dispatch(startValueAC(valueStart))
    dispatch(maxValueAC(valueMax))
    dispatch(countValueAC(startValue))
    dispatch(inputValueStartAC(valueStart))
    dispatch(inputValueMaxAC(valueMax))
    setDisableSet(true)
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
          <Button disable={disableSet} name={"set"} onclick={onSetCount}/>
        </div>
      </div>
    </div>
  );
};
