import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./App.css";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const textElement = textRef.current;

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
  }, []);

  return (
    <>
      {/* First Section */}
      <div className="w-full h-screen flex justify-center items-center text-amber-300 bg-slate-900">
        <h1 className="text-[50px]" ref={textRef}>
          Design your destiny
        </h1>
      </div>

      {/* Second Section */}
      <div className="w-full h-screen flex justify-center items-center text-amber-300 bg-slate-900">
        <h1 className="text-[50px]">Learn more</h1>
      </div> 
    </>
  );
};

export default App;
