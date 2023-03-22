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
    subtitle: "노션 개인 블로그",
    content: [
      "언어, 프레임워크, 라이브러리 등 공부 기록",
      "과제, 프로젝트 중 만난 에러 기록",
      "Complete, Writing 등의 상태로, 지식 부채 관리"
    ],
  },
  {
    img: github,
    link: "https://github.com/youngha-kim",
    subtitle: "깃허브 코드 저장소",
    content: [
      "프로젝트의 소스코드",
      "부트캠프 수강시 부여된 과제들의 예제 코드",
      "강의, 공식문서, 블로그 예제 코드",
    ],
  },
];

const ArchiveList = () => {
  return (
    <>
      <div className="flex justify-around m-auto max-w-4xl mt-8 ">
        {archieveArr.map((element, id) => {
          return (
            <>
              <div
                key={id}
                className="border-2 bg-white m-10 p-6 max-h-fit max-w-fit rounded-2xl shadow-2xl "
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
