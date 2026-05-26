import "./globals.css";

export const metadata = {
  title: "FreeAura AI | Free Horoscope and Palm Reading",
  description: "Free AI horoscope, palm reading, love compatibility, and spiritual insight readings.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
