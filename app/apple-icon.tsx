import { ImageResponse } from "next/og";
import { IconMark } from "@/components/icon-mark";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/** iOS home-screen icon generated from the logo mark. */
export default function AppleIcon() {
  return new ImageResponse(<IconMark size={180} radius={0} />, size);
}
