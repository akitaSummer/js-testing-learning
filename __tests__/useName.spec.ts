import { expect, it, describe } from "vitest";
import { renderHook } from "@testing-library/react-hooks";
import useName from "@/hooks/useName";
import { waitForRequest } from "./utils";

describe("useName", () => {
  it("should fetch nsw", async () => {
    const pendingRequest = waitForRequest("GET", "/api/name/:name");
    const { result, waitForNextUpdate } = renderHook(() => useName("akita"));

    expect(result.current.error).toBe(undefined);
    expect(result.current.isLoading).toBe(true);
    expect(result.current.name).toBe("");

    await pendingRequest;

    await waitForNextUpdate();

    expect(result.current.isLoading).toBe(false);
    expect(result.current.name).toBe("akita");
  });
});
