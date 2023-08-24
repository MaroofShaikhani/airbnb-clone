import "./globals.css";
import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import { Nunito } from "next/font/google";
import Navbar from "./components/navbar/Navbar";
import ClientOnly from "./components/ClientOnly";
import Modal from "./components/modals/Modal";

// const inter = Inter({ subsets: ["latin"] });
const nunito = Nunito({
   subsets: ["latin"],
});

export const metadata: Metadata = {
   title: "AirBnb",
   description: "Airbnb Clone",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
   return (
      <html lang="en">
         <body className={nunito.className}>
            <ClientOnly>
               <Modal isOpen title="Login" />
               <Navbar />
            </ClientOnly>
            {children}
         </body>
      </html>
   );
}
