import { expect, it, describe } from "vitest";
import {
  WrapperComponent,
  renderHook,
  act,
} from "@testing-library/react-hooks";
import { useStep, StepContext } from "@/hooks/useStep";
import React from "react";

const wrapper: WrapperComponent<{
  step: number;
  children?: React.ReactNode;
}> = ({ children, step }) => (
  <StepContext.Provider value={{ step }}>{children}</StepContext.Provider>
);

describe("useStep", () => {
  it("should use custom step when incrementing", () => {
    const { result, rerender } = renderHook(() => useStep(1), {
      wrapper,
      initialProps: {
        step: 2,
      },
    });

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(3);

    rerender({ step: 7 });

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(10);
  });
});
