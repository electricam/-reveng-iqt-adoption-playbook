import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "RevEng Government Adoption Playbook",
  description:
    "Interview dashboard demo mapping RevEng to government mission owners and cyber adoption pathways.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
