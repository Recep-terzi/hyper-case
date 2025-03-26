'use client'
import type { Metadata } from "next";
import "./globals.css";
import { store } from "@/redux/store";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import Navbar from "@/components/Navbar/Navbar";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        <Provider store={store} >
      <Navbar />

        {children} </Provider>
        <ToastContainer position="top-right" autoClose={2000} />
      </body>
    </html>
  );
}
