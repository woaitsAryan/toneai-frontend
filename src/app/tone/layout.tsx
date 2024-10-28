'use client'

import { Sidebar } from "@/components/tone/sidebar";
import { Gradient } from "@/lib/gradient";
import { useEffect } from "react";
// import { TopBar } from "@/components/tone/topbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  useEffect(() => {
    const gradient = new Gradient();
    gradient.initGradient("#gradient-landing-dashboard");
  }, []);
  return (
    <main className="flex h-screen flex-col items-center">
      <div className="w-full min-h-screen absolute top-0 left-0 -z-50">
        <canvas
          id="gradient-landing-dashboard"
          data-transition-in
          className="w-full min-h-screen h-fit fixed top-0 left-0 bg-blue scroller-animation"
        />
      </div>
      <div className={"flex-1 w-full h-full flex items-stretch justify-start"}>
        {<Sidebar />}
        <div className={"grid w-full grid-rows-[auto_1fr]"}>
          {/* <TopBar /> */}
          <div className="overflow-hidden bg-transparent rounded border">
            {children}
          </div>
        </div>
      </div>
    </main>
  );
}
