import Link from "next/link";
import { ReactNode } from "react";
import { useEffect, useState } from "react";
import { useRef } from "react";
import Home from "@/pages";

type props = {
  children: ReactNode;
};

function MainNavigation(props: props) {
  const [hoverColor, setHoverColor] = useState(
    "w-auto px-4 py-2 text-xl hover:text-white bg-opacity-100 "
  );
  const defaultStyle = "w-auto px-4 py-2 text-xl ";
  const SCROLL_MIN = 26;

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      const navElement = document.getElementById("navBar");
      const titleElement = document.getElementById("title");

      if (scrollTop > SCROLL_MIN) {
        navElement!.style.backgroundColor = "white";
        titleElement!.style.color = "black";
        setHoverColor(defaultStyle + "hover:text-red-400");
      } else {
        navElement!.style.backgroundColor = "";
        titleElement!.style.color = "";
        setHoverColor(defaultStyle + "hover:text-white");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const element = useRef<HTMLDivElement>(null);
  const element2 = useRef<HTMLDivElement>(null);
  const element3 = useRef<HTMLDivElement>(null);
  const element4 = useRef<HTMLDivElement>(null);

  const moveToScroll = () => {
    element.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const moveToScroll2 = () => {
    element2.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const moveToScroll3 = () => {
    element3.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const moveToScroll4 = () => {
    element4.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main className="py-6 z-10 bg-gradient-to-r from-violet-500 to-fuchsia-500">
      <nav id="navBar" className="sticky top-0 flex justify-around mb-2 ">
        <div
          id="title"
          className="font-mono w-80 rounded px-4 py-2 text-2xl text-[#e0dee8]"
        >
          youngha Portfolio
        </div>
        <div className="flex items-center">
          <button className={hoverColor} onClick={moveToScroll}>
            About me
          </button>
          <button className={hoverColor} onClick={moveToScroll2}>
            Skills
          </button>
          <button className={hoverColor} onClick={moveToScroll3}>
            Archiving
          </button>
          <button className={hoverColor} onClick={moveToScroll4}>
            Projects
          </button>
        </div>
      </nav>
      <div>
        <Home
          element={element}
          element2={element2}
          element3={element3}
          element4={element4}
        >
          {props.children}
        </Home>
      </div>
    </main>
  );
}

export default MainNavigation;
