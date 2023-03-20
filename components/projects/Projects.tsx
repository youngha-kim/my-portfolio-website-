import Subtitle from "../ui/subtitle";
import ProjectList from "./projectLists";

const Projects = () => {
  return (
    <>
      <article className="bg-[rgb(28,128,159)] pt-20 pb-10 m-auto max-w-10xl">
        <Subtitle title={"Projects"} txtColor={"text-white"} />
        <ProjectList />
      </article>
    </>
  );
};

export default Projects;
