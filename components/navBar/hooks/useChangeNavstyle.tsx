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
      const innerHeight = window.innerHeight

      const curLocatePercent = Math.ceil((scrollTop / (Math.floor(maxHeight-innerHeight))) * 100);
      const navElement = document.getElementById("navBar");
      const navStyle = navElement!.style;

      const titleElement = document.getElementById("title");
      const titleStyle = titleElement!.style;

      if (scrollTop > SCROLL_MIN) {
        navStyle.backgroundColor = "white";
        navStyle.background = `linear-gradient(90deg, #d77f8d ${curLocatePercent}%, white 0%)`;
        navStyle.borderColor="black"
        navStyle.borderBottomWidth="2px"
        titleStyle.color = "black";
        setHoverColor(defaultStyle + "hover:text-[#3C6997]");
      } else {
        navStyle.backgroundColor = "";
        navStyle.background = "";
        titleStyle.color = "";
        navStyle.borderBottomWidth=""
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
