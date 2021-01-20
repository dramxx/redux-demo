const increment = () => {
  return {
    type: "INCREMENT",
  };
};

const incrementMore = (multiplier) => {
  return {
    type: "INCREMENT_MORE",
    payload: multiplier,
  };
};

const decrement = () => {
  return {
    type: "DECREMENT",
  };
};

export { increment, incrementMore, decrement };
