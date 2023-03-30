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
      <div className="flex justify-center relative text-white w-80 h-30 border-b-2">
        {<Image className="min-w-96 w-fit lg:w-full" src={img} alt="image" />}
      </div>
      <Link href={link} passHref target="_blank">
        <div className="text-blue-500 font-black mt-4  hover:text-pink-400 duration-200">
          {`-` + " Move To Traveling " + "-"}
        </div>
      </Link>
      <div className="mt-4 mb-4 font-semibold">{subtitle} 입니다.</div>
      <div>
        {content.map((element) => {
          return (
            <>
              <div className="mb-2">{element}</div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default SingleArchieve;
