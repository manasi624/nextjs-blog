
"use client";
import Banner from "@/components/Banner";
import dynamic from "next/dynamic";
const Tour = dynamic(() => import("../../components/tour2"), { ssr: false });

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
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
