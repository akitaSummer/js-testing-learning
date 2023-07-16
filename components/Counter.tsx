"use client";

import React from "react";
import useCounter from "@/hooks/useCounter";
import useName from "@/hooks/useName";

const Counter = () => {
  const { count, increment, decrement } = useCounter();
  const { name } = useName("akita");
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2" data-test="count">
          Count: {count}
        </div>
        <p className="text-gray-700 text-base">{name}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <button
          data-test="increment"
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
          onClick={() => increment()}
        >
          Increment
        </button>
        <button
          data-test="decrement"
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
          onClick={() => decrement()}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
