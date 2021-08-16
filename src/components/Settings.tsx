import React, { ChangeEvent, useEffect, useState } from 'react';
import { Button } from './Button';
import s from './Display.module.css';
import ss from './Button.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { AppRootStateType } from '../redux/store';
import { inputValueMaxAC, inputValueStartAC, maxValueAC, messageValueChangedAC, startValueAC } from '../redux/counterReducer';


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
  let disable = useSelector<AppRootStateType, boolean>( state => state.counter.disable)
  let startValue = useSelector<AppRootStateType, number>( state => state.counter.startValue)
  let maxValue = useSelector<AppRootStateType, number>( state => state.counter.maxValue)
  let countValue = useSelector<AppRootStateType, number>( state => state.counter.countValue)
  let message = useSelector<AppRootStateType, string>( state => state.counter.message)

  let [valueStart, setValueStart] = useState(inputValueStart)
  let [valueMax, setValueMax] = useState(inputValueMax)

  const inputMessage = valueMax >= 0 || valueMax

  const onChangeStartHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValueStart(Number(e.currentTarget.value))
    // dispatch(messageValueChangedAC())
  };

  const onChangeMaxHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValueMax(Number(e.currentTarget.value))
    // dispatch(messageValueChangedAC())
  };

  const onSetCount = () => {
    dispatch(startValueAC(startValue = valueStart))
    dispatch(maxValueAC(maxValue = valueMax))
    dispatch(inputValueStartAC(inputValueStart = valueStart))
    dispatch(inputValueMaxAC(inputValueMax = valueMax))
  }

  // let inputClass = incorrectClass ? s.input_incorrect : s.input;

  return (
    <div className={s.wrapper}>
      <div className={s.app}>
        <div className={s.display}>
          <div className={s.wrapper_input}>
            <span className={s.text}>max value</span>
            <input
              className={s.input}
              onChange={onChangeMaxHandler}
              type="number"
              step="1"
              value={valueMax}
            />
          </div>
          <div className={s.wrapper_input}>
            <span className={s.text}>start value</span>
            <input
              className={s.input}
              onChange={onChangeStartHandler}
              type="number"
              step="1"
              value={valueStart}
            />
          </div>
        </div>
        <div className={ss.settings_wrapper}>
          <Button disable={disable} name={"set"} onclick={onSetCount}/>
        </div>
      </div>
    </div>
  );
};
