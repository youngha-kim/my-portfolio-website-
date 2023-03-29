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
      <div className="flex flex-col lg:flex-row pl-5 pr-2">
        <div className="basis-2/4">{useCarousel(img)}</div>
        <div className="basis-2/4">
          <div>
            {mainContent.map((element, id) => (
              <p key={id} className="mb-4 text-lg">
                {(element)}
              </p>
            ))}
          </div>

          <button className="flex flex-row justify-between border-2 mb-6 mt-7 w-40 h-12 text-white bg-black rounded-full">
            <a className="grow mt-2 ml-4" href={`./${title}`}>
              <span className="text-lg">READ_ME</span>
            </a>
            <span className="relative flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500"></span>
            </span>
          </button>

          <hr></hr>
          <div className="mt-4">
            {subContent.map((element, id) => (
              <div key={id} className="flex mb-3 sm:flex-row flex-col">
                <span className="font-bold basis-1/4 mb-2">[{element[0]}]</span>
                <span className="basis-3/4 sm: mb-5">{element[1]}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProject;
