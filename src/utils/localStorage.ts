import { AppRootStateType } from "../redux/store";

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('inputValueMax');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state: AppRootStateType) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('inputValueMax', serializedState);
  } catch {
    // ignore write errors
  }
};