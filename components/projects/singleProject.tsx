import { StaticImageData } from "next/image";
import { FunctionComponent } from "react";
import useCarousel from "./hooks/useCarousel";

type sub = string[];

interface Project {
  id: number;
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
        <div className="text-3xl font-black mb-5">{title}</div>
        <div>{duetime}</div>
      </div>
      <div className="flex flex-row">
        <div className="basis-2/4 border-r-2">{useCarousel(img)}</div>
        <div className="basis-2/4">
          <div>
            {mainContent.map((element, id) => (
              <p key={id} className="mb-4 text-lg">
                {element}
              </p>
            ))}
          </div>
          <button className="border-2">
            <a href={`./${title}`}>read_me</a>
          </button>
          <hr></hr>
          <div>
            {subContent.map((element, id) => (
              <div key={id} className="flex flex-row">
                <span className="font-bold basis-1/4">{element[0]}</span>
                <span className="basis-4/4">{element[1]}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProject;
