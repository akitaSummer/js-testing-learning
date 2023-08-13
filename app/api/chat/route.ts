import dotenv from "dotenv";
import { NextResponse, NextRequest } from "next/server";
import { initTranslator, translate } from "./translator";

dotenv.config();
initTranslator();

export async function POST(req: NextRequest) {
  const { message, todos } = await req.json();
  const result = await translate(message, todos);
  return NextResponse.json(
    { result },
    {
      status: 200,
    }
  );
}
