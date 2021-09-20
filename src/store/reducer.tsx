import * as type from "./type";
import React from "react";
const dummy: type.data = {
  data: [
    {
      uname: "vismay",
      age: 22,
    },
    {
      uname: "prakash",
      age: 22,
    },
  ],
};

function reducer(state = dummy, action: any) {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        data: state.data.concat(action.data),
      };
    case "DEL":
      return {
        ...state,
        data: state.data.filter((data) => data.uname !== action.name),
      };
    default:
      return state;
  }
}
export default reducer;
