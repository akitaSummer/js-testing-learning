import { expect, it, describe } from "vitest";
import {
  WrapperComponent,
  renderHook,
  act,
} from "@testing-library/react-hooks";
import useModal from "@/hooks/useModal";

describe("useModal", () => {
  it("test zustand", () => {
    const { result } = renderHook(() => useModal());

    expect(result.current.bears).toBe(0);

    result.current.decrease();

    expect(result.current.bears).toBe(-1);

    result.current.increase();

    result.current.increase();

    expect(result.current.bears).toBe(1);

    result.current.reset();

    expect(result.current.bears).toBe(0);
  });
});
