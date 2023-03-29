import SingleProject from "./singleProject";
import notion from "../../public/notion.png";
import github from "../../public/github.png";

import { StaticImageData } from "next/image";
type sub = string[];

interface Project {
  id: number;
  title: string;
  duetime: string;
  img: StaticImageData[];
  mainContent: string[];
  subContent: sub[];
}
interface ProjectArray extends Array<Project> {}

const projectArr: ProjectArray = [
  {
    id: 1,
    title: "포트폴리오 웹사이트",
    duetime: "< 2023.03 개인 프로젝트 >",
    img: [github, github, github, github],
    mainContent: [
      " 처음으로 진행했던 단독 프로젝트 입니다. 보는 이로 하여금, `어떻게 하면 쉽게 읽힐 수 있을까`에 대한 부분들을 고민하며 개발하였습니다.",
      " 폴더 구조의 세분화, 컴포넌트를 구분하는 기준을 스스로 정의하면서, 세세한 부분들을 생각해보고 적용하며 차분히 개발을 할 수 있었습니다. 특히 하드코딩을 피하는 것과 코드의 길이는 줄이는 것을 우선순위로 삼아, useCustom hook에 익숙해 진 계기가 되었습니다.",
      " next.js, typescript등 처음 접해본 기술들을 직접 학습하며 적용해 나갔다는 점이 저에게로 하여금 새로운 기술에 대한 두려움이 설렘으로 바뀌게 된 계기가 되었습니다.",
      ` 평소 미뤄왔던 CSS에 대한 부분들을 ${(
        <h2>tailwind css</h2>
      )}로 구현하여 자신감을 크게 얻어낼 수 있었습니다.`,
      "serverless에 대한 위대함을 직접 겪어 볼 수 있어서 좋았습니다.",
    ],
    subContent: [
      [
        "주요기능",
        "어떠고 저쩌고 하기 blar   blar   blar   blar   blarblar   blar   blar   blar   blarblar   blar   blar   blar   blarblar   blar   blar   blar   blarblar   blar   blar   blar   blarblar   blar   blar   blar   blarblar   blar   blar   blar   blarblar   blar   blar   blar   blar",
      ],
      ["Github", "https://github.com/youngha-kim/my-portfolio-website-"],
      ["URL", "https://my-portfolio-website-mu.vercel.app/"],
      ["Frontend", "next.js, typescript, tailwind css "],
      ["DB", "mongoDB"],
      ["Deployment", "vercel"],
    ],
  },
  {
    id: 2,
    title: "우리동네 스터디 Woodongs",
    duetime: "< 2022.10 4인 프로젝트 >",
    img: [notion, notion, notion, notion, notion],
    mainContent: [
      " 내가 생각하는 나의 성격과 친구가 생각하는 나의 성격을 비교함으로써 겉으로 보이는 나의 모습이 어떠한지 파악해볼 수 있는 웹사이트입니다. 실제로 지인과 성격 검사를 서로 해주면서 얻은 아이디어를 바탕으로 직접 개발하였습니다.",
      " 백 엔드 개발자와 협업하는 과정에 관해 많이 배울 수 있었습니다. 필요한 명세를 문서로 작성하여 소통하였고, 필요한 지식도 함께 공유하며 학습할 수 있었습니다.",
    ],
    subContent: [
      [
        "주요기능",
        "blar   blar   blar   blar   blarblar   blar   blar   blar   blarblar   blar   blar   blar   blarblar   blar   blar   blar   blarblar   blar   blar   blar   blarblar   blar   blar   blar   blarblar   blar   blar   blar   blarblar   blar   blar   blar   blarblar   blar   blar   blar   blarblar   blar   blar   blar   blar",
      ],
      ["Github", "https://github.com/SEB-team44/woodongs/tree/fe-production"],
      ["URL", "www.woodongs.site"],
      ["Frontend", "React.js, contextAPI, WebsocketAPI, styled-components "],
      ["DB", "AWS"],
      ["Deployment", "AWS"],
    ],
  },
];

const ProjectList = () => {
  return (
    <>
      <div className="items-center m-auto max-w-6xl mt-8 w-full ">
        {projectArr.map((element, id) => {
          return (
            <>
              <div
                key={id}
                className="border-2 bg-white pt-10 pb-10 mt-16 md:m-16 md:ml-10 md:mr-10 sm:p-10 max-h-fit rounded-2xl shadow-2xl "
              >
                <SingleProject
                  id={element.id}
                  title={element.title}
                  duetime={element.duetime}
                  img={element.img}
                  mainContent={element.mainContent}
                  subContent={element.subContent}
                />
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default ProjectList;
