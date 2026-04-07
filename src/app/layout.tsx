import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

export const metadata: Metadata = {
  title: "ReVa Agro | Implementos Agrícolas en Armstrong",
  description: "Especialistas en fabricación de grúas hidráulicas El Cóndor y tanques de combustible Titán. Calidad nacional desde Armstrong, Santa Fe.",
  keywords: ["maquinaria agricola", "armstrong santa fe", "tanques de combustible", "gruas hidraulicas", "reva agro", "implementos agricolas"],
  authors: [{ name: "Hugo Varela & Santiago Recrocio" }],
  openGraph: {
    title: "ReVa Agro - Maquinaria de Alta Resistencia",
    description: "Equipos diseñados para el campo argentino.",
    images: ["/images/reva-agro-logo-nuevo-blanco.png"],
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="antialiased selection:bg-red-600 selection:text-white bg-zinc-50">
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}