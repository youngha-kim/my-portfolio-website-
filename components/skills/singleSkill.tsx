import { FunctionComponent } from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";

interface Skill {
  stack: string;
  imgs: StaticImageData[];
}

const SinglSkill: FunctionComponent<Skill> = (props) => {
  return (
    <>
      <div className="font-orange-200 text-center text-orange-600">{props.stack}</div>
      <hr></hr>
      <ul>
      {props.imgs.map((element, id) => {
        return (
        <li key={id} className="mt-6 w-60" >
          <Image src={element} alt={props.stack} placeholder="blur" />
        </li>)
      })}
      </ul>
    </>
  );
};

export default SinglSkill;
