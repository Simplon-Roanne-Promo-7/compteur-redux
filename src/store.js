import { configureStore } from "@reduxjs/toolkit";

let initialState = { counter: 1, name: "Toto" };

let reducer = (state = initialState, action) => {
  console.log(state, action);
  switch (action.type) {
    case "INCREMENT":
      return { ...state, counter: state.counter + action.payload };
    default:
      return state;
  }
};

let store = configureStore({ reducer });

export default store;
