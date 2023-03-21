import { StaticImageData } from "next/image";
import { FunctionComponent } from "react";
import Image from "next/image";
import Link from "next/link";
interface Archieve {
  img: StaticImageData;
  link: string;
  subtitle: string;
  content: string[];
}
const SingleArchieve: FunctionComponent<Archieve> = (props) => {
    const {img, link, subtitle, content } = props
  return (
    <>
      <div className="text-white">{<Image src={img} alt="123123" />}</div>
      <Link href={link} passHref target="_blank">
        {link}
      </Link>
      <div>{subtitle}</div>
      <div>
        {content.map((element) => {
          return (
            <>
              <div>{element}</div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default SingleArchieve;
