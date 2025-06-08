import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import "./global.css";
import "leaflet/dist/leaflet.css";
import { Kanit } from "next/font/google";
import { Hind } from "next/font/google";
import Footer from "./components/footer/Footer";
import ObserverProvider from "./components/provider/ObserverProvider";
import Header from "./components/nav/Header";

const kanit = Kanit({
  weight: ["100", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-headingss",
});

const hind = Hind({
  weight: ["300", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ObserverProvider>
      <html className={`${kanit.variable} ${hind.variable} `} lang="en">
        <body>
          <Header />
          {children}

          <Footer />
        </body>
        <PrismicPreview repositoryName={repositoryName} />
      </html>
    </ObserverProvider>
  );
}
