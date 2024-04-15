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
import Head from 'next/head'

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
      <Head>
        {/* HTML Meta Tags */}
        <title>This is Blog By Prathamesh Pawar, share it.</title>
        <meta name="description" content="Read beautiful Blogs everyday" />

        {/* Facebook Meta Tags */}
        <meta property="og:url" content="https://myblog-vert-zeta.vercel.app" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="This is Blog By Prathamesh Pawar, share it." />
        <meta property="og:description" content="Read beautiful Blogs everyday" />
        <meta property="og:image" content="https://opengraph.b-cdn.net/production/documents/9227961c-2855-4610-a260-c617aa0207a0.png?token=BIWWiAYN9bg1XTuEYTjD3FsDxeNLLVPoaO0CgwCSMwc&height=521&width=815&expires=33248594052" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="myblog-vert-zeta.vercel.app" />
        <meta property="twitter:url" content="https://myblog-vert-zeta.vercel.app" />
        <meta name="twitter:title" content="This is Blog By Prathamesh Pawar, share it." />
        <meta name="twitter:description" content="Read beautiful Blogs everyday" />
        <meta name="twitter:image" content="https://opengraph.b-cdn.net/production/documents/9227961c-2855-4610-a260-c617aa0207a0.png?token=BIWWiAYN9bg1XTuEYTjD3FsDxeNLLVPoaO0CgwCSMwc&height=521&width=815&expires=33248594052" />

      </Head>
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
