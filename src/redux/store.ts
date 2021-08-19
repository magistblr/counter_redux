import { combineReducers, createStore } from "redux";
import { loadState, saveState } from "../utils/localStorage";
import { counterReducer } from "./counterReducer";


const rootReducer = combineReducers({
  counter: counterReducer,
})


export type AppRootStateType = ReturnType<typeof rootReducer>
export type AppStoreType = typeof store

export const store = createStore(rootReducer, loadState())


store.subscribe(() => {
  saveState({
    counter: store.getState().counter
  })
})

// @ts-ignore
window.store = store