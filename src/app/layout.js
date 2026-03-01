import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Whatsappicon from "./Components/Whatsappicon";
import MetaPixel from "./Components/MetaPixel";
import RouteChangeTracker from "./Components/RouteChangeTracker";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://www.codewareit.in"),

  title:
    "Best Java, Python, C Language & MERN Stack Institute in Dehradun | Codeware IT Pvt Ltd",

  description:
    "Looking for the best Java institute in Dehradun or best Python institute in Dehradun? Join Codeware IT Pvt Ltd for MERN Stack, C language, AI training & IT internships in Dehradun.",

  keywords: [
    "best java institute in dehradun",
    "best python institute in dehradun",
    "best c language institute in dehradun",
    "mern stack institute in dehradun",
    "internship in IT in dehradun",
    "learn AI in dehradun",
    "IT training institute in dehradun",
    "coding classes in dehradun",
    "software development internship dehradun",
    "best computer institute in dehradun"
  ],

  openGraph: {
    title:
      "Best Java, Python, C & AI Institute in Dehradun | Codeware IT",
    description:
      "Top coding institute in Dehradun offering Java, Python, C language, MERN Stack & AI courses with IT internships.",
    url: "https://www.codewareit.in",
    siteName: "Codeware IT Pvt Ltd",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Best Programming Institute in Dehradun",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Best Coding & AI Institute in Dehradun",
    description:
      "Join Codeware IT Pvt Ltd for Java, Python, C language, AI & IT internships in Dehradun.",
    images: ["/og-image.jpg"],
    creator: "@codewareit",
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },

  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <MetaPixel />
        <RouteChangeTracker />
        <Navbar />
        {children}
        <Whatsappicon />
        <Footer />
      </body>
    </html>
  );
}