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
      const maxHeight = document.documentElement.scrollHeight;
      const curLocatePercent = Math.floor((scrollTop / maxHeight) * 100 + 14);

      const navElement = document.getElementById("navBar");
      const navStyle = navElement!.style;

      const titleElement = document.getElementById("title");
      const titleStyle = titleElement!.style;

      if (scrollTop > SCROLL_MIN) {
        navStyle.backgroundColor = "white";
        navStyle.background = `linear-gradient(90deg, #82deea ${curLocatePercent}%, white 0%)`;
        titleStyle.color = "black";
        setHoverColor(defaultStyle + "hover:text-red-400");
      } else {
        navStyle.backgroundColor = "";
        navStyle.background = "";
        titleStyle.color = "";
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
