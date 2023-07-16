import { useState, useCallback } from "react";

export default function useCounter() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  const decrement = useCallback(() => {
    setCount(count - 1);
  }, [count]);

  return {
    count,
    increment,
    decrement,
  };
}
