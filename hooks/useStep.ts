import React, { useState, useContext, useCallback } from "react";

export const StepContext = React.createContext({
  step: 1,
});

export function useStep(initialValue = 0) {
  const [count, setCount] = useState(initialValue);
  const { step } = useContext(StepContext);
  const increment = useCallback(() => setCount((x) => x + step), [step]);
  const reset = useCallback(() => setCount(initialValue), [initialValue]);
  return { count, increment, reset };
}
