import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function GET() {
  const client = await clientPromise;
  const db = client.db();
  const docs = await db
    .collection<{ linkId: string; count: number }>("linkClicks")
    .find({})
    .toArray();

  const counts = Object.fromEntries(docs.map((doc) => [doc.linkId, doc.count]));

  return NextResponse.json(counts);
}
