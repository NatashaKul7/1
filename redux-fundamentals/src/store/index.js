import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import userAuthReducer from "./userAuthSlice";

// const counterReducer = (state = initialState, action) => {
//   if (action.type === "increment") {
//     return {
//       counter: state.counter + 1,
//       isCounterInvisible: state.isCounterInvisible,
//     };
//   }

//   if (action.type === "increase") {
//     return {
//       counter: state.counter + action.number,
//       isCounterInvisible: state.isCounterInvisible,
//     };
//   }

//   if (action.type === "decrement") {
//     return {
//       counter: state.counter - 1,
//       isCounterInvisible: state.isCounterInvisible,
//     };
//   }

//   if (action.type === "visibility") {
//     return {
//       counter: state.counter,
//       isCounterInvisible: !state.isCounterInvisible,
//     };
//   }

//   return state;
// };

const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: userAuthReducer,
  },
});

export default store;
