[redux-devtools](https://github.com/reduxjs/redux-devtools/blob/master/docs/Walkthrough.md#manual-integration)

window.**REDUX_DEVTOOLS_EXTENSION** && window.**REDUX_DEVTOOLS_EXTENSION**()

```javascript
import { createStore } from "redux";

// ACTION
// function which returns object with some name
const increment = () => {
  return {
    type: "INCREMENT",
  };
};

const decrement = () => {
  return {
    type: "DECREMENT",
  };
};

// REDUCER
// defines what needs to be done after dispatching particular action
const counter = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return ++state;
    case "DECREMENT":
      return --state;
  }
};

let store = createStore(counter);

// LOGGING
// optput to console
store.subscribe(() => console.log(store.getState()));

// DISPATCH
// call reducer
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(decrement());
```
