import { Fragment } from "react";
import { LandingButton } from "./landing-button";
import FakeStats from "./marquee";
import NavBar from "./navbar";
import Link from "next/link";

export default function Hero() {
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
        <NavBar/>
        <div className="w-[90%] md:w-[85%] mx-auto flex ">
          <section className="w-full md:w-[60%] mx-auto flex flex-col gap-4 justify-center">
            <span className="font-gtEss text-4xl md:text-7xl text-center font-extrabold">
              <h1>Never miss the tone again! 😉</h1>
            </span>
            <p className="text-xs md:text-lg w-[90%] md:w-[70%] mx-auto font-bold  text-neutral-800/80 text-center">
              Lost in translation? Let toneAI be your social media interpreter!
            </p>
            <Link className="flex justify-center pointer-events-auto font-normal gap-4 text-lg" href="/tone">
              <LandingButton >
                Try ToneAI for free!
              </LandingButton>
            </Link>
          </section>
        </div>
        <FakeStats />
      </div>
    </Fragment>
  );
}