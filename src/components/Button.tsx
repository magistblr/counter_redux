import React from 'react';
import s from './Button.module.css';

export type ButtonType = {
  onclick: () => void
  name: string
  disable: boolean
};


export const Button: React.FC<ButtonType> = ({name, onclick, disable}) => {


  return (
    <div className={s.btn_wrapper}>
      <button
        onClick={() => {onclick()}}
        className={s.btn}
        disabled={disable}
        >
        {name}
      </button>
    </div>
  );
};
