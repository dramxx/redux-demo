import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, incrementMore, decrement } from "./actions";

import { layoutStyle, headingStyle, buttonStyle } from "./styles";

const App = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);

  return (
    <div className="App" style={layoutStyle}>
      <h1 style={headingStyle}>counter: {counter}</h1>
      <div>
        <button style={buttonStyle} onClick={() => dispatch(increment())}>
          +
        </button>
        <button style={buttonStyle} onClick={() => dispatch(incrementMore(5))}>
          ++
        </button>
        <button style={buttonStyle} onClick={() => dispatch(decrement())}>
          -
        </button>
      </div>
    </div>
  );
};

export default App;
