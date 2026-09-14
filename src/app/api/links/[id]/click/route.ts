import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function POST(
  _request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const client = await clientPromise;
  const db = client.db();

  const result = await db
    .collection<{ linkId: string; count: number }>("linkClicks")
    .findOneAndUpdate(
      { linkId: id },
      { $inc: { count: 1 } },
      { upsert: true, returnDocument: "after" },
    );

  return NextResponse.json({ count: result?.count ?? 1 });
}