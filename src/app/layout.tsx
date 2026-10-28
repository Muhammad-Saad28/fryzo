import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";
import CartNotificationModal from "@/components/cart/CartNotificationModal";

// Primary Body & Heading Font: Plus Jakarta Sans (Clean, Modern, Premium Swiss Geometric)
const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

// Editorial Label & Monospace Metadata Font: Space Grotesk (Architectural, High-Tech, Crisp)
const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "FRYZO | Premium Farm-to-Fryer French Fries",
  description: "Discover Pakistan's finest frozen french fries. Crafted from 100% farm-fresh potatoes with world-class blanching and rapid flash-freezing for the ultimate golden crunch.",
  keywords: ["Fryzo", "French Fries", "Frozen Fries", "Straight Cut", "Crinkle Cut", "Curly Fries", "Pakistan", "Farm to Fryer"],
  authors: [{ name: "Fryzo Foods" }],
  openGraph: {
    title: "FRYZO — The Signature French Fry Experience",
    description: "Healthy & Tasty Every Bite. Straight Cut, Crinkle Cut, and Curly Fries delivered fresh across Pakistan.",
    url: "https://fryzo.com.pk",
    siteName: "Fryzo",
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/logowithbg.png",
    shortcut: "/logowithbg.png",
    apple: "/logowithbg.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} ${spaceGrotesk.variable}`}>
      <body className="min-h-screen bg-brand-cream text-[#111311] font-sans antialiased selection:bg-brand-cyan selection:text-[#111311]">
        {children}
        <CartNotificationModal />
      </body>
    </html>
  );
}
