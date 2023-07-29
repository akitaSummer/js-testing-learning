import { DefaultBodyType, matchRequestUrl, MockedRequest } from "msw";
import { server } from "./server";

let defaultCookie = document.cookie;

export const setMockCookie = (val: string) => {
  document.cookie = val;
};

export const clearMockCookie = () => {
  document.cookie = defaultCookie;
};

export const sleep = (ms: number) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(null);
    }, ms);
  });

export const waitForRequest = (method: string, url: string) => {
  let requestId = "";
  return new Promise<MockedRequest>((resolve, reject) => {
    const onStart = (req: MockedRequest<DefaultBodyType>) => {
      const matchesMethod = req.method.toLowerCase() === method.toLowerCase();
      const matchesUrl = matchRequestUrl(req.url, url).matches;
      if (matchesMethod && matchesUrl) {
        requestId = req.id;
      }
    };
    const onMatch = (req: MockedRequest<DefaultBodyType>) => {
      if (req.id === requestId) {
        reset();
        resolve(req);
      }
    };
    const onUnhandled = (req: MockedRequest<DefaultBodyType>) => {
      if (req.id === requestId) {
        reset();
        reject(
          new Error(`The ${req.method} ${req.url.href} request was unhandled.`)
        );
      }
    };
    const reset = () => {
      server.events.removeListener("request:start", onStart);
      server.events.removeListener("request:match", onMatch);
      server.events.removeListener("request:unhandled", onUnhandled);
    };

    server.events.on("request:start", onStart);

    server.events.on("request:match", onMatch);

    server.events.on("request:unhandled", onUnhandled);
  });
};
