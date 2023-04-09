import { StaticImageData } from "next/image";
import { FunctionComponent } from "react";
import useCarousel from "./hooks/useCarousel";
import Link from "next/link";
import empasizeText from "../shared/empasizeText";
import useFontColor  from "./hooks/usefontColor";
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
  useFontColor()

  return (
    <>
      <div className="text-center mb-10">
        <div className="text-3xl font-black mb-5">{title}</div>
        <div>{duetime}</div>
      </div>
      <div className="flex flex-col justify-items-center lg:flex-row pl-5 pr-2">
        <div className="flex justify-center basis-7/12 mb-10 lg:w-6/12 ">{useCarousel(img)}</div>
        <div className="basis-2/4 lg:pl-4">
          <div>
            {mainContent.map((element, id) => (
              <p key={id} className="mb-4 text-lg">
                {empasizeText(element)}
              </p>
            ))}
          </div>

          <button className="flex flex-row justify-between border-2 mb-6 mt-7 w-40 h-12 text-white bg-black rounded-full">
            <a className="grow mt-2 ml-4" href={`./${title}`}>
              <span className="text-lg">READ_ME</span>
            </a>
            <span className="relative flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#EB5858] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-[#EB5858]"></span>
            </span>
          </button>

          <hr className="border-black border-2"></hr>
          <div className="mt-4">
            {subContent.map((element, id) => (
              <div key={id} className="flex  sm:flex-row flex-col">
                <span className="font-bold basis-1/4 mb-2">[{element[0]}]</span>
                <ul className="basis-3/4 sm: mb-5">
                  {element[1].split(",").map((el) => {
                    if (el.includes("http")) {
                      return (
                        <Link key={el} href={el} passHref target="_blank">
                          <div className="text-blue-500 font-black hover:text-pink-400 duration-200">
                            { " Link "}
                          </div>
                        </Link>
                      );
                    }
                    return <li className="w-62" key={el}>{el}</li>;
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProject;
