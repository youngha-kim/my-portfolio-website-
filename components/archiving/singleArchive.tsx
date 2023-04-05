import { StaticImageData } from "next/image";
import { FunctionComponent } from "react";
import Image from "next/image";
import Link from "next/link";
interface Archieve {
  img: StaticImageData | string;
  link: string;
  subtitle: string;
  content: string[];
}
const SingleArchieve: FunctionComponent<Archieve> = (props) => {
  const { img, link, subtitle, content } = props;
  return (
    <>
      <div className="flex justify-center relative text-white h-30 ">
        {<Image className="sm:max-w-xs lg:w-fit" src={img} alt="image" />}
      </div>
      <Link href={link} passHref target="_blank">
        <div className="text-center lg:text-left text-blue-500 font-black mt-4  hover:text-pink-400 duration-200">
          {`-` + " Move To Traveling " + "-"}
        </div>
      </Link>
      <div className="text-center lg:text-left mt-4 mb-4 font-semibold">{subtitle}</div>
      <div>
        {content.map((element) => {
          return (
            <>
              <div className="text-center lg:text-left mb-2 ">{element}</div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default SingleArchieve;
