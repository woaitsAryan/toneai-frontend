"use client";
import { Fragment, useState } from "react";
import { LandingButton } from "./landing-button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog"
import Link from "next/link";
import FakeStats from "./marquee";
import NavBar from "./navbar";

export default function Hero() {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <Fragment>
      <div className="w-full min-h-screen absolute top-0 left-0 -z-50">
        <canvas
          id="gradient-landing-canvas"
          data-transition-in
          className="w-full min-h-screen h-fit fixed top-0 left-0 bg-blue scroller-animation"
        />
      </div>

      <div className="w-full min-h-screen text-neutral-800 font-gtEss flex flex-col justify-between">
        <NavBar setDialogOpen={setDialogOpen}/>
        <div className="w-[90%] md:w-[85%] mx-auto flex ">
          <section className="w-full md:w-[60%] mx-auto flex flex-col gap-4 justify-center">
            <span className="font-gtEss text-4xl md:text-7xl text-center font-extrabold">
              <h1>Never miss the tone again! 😉</h1>
            </span>
            <p className="text-xs md:text-lg w-[90%] md:w-[70%] mx-auto font-bold  text-neutral-800/80 text-center">
              Lost in translation? Let toneAI be your social media interpreter!
            </p>
            <div className="flex justify-center pointer-events-auto font-normal gap-4 text-lg" onClick={() => setDialogOpen(true)}>
              <LandingButton >
                Try ToneAI for free!
              </LandingButton>
            </div>
          </section>
        </div>
        <FakeStats />
      </div>
      <Dialog open={dialogOpen} onOpenChange={(open) => setDialogOpen(open)}>
        <DialogContent className="bg-white/80 font-geist">
          <DialogTitle className="text-center">Kindly choose</DialogTitle>
          <div className="w-full flex flex-row justify-center items-center gap-4 font-semibold text-xl">
            <Link href="/ironic">
              Ironic
            </Link>
            <Link href="/aggresive">
              Aggresive
            </Link>
          </div>
        </DialogContent>
      </Dialog>
    </Fragment>
  );
}