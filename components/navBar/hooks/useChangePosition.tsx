import { useEffect, useState } from "react";

const useChangePosition = () => {
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
  return { hoverColor };
};

export default useChangePosition;
