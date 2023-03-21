import SingleArchieve from "./singleArchive";
import notion from "../../public/notion.png";
import github from "../../public/github.png";

import { StaticImageData } from "next/image";

interface Archieve {
  img: StaticImageData;
  link: string;
  subtitle: string;
  content: string[];
}
interface ArchieveArray extends Array<Archieve> {}

const archieveArr: ArchieveArray = [
  {
    img: notion,
    link: "https://young-ha.notion.site/My-Front-end-Studies-20c65dacb6784af8ad4fec67ec45bb07",
    subtitle: "subtitle sdfsfsdfsdf",
    content: [
      "content sdfsdfsdfsdfsdfsfsdfsdfsdfsdfsdfsdf",
      "asdadw2ddasd",
      "asdasxzcsa",
      "asdwdqwdkmmefkmq",
    ],
  },
  {
    img: github,
    link: "https://github.com/youngha-kim",
    subtitle: "subtitlesdfsfsdfsdf",
    content: [
      "constnen tsdfsdfsdfsdfsdfsfsdfsdfsdfsdfsdfsdf",
      "123123dadasdsazxcz",
    ],
  },
];

const ArchiveList = () => {
  return (
    <>
      <div className="flex justify-around m-auto max-w-2xl mt-8 ">
        {archieveArr.map((element, id) => {
          return (
            <>
              <div
                key={id}
                className="border-2 bg-white m-10 p-10 max-h-fit max-w-fit rounded-2xl shadow-2xl "
              >
                <SingleArchieve
                  img={element.img}
                  link={element.link}
                  subtitle={element.subtitle}
                  content={element.content}
                />
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default ArchiveList;
