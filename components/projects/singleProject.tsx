import { StaticImageData } from "next/image";
import { FunctionComponent } from "react";
import Image from "next/image";
import Link from "next/link";

type sub = string[];

interface Project {
  title: string;
  duetime: string;
  img: StaticImageData[];
  mainContent: string[];
  subContent: sub[];
}
const SingleProject: FunctionComponent<Project> = (props) => {
  return (
    <>
      <div className="text-center mb-10">
        <div>{props.title}</div>
        <div>{props.duetime}</div>
      </div>
      <div className="flex row">
        <div className="shrink-1">
          {props.img.map((element) => (
            <Image src={element} alt="123" />
          ))}
          <button>"^"</button>
        </div>
        <div>
          <div>
            {props.mainContent.map((element) => (
              <div>{element}</div>
            ))}
          </div>
          <button className="border-2">
            <a href="./read_me">read_me</a>
          </button>
          <hr></hr>
          <div>
            {props.subContent.map((element) => (
              <div>{`${element[0]} 그리고  ${element[1]}`}</div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProject;
