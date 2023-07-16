import { createMocks } from "node-mocks-http";
import { NextRequest, NextResponse } from "next/server";
import { expect, it, describe } from "vitest";
import { GET } from "@/app/api/name/[name]/route";

describe("/api/[name]", () => {
  it("GET", async () => {
    const { req } = createMocks<NextRequest, NextResponse>({
      method: "GET",
      params: {
        name: "akita",
      },
    });

    const res = await GET(req, { params: req.params });

    expect(res.status).toBe(200);
    expect(await res.json()).toEqual(
      expect.objectContaining({
        name: "akita",
      })
    );
  });
});

// if project is pages/api, this code will used
// import { createMocks } from "node-mocks-http";
// import { NextApiRequest, NextApiResponse } from "next";
// import { expect, it, describe } from "vitest";
// import nameHandler from "@/app/api/name/[name]";

// describe("/api/[name]", () => {
//   it("response name is request name", async () => {
//     const { req, res } = createMocks<NextApiRequest, NextApiResponse>({
//       method: "GET",
//       query: {
//         name: "akita",
//       },
//     });

//     await nameHandler(req, res);

//     expect(res._getStatusCode()).toBe(200);
//     expect(JSON.parse(res._getData())).toEqual(
//       expect.objectContaining({
//         name: "akita",
//       })
//     );
//   });
// });
