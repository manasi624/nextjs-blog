"use client"

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Providers } from './Providers'
import { ToastContainer } from 'react-toastify'
import { ShepherdTour, ShepherdTourContext } from "react-shepherd";
// import { steps } from "@/steps";


const tourOptions = {
  defaultStepOptions: {
    cancelIcon: {
      enabled: true,
    },
  },
  useModalOverlay: false,
};

import "react-toastify/dist/ReactToastify.css";

const inter = Inter({ subsets: ['latin'] })

// export const metadata: Metadata = {
//   title: "Blog App",
//   description: "A nice blog application",
// };


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {/* <ShepherdTour steps={steps} tourOptions={tourOptions} > */}
            <div className="w-screen overflow-y-scroll overflow-x-hidden bg-light_bg dark:bg-dark_bg">
              <div className="fixed top-0 z-100" style={{ zIndex: 100 }}>
                <Header />
              </div>
              <div className="flex flex-col p-4 text-black dark:text-white">
                {children}
              </div>
              <Footer />
              <ToastContainer autoClose={4000} />
            </div>
          {/* </ShepherdTour> */}
        </Providers>
      </body>
    </html>
  );
}
