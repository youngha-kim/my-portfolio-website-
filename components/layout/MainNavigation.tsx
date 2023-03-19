import Link from "next/link";
import Intro from "../intro";
import { useEffect, useState } from "react";

function MainNavigation() {
  const [hoverColor, setHoverColor] = useState(
    "w-auto px-4 py-2 text-xl hover:text-white"
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

  return (
    <header className="py-6 ">
      <nav id="navBar" className="sticky top-0 flex justify-around mb-2 ">
        <div
          id="title"
          className="font-mono w-80 rounded px-4 py-2 text-2xl text-[#e0dee8]"
        >
          youngha Portfolio
        </div>
        <div className="flex items-center">
          <Link href="/todos" className={hoverColor}>
            About me
          </Link>
          <Link href="/todos" className={hoverColor}>
            Skills
          </Link>
          <Link href="/todos" className={hoverColor}>
            Archiving
          </Link>
          <Link href="/todos" className={hoverColor}>
            Projects
          </Link>
        </div>
      </nav>

      <Intro />
    </header>
  );
}

export default MainNavigation;
