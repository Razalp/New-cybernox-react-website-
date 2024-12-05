import React, { useRef, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import bannervdo from "../../assets/Space Day Cosmonautics Day 1920x1080.mp4";
import { CompareDemo } from "../uipages/CompareDemo";
import { CardsCarouselDemo } from "../uipages/CardsCarouselDemo";
import { GoArrowUpRight } from "react-icons/go";

function Home() {
  const { setScrollRef } = useOutletContext(); // Access setScrollRef from the Outlet context
  const whoWeAreRef = useRef(null);
  const OurServices = useRef(null);

  useEffect(() => {
    // Pass the ref to Layout.js
    if (setScrollRef) {
      setScrollRef((prevRefs) => ({
        ...prevRefs,
        "who-we-are": whoWeAreRef,
        services: OurServices,
      }));
    }
  }, [setScrollRef]);

  return (
    <>
      <div className="relative overflow-hidden h-screen">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={bannervdo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-55" />
        {/* Main content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-white text-3xl md:text-5xl lg:text-7xl font-bold mb-4">
            Where Big Ideas Meet{" "}
            <span className="text-[#FE7837]">Brilliant Software</span>
          </h1>

          <div className="flex flex-col md:flex-row items-center md:gap-10 mt-6 md:mt-9">
            <p className="text-white text-base md:text-lg lg:text-2xl mb-6 md:mb-0 text-center md:text-start">
              Building Smart Solutions for Exceptional{" "}
              <br className="hidden md:block" /> Digital Experiences
            </p>
            <div className="flex flex-col items-center space-y-2">
              <h2 className="text-white underline text-lg md:text-xl lg:text-2xl font-semibold">
                Let's Talk!
              </h2>
              <a
                href="https://wa.me/+917907224281?text=Hello! I would like to contact you."
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="group relative rounded-full p-2 md:p-3 border-2 border-white transition-all duration-300 hover:bg-[#00E57E] hover:border-[#00E57E]">
                  <GoArrowUpRight className="text-white text-3xl md:text-4xl lg:text-5xl transform transition-transform duration-300 group-hover:scale-125 group-hover:text-black" />
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 w-full h-40 md:h-60 bg-gradient-to-t from-[#0E1F29] to-transparent"></div>
      </div>

      <section
        ref={whoWeAreRef}
        className="bg-[#01E47E] h-screen w-full flex items-center justify-center"
      >
        <div className="text-center">
          <h2 className="text-3xl font-bold text-black">Who we are</h2>
          <div className="mt-8 space-x-4">
            <CompareDemo />
          </div>
        </div>
      </section>

      <div
        className="bg-[#FFF] h-full w-full flex items-center justify-center"
        ref={OurServices}
      >
        <CardsCarouselDemo />
      </div>
    </>
  );
}

export default Home;
