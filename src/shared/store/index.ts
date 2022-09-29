import {combineReducers, createStore} from 'redux'

import signUp from "./signUp";

const reducers = combineReducers({
    signUp
})

export type AppStateType = ReturnType<typeof reducers>
export type AppDispatch = typeof store.dispatch

const store = createStore(reducers)
export default store

// @ts-ignore
window.store = store