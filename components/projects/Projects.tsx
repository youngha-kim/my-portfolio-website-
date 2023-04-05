import Subtitle from "../shared/subtitle";
import ProjectList from "./projectLists";

const Projects = () => {
  return (
    <>
      <article className="border-b-2 border-black bg-[#3C6997]  pt-20 pb-10 m-auto max-w-10xl">
        <Subtitle title={"Projects"} txtColor={"text-white"} />
        <ProjectList />
      </article>
    </>
  );
};

export default Projects;
