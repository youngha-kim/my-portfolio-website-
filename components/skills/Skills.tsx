import Subtitle from "../shared/subtitle";
import SkillLists from "./skillLists";


const Skills = () => {
  return (
    <article className="border-b-2 border-black bg-[#3C6997] pt-20 pb-10 m-auto max-w-10xl">
      <Subtitle title={"Skills"} txtColor={"text-white"} />
      <SkillLists/>
    </article>
  );
};

export default Skills;
