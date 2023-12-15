
"use client";
import Banner from "@/components/Banner";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <div className="text-black dark:text-white flex flex-col mx-auto dark:text-white">
        <div className="mt-32">
          <Banner />
        </div>
        {children}
      </div>
    </section>
  );
}
