import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "我的阿勒泰 · VibeCoding 经验分享",
  description: "旷野风格的《我的阿勒泰》VibeCoding 经验分享 H5",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
