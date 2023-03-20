import { StaticImageData } from "next/image";
import { FunctionComponent } from "react";
import Image from "next/image";
import Link from "next/link"
interface Project {
  img: StaticImageData;
  link: string;
  subtitle: string;
  content: string[];
}
const SingleProject: FunctionComponent<Project> = (props) => {
  return (
    <>
      <div className="text-white">
        {<Image src={props.img} alt="123123" />}
      </div>
      <Link href={props.link} passHref>{props.link}</Link>
      <div>
        {props.subtitle}
      </div>
      <div>
        {props.content.map((element) => {return(
          <>
          <div>{element}</div>
          </> 
        )})}
      </div>
    </>
  );
};

export default SingleProject;
