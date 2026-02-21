import { NextResponse } from "next/server";
import { readAdminContentBlocks } from "@/lib/adminContentStore";
import { readAdminAppConfig } from "@/lib/adminAppConfigStore";

export async function GET() {
  const [blocks, appConfig] = await Promise.all([
    readAdminContentBlocks(),
    readAdminAppConfig(),
  ]);

  const textOverrides: Record<string, string> = {};
  blocks.forEach((block) => {
    if (!block.key?.trim()) return;
    textOverrides[block.key.trim()] = block.body;
  });

  const appConfigMap: Record<string, string> = {};
  appConfig.forEach((item) => {
    if (!item.key?.trim()) return;
    appConfigMap[item.key.trim()] = item.value;
  });

  return NextResponse.json({
    textOverrides,
    appConfig: appConfigMap,
  });
}
