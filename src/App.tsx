import React from 'react';
import './App.module.css';
import { Counter } from './components/Counter';
import s from "./App.module.css"
import { Settings } from './components/Settings';





export const App = () => {


  return (
    <div className={s.app_wrapper}>
        <Settings />
        <Counter />
    </div>
  );
}

