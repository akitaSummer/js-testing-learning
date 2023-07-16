import fetch, { Request, Response } from "node-fetch";

if (!globalThis.fetch) {
  // Built-in lib.dom.d.ts expects `fetch(Request | string, ...)` but the web
  // fetch API allows a URL so node-fetch defines
  // `fetch(string | URL | Request, ...)`
  // @ts-expect-error
  globalThis.fetch = fetch;
  // Same as above, lib.dom.d.ts doesn't allow a URL to the Request constructor
  // @ts-expect-error
  globalThis.Request = Request;
  // Same as above, lib.dom.d.ts doesn't allow a URL to the Response constructor
  // @ts-expect-error
  globalThis.Response = Response;
}
