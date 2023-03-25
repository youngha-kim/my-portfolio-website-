import About_me from "@/components/about_me/about_me";
import Archiving from "../components/archiving/archiving";
import Projects from "../components/projects/projects";
import Skills from "@/components/skills/skills";
import Intro from "@/components/intro";
import { ReactNode } from "react";
import useMoveScroll from "@/components/navBar/hooks/useMoveScroll";
import { NavCategories } from "../components/shared/constant";
import useChangeNavstyle from "@/components/navBar/hooks/useChangeNavstyle";
import { MongoClient } from "mongodb";


type props = {
  children: ReactNode;
};

function MainNavigation(props: any) {
  const { hoverColor } = useChangeNavstyle();
  const { element, moveToScroll } = useMoveScroll();
  const { aboutme, archiving } = props

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
        <Home element={element} aboutMe = {aboutme} archiving = {archiving}>{props.children}</Home>
      </div>
    </main>
  );
}


function Home(props: any) {
  const { element } = props;
  const {aboutMe, archiving } = props;
  return (
    <div className="flex-col mb-2">
      <Intro />
      <div ref={element[0]}>
        <About_me aboutMe = {aboutMe}/>
      </div>
      <div ref={element[1]}>
        <Skills />
      </div>
      <div ref={element[2]}>
        <Archiving archiving = {archiving}/>
      </div>
      <div ref={element[3]}>
        <Projects />
      </div>
    </div>
  );
}

export async function getStaticProps() {
  // fetch data from an API
  const client = await MongoClient.connect(
    `mongodb+srv://youngha-kim:dkstmq25@my-portfolio.yerzt7i.mongodb.net/portfolio?retryWrites=true&w=majority`
  );
  const db = client.db();
  const initialColllection = db.collection("initialDatas");
  const aboutMeData = await initialColllection.find({}).toArray();
  const serialAboutme = aboutMeData?.map((element) => ({
    id: element._id.toString(),
    title: element.title,
    img: element.img,
    content: element.content,
  }))

  const archivingColllection = db.collection("archiving");
  const archivingData = await archivingColllection.find({}).toArray();
  const serialArchiving = archivingData?.map((element) => ({
    id: element._id.toString(),
    subtitle : element.subtitle,
    image: element.image,
    content: element.content,
    link: element.link
  }))

  client.close();

  return {
    props: {
      aboutme: serialAboutme,
      archiving : serialArchiving
    },
  };
}
export default MainNavigation;
