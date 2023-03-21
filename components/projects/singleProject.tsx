import { StaticImageData } from "next/image";
import { FunctionComponent } from "react";
import Image from "next/image";

type sub = string[];

interface Project {
  title: string;
  duetime: string;
  img: StaticImageData[];
  mainContent: string[];
  subContent: sub[];
}
const SingleProject: FunctionComponent<Project> = (props) => {
  const { title, duetime, img, mainContent, subContent } = props;

  return (
    <>
      <div className="text-center mb-10">
        <div>{title}</div>
        <div>{duetime}</div>
      </div>
      <div className="flex row">
        <div className="shrink-1">
          {img.map((element) => (
            <Image src={element} alt="123" />
          ))}
          <button>123</button>
        </div>
        <div>
          <div>
            {mainContent.map((element) => (
              <div>{element}</div>
            ))}
          </div>
          <button className="border-2">
            <a href="./read_me">read_me</a>
          </button>
          <hr></hr>
          <div>
            {subContent.map((element) => (
              <div>{`* ${element[0]}:  ${element[1]}`}</div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProject;
