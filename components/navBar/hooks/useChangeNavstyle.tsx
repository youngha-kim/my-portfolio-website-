import { useEffect, useState } from "react";

const useChangePosition = () => {
  const [hoverColor, setHoverColor] = useState(
    "w-auto px-4 py-2 text-xl hover:text-white bg-opacity-100 "
  );
  const defaultStyle = "w-auto px-4 py-2 text-xl ";
  const SCROLL_MIN = 26;
  let curLocatePercent = 0;

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      const navElement = document.getElementById("navBar");
      const titleElement = document.getElementById("title");
      const maxHeight = document.documentElement.scrollHeight;
      const navUnderLine = document.getElementById("navBar");
      curLocatePercent = (scrollTop / maxHeight) * 100 + 14;
      curLocatePercent = Math.floor(curLocatePercent);

      
      console.log(curLocatePercent);

      if (scrollTop > SCROLL_MIN) {
        navElement!.style.backgroundColor = "white";
        navUnderLine!.style.background = `linear-gradient(90deg, #1ec4da ${curLocatePercent}%, white 0%)`;
        titleElement!.style.color = "black";
        setHoverColor(defaultStyle + "hover:text-red-400");
      } else {
        navElement!.style.backgroundColor = "";
        navUnderLine!.style.background="";
        titleElement!.style.color = "";
        setHoverColor(defaultStyle + "hover:text-white");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  return { hoverColor, curLocatePercent };
};

export default useChangePosition;
