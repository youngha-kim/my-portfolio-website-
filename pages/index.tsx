import About_me from "../components/about_me/About_me";
import Archiving from "../components/archiving/Archiving";
import Projects from "../components/projects/Projects";
import Skills from "../components/skills/Skills";
import Intro from "@/components/intro";
import { ReactNode } from "react";
import useMoveScroll from "@/components/navBar/hooks/useMoveScroll";
import { NavCategories } from "../components/shared/constant";
import useChangeNavstyle from "@/components/navBar/hooks/useChangeNavstyle";
import Head from "next/head";
import Hamburger from "../components/navBar/makeHamburger";
import Serial from "@/components/shared/serialData";
import connectDb from "@/components/shared/ConnectDb";

type props = {
  children: ReactNode;
};

const convertToArray = (input: any) => {
  let array = [];
  for (let el in input) {
    array.push(input[el]);
  }
  return array;
};


function MainNavigation(props: any) {
  const { hoverColor } = useChangeNavstyle();
  const { element, moveToScroll, isOpen, setIsOpen } = useMoveScroll();
  const { aboutme, archiving } = props;

  return (
    <>
      <Head>
        <title>youngha&apos; portfolio</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0 maximum-scale=1 minimum-scale=1"
        />
      </Head>
      <main className="py-6 z-40 bg-gradient-to-r from-violet-500 to-fuchsia-500 ">
        <nav id="navBar" className="sticky top-0 flex justify-around mb-2 z-10">
          <div
            id="title"
            className="font-mono w-80 rounded px-4 py-2 text-2xl text-[#e0dee8]"
          >
            youngha&apos; Portfolio
          </div>

          <div className="flex items-center ">
            <div className="hidden sm:block">
              {NavCategories?.map((element, id) => {
                return (
                  <>
                    <button
                      key={id}
                      className={hoverColor}
                      onClick={moveToScroll}
                    >
                      {element}
                    </button>
                  </>
                );
              })}
            </div>
            <div id="hamburger">
              <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>
          </div>
        </nav>

        {isOpen ? (
          <>
            <div className="sticky bg-white opacity-90 w-full transition duration-200 ease-out sm:ease-in flex flex-col block sm:hidden top-12 z-10">
              {NavCategories?.map((element, id) => {
                return (
                  <>
                    <button
                      key={id}
                      className={hoverColor}
                      onClick={(event) => moveToScroll(event)}
                    >
                      {element}
                    </button>
                  </>
                );
              })}
            </div>
          </>
        ) : null}

        <Home element={element} aboutMe={aboutme} archiving={archiving}>
          {props.children}
        </Home>
      </main>
    </>
  );
}

function Home(props: any) {
  const { element } = props;
  const { aboutMe, archiving } = props;
  return (
    <div className="flex-col mb-2">
      <Intro />
      <div ref={element[0]}>
        <About_me aboutMe={aboutMe} />
      </div>
      <div ref={element[1]}>
        <Skills />
      </div>
      <div ref={element[2]}>
        <Archiving archiving={archiving} />
      </div>
      <div ref={element[3]}>
        <Projects />
      </div>
    </div>
  );
}

export async function getStaticProps() {
  // fetch data from an API
  const aboutMeData  = await connectDb("initialDatas", "get");
  const archivingData  = await connectDb("archiving", "get");
  const serialAboutMe = convertToArray(Serial(aboutMeData))
  const serialArchiving = convertToArray(Serial(archivingData))
console.log(serialArchiving)

  return {
    props: {
      aboutme: serialAboutMe,
      archiving: serialArchiving,
    },
  };
}
export default MainNavigation;
