import "./globals.css";

export const metadata = {
  title: "Saina Beauty - Elegance. Confidence. You.",
  description: "Professional beauty and dental services in Turkey",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans text-gray-800 bg-white">{children}</body>
    </html>
  );
}
