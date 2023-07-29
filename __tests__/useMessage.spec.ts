import { expect, it, describe, vi } from "vitest";
import { renderHook } from "@testing-library/react-hooks";
import useMessage from "@/hooks/useMessage";

const mocks = vi.hoisted(() => {
  return {
    mockFn: vi.fn(),
  };
});

vi.mock("antd", async () => {
  return {
    message: {
      info: mocks.mockFn,
    },
  };
});

describe("useMessage", () => {
  it("test module function", async () => {
    const { result } = renderHook(() => useMessage());

    result.current.info("This is a normal message");

    expect(mocks.mockFn).toHaveBeenCalledWith("This is a normal message");
  });
});
