import { expect, it, describe } from "vitest";
import { renderHook } from "@testing-library/react-hooks";
import useDefine from "@/hooks/useDefine";

describe("useName", () => {
  it("should fetch nsw", async () => {
    const { result } = renderHook(() => useDefine());

    expect(result.current.NODE_ENV).toBe("vitest");
    expect(result.current.plugin).toBe(true);
    expect(result.current.window).toBe("__FROM_WINDOW__");
  });
});
