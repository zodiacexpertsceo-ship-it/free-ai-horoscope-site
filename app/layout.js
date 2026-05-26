import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Zodiacexperts | Free Horoscope, Palmistry, Kundli & Tarot",
  description: "Professional free astrology portal for horoscope, palmistry, kundli-style reports, compatibility, tarot guidance, and zodiac insights."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
