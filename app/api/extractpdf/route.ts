import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import pdfparser from "pdf-parse";

export async function POST(req: NextRequest) {
  const filePath = "./profile.pdf";

  try {
    if (!fs.existsSync(filePath)) {
      console.error("File not found:", filePath);
      return NextResponse.json("File not found", { status: 404 });
    }

    const dataBuffer = fs.readFileSync(filePath);

    const data = await pdfparser(dataBuffer);

    return NextResponse.json(data.text);
  } catch (error) {
    console.error("Unexpected error:", error);
    return NextResponse.json("Internal Server Error", { status: 500 });
  }
}
