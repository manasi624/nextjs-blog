
"use client";
import Banner from "@/components/Banner";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <div className="flex flex-col mx-auto">
        <div className="mt-32">
          <Banner />
        </div>
        {children}
      </div>
    </section>
  );
}
