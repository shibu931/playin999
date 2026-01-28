import { Inter, Merriweather } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter', 
})

const merriweather = Merriweather({
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-merriweather', 
})

export const metadata = {
  metadataBase: new URL("https://playin999.com"),
  applicationName: "PlayIN999",
  authors: [{ name: "PlayIN999 Team" }],
  creator: "PlayIN999",
  publisher: "PlayIN999",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    siteName: "PlayIN999",
    locale: "en_IN",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${merriweather.variable}`}
      >
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
