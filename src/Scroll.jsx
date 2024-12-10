import React, { useEffect, useRef, useState } from "react";
import Lenis from "@studio-freight/lenis";

const Scroll = () => {
  const lenisRef = useRef(null);
  const [leftTitle, setLeftTitle] = useState("Smooth Scroll"); // Default left title

  useEffect(() => {
    // Initialize Lenis for global smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: "vertical",
      smooth: true,
    });

    const handleRAF = (time) => {
      lenis.raf(time);
      requestAnimationFrame(handleRAF);
    };

    requestAnimationFrame(handleRAF);

    lenisRef.current = lenis;

    return () => {
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll(".section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const newTitle = entry.target.getAttribute("data-title");
            setLeftTitle(newTitle);
          }
        });
      },
      { threshold: 0.5 } // Change title when at least 50% of the section is visible
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div>
      {/* Section Before Scrollable Content */}
      <div className="h-screen bg-blue-100 flex justify-center items-center">
        <h1 className="text-[3rem] font-bold text-blue-800">
          Welcome to the Page!
        </h1>
      </div>

      {/* Scrollable Content */}
      <div className="flex w-full">
        {/* Left Side: Fully Sticky */}
        <div className="w-1/3 h-screen bg-fuchsia-100 flex justify-center items-center sticky top-0">
          <h1 className="text-[3rem] text-black font-bold">{leftTitle}</h1>
        </div>

        {/* Right Side: Scrollable Content */}
        <div className="w-2/3">
          {/* Section 1 */}
          <div
            className="h-screen flex flex-col justify-center section"
            data-title="Smooth Scroll"
          >
            <h2 className="text-[2.5rem] text-amber-900 top-10">Title 1</h2>
            <p className="mt-5">
              We've heard all the reasons to not use smooth scroll. It feels
              hacky. It's inaccessible. It's not performant. It's
              over-engineered. And historically, those were all true. But we
              like to imagine things as they could be, then build them. So, why
              should you use smooth scroll?
            </p>
            <p className="mt-5">Create more immersive interfaces.</p>
            <p className="mt-5">
              Smooth scrolling enhances user experience by making the navigation
              experience feel more fluid and natural. It’s no longer just about
              seeing the next piece of content, it’s about how you arrive there.
            </p>
          </div>

          {/* Section 2 */}
          <div
            className="h-screen flex flex-col justify-center section"
            data-title="New Title"
          >
            <h2 className="text-[2.5rem] text-amber-900 top-10">Title 2</h2>
            <p className="mt-5">
              With smooth scroll, you can build immersive storytelling
              experiences, product showcases, and scroll-based animations that
              feel interactive and engaging.
            </p>
            <p className="mt-5">
              This is why smooth scrolling has become a go-to feature for
              designers who want to provide a premium, polished experience.
            </p>
            <p className="mt-5">
              Create more immersive interfaces for users with precise control
              over navigation and animations.
            </p>
          </div>

          {/* Section 3 */}
          <div
            className="h-screen flex flex-col justify-center section"
            data-title="Hello Mars"
          >
            <h2 className="text-[2.5rem] text-amber-900 top-10">Title 3</h2>
            <p className="mt-5">
              We've heard all the reasons to not use smooth scroll. It feels
              hacky. It's inaccessible. It's not performant. It's
              over-engineered. And historically, those were all true. But we
              like to imagine things as they could be, then build them. So, why
              should you use smooth scroll?
            </p>
            <p className="mt-5">
              Smooth scrolling enhances user experience by making the navigation
              experience feel more fluid and natural.
            </p>
            <p className="mt-5">
              This is why smooth scrolling has become a go-to feature for
              designers who want to provide a premium, polished experience.
            </p>
          </div>
        </div>
      </div>

      {/* Section After Scrollable Content */}
      <div className="h-screen bg-green-100 flex justify-center items-center">
        <h1 className="text-[3rem] font-bold text-green-800">
          Thanks for Scrolling!
        </h1>
      </div>
    </div>
  );
};

export default Scroll;
