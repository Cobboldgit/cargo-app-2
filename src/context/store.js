import { combineReducers, configureStore } from "@reduxjs/toolkit";
import todoReducer from "./slices/todoSlice";
// import {} from 'redux-firestore'
// import {} from 'react-redux-firebase'
// import {} from 'react-redux'
// import {} from 'redux-thunk'
// import firebase from '../backend/firebase'

const rootReducer = {
  todos: todoReducer,
};

export default configureStore({
  reducer: rootReducer,
});
