"use client";
import { Testimonials } from "@/components/testimonials";
import Hero from "@/components/landing/hero";
import { ReactLenis } from "@studio-freight/react-lenis";
import { useEffect } from "react";
import { Gradient } from '@/lib/gradient'
import Faqs from "@/components/faqs";
import Footer from "@/components/footer";

export default function Landing() {

  useEffect(() => {
    const gradient = new Gradient();
    gradient.initGradient("#gradient-landing-canvas");
  }, []);
  
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.04,
        duration: 1.5,
        smoothWheel: true,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: "vertical",
      }}
    >
      <div className="w-full min-h-screen absolute top-0 left-0 -z-50">
        <canvas
          id="gradient-landing-canvas"
          data-transition-in
          className="w-full min-h-screen h-fit fixed top-0 left-0 bg-blue scroller-animation"
        />
      </div>
      <Hero />
      <Testimonials />
      <Faqs/>
      <Footer/>
    </ReactLenis>
  );
}