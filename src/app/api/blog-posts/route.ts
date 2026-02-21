import { NextResponse } from "next/server";
import { readAdminBlogPosts } from "@/lib/adminBlogStore";

export async function GET() {
  const posts = await readAdminBlogPosts();
  return NextResponse.json({ posts });
}
