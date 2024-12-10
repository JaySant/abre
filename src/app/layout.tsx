import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./styles/reset.css";
import "./styles/globals.css";
import "./styles/theme.css";

const jost = Jost({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Abre",
  description:
    "Apoiamos pessoas com esquizofrenia, seus familiares e amigos para uma jornada de inclusão e compreensão.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jost.className}>{children}</body>
    </html>
  );
}
