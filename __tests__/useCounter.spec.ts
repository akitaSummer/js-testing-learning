import { expect, it, describe } from "vitest";
import { renderHook } from "@testing-library/react-hooks";
import useCounter from "@/hooks/useCounter";

describe("useCounter", () => {
  it("should return default count is 0", () => {
    const { result } = renderHook(() => useCounter());

    expect(result.current.count).toBe(0);
  });

  it("increment will change count to be 1", () => {
    const { result } = renderHook(() => useCounter());

    expect(result.current.count).toBe(0);

    result.current.increment();

    expect(result.current.count).toBe(1);
  });

  it("decrement will change count to be -1", () => {
    const { result } = renderHook(() => useCounter());

    expect(result.current.count).toBe(0);

    result.current.decrement();

    expect(result.current.count).toBe(-1);
  });
});
