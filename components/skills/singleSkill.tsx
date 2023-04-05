import { FunctionComponent } from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";

interface Skill {
  stack: string;
  imgs: StaticImageData[];
}

const SinglSkill: FunctionComponent<Skill> = (props) => {
  const { stack, imgs } = props;
  return (
    <>
      <div className="font-orange-200 text-center text-[#EB5858] text-2xl font-black mb-6">
        {stack}
      </div>
      <hr className="border-black border-2"/>
      <ul>
        {imgs.map((element, id) => {
          return (
            <li key={id} className="mt-6 w-60">
              <Image src={element} alt={stack} placeholder="blur" />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default SinglSkill;
