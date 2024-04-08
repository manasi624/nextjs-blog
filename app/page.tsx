"use client"
import About from '@/components/About';
import Blog from '@/components/Blog';
import Hero from '@/components/Hero';
import Head from 'next/head';

export default function Home() {
  return (
    <main className="flex flex-col bg-light_bg dark:bg-dark_bg items-center justify-between p-24 snap-x snap-mandatory">

      <Head>
      	<link rel="stylesheet" href="shepherd.js/dist/css/shepherd.css"/>
        <script src="shepherd.js/dist/js/shepherd.min.js"></script>
        <meta
        property='og:image'
        content='https://source.unsplash.com/featured/200x200'
        />
        <meta 
          property='op:description'
          content='This is Blog By Prathamesh Pawar, share it.'
        />
        <meta name='twitter:card' content='summary_large_image'/>
        <meta name='twitter:site' content='@PrthameshPawar'/>
        <meta name='twitter:title' content='Worlds best blog'/>
        <meta name='twitter:description'
        content='Read beautiful Blogs everyday'
        />
        <meta 
        name='twitter:image'
        content='https://source.unsplash.com/featured/200x200'
        />
        <meta name='twitter:url'
        content='https://myblog-vert-zeta.vercel.app/'
        />
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
