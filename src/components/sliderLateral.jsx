"use client";
import { useEffect, useState } from "react";
const sections = [
  { id: "inicio", label: "Início" },
  { id: "s1", label: "01" },
  { id: "s2", label: "02" },
  { id: "s3", label: "03" },
];
const SideSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    const observer = new IntersectionObserver(

      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sections.findIndex((s) => s.id === entry.target.id);

            if (index !== -1) setActiveIndex(index);
            console.log(activeIndex)
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: "-40% 0px -40% 0px",
      },
    );

    setTimeout(() => {
      sections.forEach((s) => {
        const el = document.getElementById(s.id);

        // console.log("elemento:", s.id, el); debug

        if (el) observer.observe(el);
      });
    }, 300);

    const handleScroll = () => {
      if (window.scrollY < 100) {
        setActiveIndex(0);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView(
      { behavior: "smooth", block: "center" });
  };
  return (
    <div className="fixed right-8 top-1/3 -translate-y-1/2 flex items-center gap-6 z-100">
      {/* TEXTOS */}
      <div className="flex flex-col text-right">
        {sections.map((section, index) => (
          <button
            key={index}
            onClick={() => scrollTo(section.id)}
            className=" text-[9px] font-sans font-extrabold transition text-white py-2" >
            {section.label}
          </button>))}
      </div>
      {/* BARRA */}
      <div className="relative h-30 w-[2px] bg-gray-500 overflow-hidden">
        {/* INDICADOR */}
        <div
          className="absolute left-0 w-[2px] h-[30px] bg-white transition-all duration-300"
          style={{ top: `${activeIndex * 30}px`, }} />
      </div>
    </div>
  );
};

export default SideSlider;