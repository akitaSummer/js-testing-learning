import { beforeAll, afterEach, afterAll, vi } from "vitest";
import { server } from "./server";
import "whatwg-fetch";

vi.mock("next/server", async () => {
  const { Request, Response } = await import("node-fetch");
  return {
    NextRequest: Request,
    NextResponse: Response,
  };
});

beforeAll(() => {
  vi.stubGlobal("__FROM_WINDOW__", "__FROM_WINDOW__");
  vi.stubEnv("NODE_ENV", "vitest");

  server.listen();
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});
