import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "أنمي عربي - مشاهدة وتحميل الأنمي المترجم",
  description: "موقع أنمي عربي لمشاهدة وتحميل أحدث حلقات الأنمي المترجمة بجودة عالية",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className="dark">
      <body className="min-h-screen bg-background antialiased">
        {children}
      </body>
    </html>
  );
}
