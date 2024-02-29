"use client";
import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ConvexClientProvider from "ConvexClientProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <ConvexClientProvider>
          <ChakraProvider>
            <Navbar />
            {children}
            <Footer />
          </ChakraProvider>
        </ConvexClientProvider>
      </body>
    </html>
  );
}
