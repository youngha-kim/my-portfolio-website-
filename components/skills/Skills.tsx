import Subtitle from "../shared/subtitle";
import SkillLists from "./skillLists";


const Skills = () => {
  return (
    <article className="bg-yellow-500 pt-20 pb-10 m-auto max-w-10xl">
      <Subtitle title={"Skills"} txtColor={"text-black"} />
      <SkillLists/>
    </article>
  );
};

export default Skills;
