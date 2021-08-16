import React, { useEffect, useState } from 'react';
import { TitleType } from '../App';
import s from './Button.module.css';

export type ButtonType = {
  descr: TitleType
  callback: (value: string) => void
  count: number
  maxValue: number
  incorrectClass: boolean
  startValue: number
  text: string
  disableSet: boolean
};


export const Button: React.FC<ButtonType> = ({descr, callback, count, maxValue, incorrectClass, startValue, disableSet}) => {

  let [valueButton, setValueButton] = useState<TitleType>("")


  useEffect(() => {
    if(descr === "inc"){
      valueButton = "inc"
      setValueButton(valueButton)
    }if(descr === "reset"){
      valueButton = "reset"
      setValueButton(valueButton)
    }if(descr === "set"){
      valueButton = "set"
      setValueButton(valueButton)
    }
  }, [])


  const onclick = () => {
    if(valueButton === "inc"){
      callback("inc")
    }if(valueButton === "reset"){
      callback("reset")
    }if(valueButton === "set"){
      callback("set")
    }
  }

  const disable = () => {
    if((valueButton === "inc") && ((!disableSet) || (count === maxValue) || incorrectClass)){
      return true
    }if((valueButton === "reset") && ((count <= startValue) || (!disableSet) || incorrectClass)){
      return true
    }if((valueButton === "set") && (disableSet) || incorrectClass){
      return true
    } else return false
  }




  return (
    <div className={s.btn_wrapper}>
      <button
        onClick={() => {onclick()}}
        className={s.btn}
        disabled={disable()}
        >
        {valueButton}
      </button>
    </div>
  );
};
