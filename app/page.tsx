"use client"
import About from '@/components/About';
import Blog from '@/components/Blog';
import Hero from '@/components/Hero';
import Head from 'next/head';

export default function Home() {
  return (
    <main className="flex flex-col bg-light_bg dark:bg-dark_bg items-center justify-between p-24 snap-x snap-mandatory">

      <Head>
        {/* HTML Meta Tags */}
        <title>This is Blog By Mansi, share it.</title>
        <meta name="description" content="Read beautiful Blogs everyday" />

        {/* Facebook Meta Tags */}
        <meta property="og:url" content="https://myblog-vert-zeta.vercel.app" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="This is Blog By Prathamesh Pawar, share it." />
        <meta property="og:description" content="Read beautiful Blogs everyday" />
        <meta property="og:image" content="https://opengraph.b-cdn.net/production/documents/9227961c-2855-4610-a260-c617aa0207a0.png?token=BIWWiAYN9bg1XTuEYTjD3FsDxeNLLVPoaO0CgwCSMwc&height=521&width=815&expires=33248594052" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="myblog-vert-zeta.vercel.app" />
        <meta property="twitter:url" content="https://myblog-vert-zeta.vercel.app" />
        <meta name="twitter:title" content="This is Blog By Prathamesh Pawar, share it." />
        <meta name="twitter:description" content="Read beautiful Blogs everyday" />
        <meta name="twitter:image" content="https://opengraph.b-cdn.net/production/documents/9227961c-2855-4610-a260-c617aa0207a0.png?token=BIWWiAYN9bg1XTuEYTjD3FsDxeNLLVPoaO0CgwCSMwc&height=521&width=815&expires=33248594052" />

      </Head>

      <div className="mt-10">
        <div className="m-4 z-10 snap-start">
          <Hero />
          <div className="w-full absolute top-[30%] bg-light_bg_skin  dark:bg-dark_bg_skin opacity-60 left-0 h-[400px] -skew-y-12 z-0" />
        </div>
        <div className="m-4 z-10 mt-10 snap-center">
          <About />
        </div>
        <div className="m-4 z-10 mt-10 snap-end">
          <Blog />
        </div>
      </div>
    </main>
  );
}
