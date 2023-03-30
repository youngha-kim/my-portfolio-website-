import notionIcon from "../public/notionicon.png";
import githubIcon from "../public/githubicon.png";
import settingIcon from "../public/settingicon.png";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const commonStyle =
    "pl-3 pr-3 w-24 hover:w-32 hover:animate-spin-slow ease-in-out duration-200";

  return (
    <>
      <div className="position flex flex-col justify-center items-center -mt-2 bg-gradient-to-r from-violet-500 to-fuchsia-500">
        <ul className="flex flex-row justify-center items-center h-30 m-0 pt-4">
          <li className={commonStyle}>
            {" "}
            <Link
              key={1}
              href={
                "https://young-ha.notion.site/My-Front-end-Studies-20c65dacb6784af8ad4fec67ec45bb07"
              }
              passHref
              target="_blank"
            >
              <Image src={notionIcon} alt="notionIcon" placeholder="blur" />
            </Link>
          </li>
          <li className={commonStyle}>
            {" "}
            <Link
              key={2}
              href="https://github.com/youngha-kim"
              passHref
              target="_blank"
            >
              <Image src={githubIcon} alt="githubIcon" placeholder="blur" />
            </Link>
          </li>
          <li className={commonStyle}>
            <Image src={settingIcon} alt="settingIcon" placeholder="blur" />
          </li>
        </ul>
        <div className="pb-4 mt-1">© 2023. Kim Young Ha. All rights reserved.</div>
      </div>
    </>
  );
};

export default Footer;
