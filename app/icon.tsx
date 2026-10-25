import { ImageResponse } from "next/og";
import { IconMark } from "@/components/icon-mark";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

/** Favicon (PNG) generated from the logo mark; Next links it as <link rel="icon">. */
export default function Icon() {
  return new ImageResponse(<IconMark size={64} />, size);
}
