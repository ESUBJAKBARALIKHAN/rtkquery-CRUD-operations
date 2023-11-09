import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, incrementBy } from "../redux/counterSlice";

const Couter = () => {
  const count = useSelector((store) => store.counter.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>count-{count}</h1>
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
      <button onClick={() => dispatch(incrementBy(100))}>incrementBy</button>
    </div>
  );
};

export default Couter;
