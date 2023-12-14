"use client"
import About from '@/components/About';
import Blog from '@/components/Blog';
import Hero from '@/components/Hero';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24 snap-x snap-mandatory">
      <div className="mt-10">
        <div className="m-4 z-10 snap-start">
          <Hero />
        <div className="w-full absolute top-[30%] bg-[#F7ABBA]/20 left-0 h-[400px] -skew-y-12" />
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
