import { NextResponse, NextRequest } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { name: string } }
) {
  return NextResponse.json(
    { name: params.name },
    {
      status: 200,
    }
  );
}
