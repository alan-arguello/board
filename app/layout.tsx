import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Torrenegra & Co | Business review",
  description:
    "Revisión interna de la tesis, los experimentos, la audiencia y la economía observada de Torrenegra & Co.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
