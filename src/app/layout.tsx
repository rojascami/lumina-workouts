import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";

import React from "react";

import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

import "@/styles/globals.scss";
import "@/styles/typhography.scss";

const inter = Inter({ subsets: ["latin"] });
const roboto  = Roboto({ 
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap'
});

type SearchParamProps = {
  searchParams: Record<string, string> | null | undefined;
};


export const metadata: Metadata = {
  title: "Lumina - your workout, your freedom.",
  description: "Your app for tracking your workouts and staying motivated."
};

export default function RootLayout(props:{
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <html lang="en">
        <body className="container">
    <Sidebar />
    <Header />
    {props.children}
    {props.modal}
    <div id="modal-root" />
    <Footer />
  </body>
    </html>
  );
}
