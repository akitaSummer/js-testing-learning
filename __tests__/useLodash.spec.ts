import { expect, it, describe, vi } from "vitest";
import { renderHook } from "@testing-library/react-hooks";
import useLodash from "@/hooks/useLodash";

const mocks = vi.hoisted(() => {
  return {
    mockFn: vi.fn((a: number, b: number) => a + b),
  };
});

vi.mock("lodash", async () => {
  return {
    default: { add: mocks.mockFn },
    add: mocks.mockFn,
  };
});

describe("useLodash", () => {
  it("1 + 2 = 3", async () => {
    const { result } = renderHook(() => useLodash());

    result.current.add(1, 2);

    expect(mocks.mockFn).toHaveBeenCalledWith(1, 2);
    expect(mocks.mockFn).toHaveReturnedWith(3);
  });
});
