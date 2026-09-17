import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ToastProvider } from "@/components/feedback/toast";
import { SITE_CONFIG } from "@/lib/config";

const serifFont = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const sansFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${SITE_CONFIG.name} | Inmobiliaria Premium en Santa Marta`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: `${SITE_CONFIG.name} — ${SITE_CONFIG.slogan}. Plataforma inmobiliaria premium en Santa Marta, Colombia. Compra, venta, arriendo e inversión en propiedades exclusivas.`,
  keywords: [
    "SERINMOBILIARIO",
    "Inmobiliaria Santa Marta",
    "Propiedades de lujo Santa Marta",
    "Bello Horizonte",
    "Playa Salguero",
    "Pozos Colorados",
    "El Rodadero",
    "Penthouses Santa Marta",
    "Inversión turística Colombia",
  ],
  icons: {
    icon: "/logo.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${serifFont.variable} ${sansFont.variable}`}>
      <body className="min-h-screen flex flex-col font-sans bg-[#FAF8F5]">
        <ToastProvider>
          <Navbar />
          <div className="flex-1">{children}</div>
          <Footer />
        </ToastProvider>
      </body>
    </html>
  );
}
