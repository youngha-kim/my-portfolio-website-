import Link from "next/link";
import Intro from "../intro";
import { useEffect } from "react";

function MainNavigation() {
  const indexStyle = "w-auto px-4 py-2 text-xl hover:text-white";

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      const navElement = document.getElementById("navBar");
      const titleElement = document.getElementById("title")
      if (scrollTop > 26) {
        navElement!.style.backgroundColor = "white";
        titleElement!.style.color = "black"
      } else {
        navElement!.style.backgroundColor = "";
        titleElement!.style.color = ""
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <header className="py-6">
      <nav id="navBar" className="sticky top-0 flex justify-around mb-2">
        <div id="title" className="font-mono w-80 rounded px-4 py-2 text-2xl text-[#e0dee8]">
          youngha's Portfolio
        </div>
        <div className="flex items-center">
          <Link href="/todos" className={indexStyle}>
            About me
          </Link>
          <Link href="/todos" className={indexStyle}>
            Skills
          </Link>
          <Link href="/todos" className={indexStyle}>
            Archiving
          </Link>
          <Link href="/todos" className={indexStyle}>
            Projects
          </Link>
        </div>
      </nav>

      <Intro />
    </header>
  );
}

export default MainNavigation;
