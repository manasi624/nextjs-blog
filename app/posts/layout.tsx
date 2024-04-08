
"use client";
import Banner from "@/components/Banner";
import dynamic from "next/dynamic";
import Head from "next/head";
const Tour = dynamic(() => import("../../components/tour2"), { ssr: false });

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
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

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="myblog-vert-zeta.vercel.app" />
        <meta property="twitter:url" content="https://myblog-vert-zeta.vercel.app" />
        <meta name="twitter:title" content="This is Blog By Prathamesh Pawar, share it." />
        <meta name="twitter:description" content="Read beautiful Blogs everyday" />
        <meta name="twitter:image" content="https://opengraph.b-cdn.net/production/documents/9227961c-2855-4610-a260-c617aa0207a0.png?token=BIWWiAYN9bg1XTuEYTjD3FsDxeNLLVPoaO0CgwCSMwc&height=521&width=815&expires=33248594052" />

      </Head>
      <Tour />
      <div className="text-black dark:text-white flex flex-col mx-auto">
        <div className="mt-32">
          <Banner />
        </div>
        {children}
      </div>
    </section>
  );
}
