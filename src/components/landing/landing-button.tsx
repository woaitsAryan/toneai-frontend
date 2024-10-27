import React from "react";

export function LandingButton({ children }: { children: React.ReactNode }) {
  return (
    <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-orange-50">
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#ffe9cb_0%,#ff6100_50%,#ffe9cb_100%)]" />
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-200/75 px-3 py-1 text-black backdrop-blur-3xl">
        {children}
      </span>
    </button>
  );
}
