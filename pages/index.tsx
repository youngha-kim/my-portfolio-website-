import About_me from "@/components/about_me/about_me";
import Archiving from "../components/archiving/archiving";
import Projects from "../components/projects/projects";
import Skills from "@/components/skills/skills";
import Intro from "@/components/intro";
import { ReactNode } from "react";
import useMoveScroll from "@/components/navBar/hooks/useMoveScroll";
import { NavCategories } from "../components/shared/constant";
import useChangeNavstyle from "@/components/navBar/hooks/useChangeNavstyle";
import { RefObject } from "react";

type props = {
  children: ReactNode;
};

function MainNavigation(props: props) {
  const { hoverColor } = useChangeNavstyle();
  const { element, moveToScroll } = useMoveScroll();

  return (
    <main className="py-6 z-40 bg-gradient-to-r from-violet-500 to-fuchsia-500 ">
      <nav id="navBar" className="sticky top-0 flex justify-around mb-2">
        <div
          id="title"
          className="font-mono w-80 rounded px-4 py-2 text-2xl text-[#e0dee8]"
        >
          youngha Portfolio
        </div>
        <div className="flex items-center ">
          {NavCategories?.map((element, id) => {
            return (
              <button
                key={id}
                className={hoverColor}
                onClick={(event) => moveToScroll(event)}
              >
                {element}
              </button>
            );
          })}
        </div>
      </nav>
      <div>
        <Home element={element}>{props.children}</Home>
      </div>
    </main>
  );
}


function Home(props: any) {
  const { element } = props;
  return (
    <div className="flex-col mb-2">
      <Intro />
      <div ref={element[0]}>
        <About_me />
      </div>
      <div ref={element[1]}>
        <Skills />
      </div>
      <div ref={element[2]}>
        <Archiving />
      </div>
      <div ref={element[3]}>
        <Projects />
      </div>
    </div>
  );
}
export default MainNavigation;
