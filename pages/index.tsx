import About_me from "@/components/about_me/about_me";
import Archiving from "../components/archiving/Archiving";
import Projects from "../components/projects/projects";
import Skills from "@/components/skills/skills";
import Intro from "@/components/intro";

export default function Home(props: any) {
  const { element, element2, element3, element4  } = props;
  return (
    <div className="flex-col mb-2">
      <Intro />
      <div ref={element}>
        <About_me />
      </div>
      <div ref={element2}>
        <Skills />
      </div>
      <div ref={element3}>
        <Archiving />
      </div>
      <div ref={element4}>
        <Projects />
      </div>
    </div>
  );
}
