import React, { useEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";



gsap.registerPlugin(ScrollTrigger);
const Landing = () => {
  const textRef = useRef(null);
  // const imageSectionRef = useRef(null);
  // const contentRef = useRef(null);

  useEffect(() => {
    const textElement = textRef.current;
    // const imageSection = imageSectionRef.current;
    // const content = contentRef.current;

    // GSAP Scroll Animation for the text
    gsap.fromTo(
      textElement,
      { scale: 1, opacity: 1 },
      {
        scale: 3,
        opacity: 0,
        scrollTrigger: {
          trigger: textElement,
          start: "top 50%", // Animation starts when the element is halfway visible
          end: "top top",   // Animation ends when the element reaches the top
          scrub: true,      // Smoothly ties the animation progress to the scroll position
        },
      }
    );

    // // ScrollTrigger for sticky image section (no pinning, only scroll effect)
    // ScrollTrigger.create({
    //   trigger: imageSection,
    //   start: "top top", // Start when the image section is at the top of the viewport
    //   end: () => content.scrollHeight, // End when the content section ends
    //   pin: true, // Pin the image
    //   pinSpacing: true, // Add space after pinning so content scrolls
    //   scrub: true, // Smooth scrolling
    // });
  }, []);
  return (
    <div>
      {/* First Section */}
      <div className="w-full h-screen flex justify-center items-center text-slate-300 bg-slate-900">
        <h1 className="text-[50px]" ref={textRef}>
          Design your destiny
        </h1>
      </div>

      {/* <div
        className="h-full flex justify-center items-start gap-10 text-amber-300 bg-slate-900 pb-10 relative"
        ref={imageSectionRef}
      >
        <div className="w-[500px] h-[500px] flex justify-center items-center sticky top-0 z-10">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/PNG_transparency_demonstration_1.png/640px-PNG_transparency_demonstration_1.png"
            alt="Sticky"
          />
        </div>

        <div
          className="w-[500px] flex flex-col gap-3 text-justify overflow-hidden"
          ref={contentRef}
        >
          <h1 className="text-[38px] text-slate-200">Little Mash Service</h1>
          <h3 className="text-[28px] text-slate-400 pb-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </h3>
          <h3 className="text-[28px] text-slate-400 pb-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </h3>
          <div className="flex flex-row gap-7">
            <div className="pt-2 pb-2 pl-5 pr-5 rounded border border-teal-100">Silcon</div>
            <div className="pt-2 pb-2 pl-5 pr-5 rounded border border-teal-100">Offine</div>
            <div className="pt-2 pb-2 pl-5 pr-5 rounded border border-teal-100">Temper Zoom</div>
          </div>
        </div>
      </div>  */}

      {/* Third Section */}
      <div className="w-full h-screen flex justify-center items-center text-slate-300 bg-slate-900">
        <h1 className="text-[50px]">
          About
        </h1>
      </div>

    </div>
  )
}

export default Landing
