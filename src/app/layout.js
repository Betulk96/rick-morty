import { Orbitron, Space_Mono } from "next/font/google";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import "@/styles/index.scss";
const inter = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "Rick&Morty ",
  description: "Rick & Morty API",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icons/green.png" sizes="any" />
      </head>
      <body className={inter.className}>
        <div className="page-container">
          <Header />
          <main className="content-wrapper" style={{ backgroundColor: "#202020", backgroundImage: "url(/images/star.jpg)"  , backgroundSize: "cover" , backgroundPosition: "center" }}>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
