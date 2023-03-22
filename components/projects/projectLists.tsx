import SingleProject from "./singleProject";
import notion from "../../public/notion.png";
import github from "../../public/github.png";

import { StaticImageData } from "next/image";
type sub = string[]

interface Project {
  id : number
  title: string;
  duetime: string;
  img: StaticImageData[];
  mainContent: string[];
  subContent : sub[];
}
interface ProjectArray extends Array<Project> {}

const projectArr: ProjectArray = [
  {
    id : 1,
    title: "포트폴리오 웹사이트",
    duetime: "< 2023.03 개인 프로젝트 >",
    img: [github, github, github, github],
    mainContent: [
      " 내가 생각하는 나의 성격과 친구가 생각하는 나의 성격을 비교함으로써 겉으로 보이는 나의 모습이 어떠한지 파악해볼 수 있는 웹사이트입니다. 실제로 지인과 성격 검사를 서로 해주면서 얻은 아이디어를 바탕으로 직접 개발하였습니다.",
      " 백 엔드 개발자와 협업하는 과정에 관해 많이 배울 수 있었습니다. 필요한 명세를 문서로 작성하여 소통하였고, 필요한 지식도 함께 공유하며 학습할 수 있었습니다.",
    ],
    subContent : [
      ["주요기능" , "어떠고 저쩌고 하기 blar   blar   blar   blar   blarblar   blar   blar   blar   blarblar   blar   blar   blar   blarblar   blar   blar   blar   blarblar   blar   blar   blar   blarblar   blar   blar   blar   blarblar   blar   blar   blar   blarblar   blar   blar   blar   blar"],
      ["Github" , "www.어쩌고 저ㄱ쩌고 "],
      ["URL", "WWW.저쩌고 우쩌고"],
      ["Frontend", "next.js, typescript, tailwind css "],
      ["DB", "mongoDB"],
      ["Deployment", "vercel"]
    ]
  },
  {
    id : 2,
    title: "우리동네 스터디 Woodongs",
    duetime: "< 2022.10 4인 프로젝트 >",
    img: [notion ,notion, notion, notion, notion],
    mainContent: [
      " 내가 생각하는 나의 성격과 친구가 생각하는 나의 성격을 비교함으로써 겉으로 보이는 나의 모습이 어떠한지 파악해볼 수 있는 웹사이트입니다. 실제로 지인과 성격 검사를 서로 해주면서 얻은 아이디어를 바탕으로 직접 개발하였습니다.",
      " 백 엔드 개발자와 협업하는 과정에 관해 많이 배울 수 있었습니다. 필요한 명세를 문서로 작성하여 소통하였고, 필요한 지식도 함께 공유하며 학습할 수 있었습니다.",
    ],
    subContent : [
      ["주요기능" , "blar   blar   blar   blar   blarblar   blar   blar   blar   blarblar   blar   blar   blar   blarblar   blar   blar   blar   blarblar   blar   blar   blar   blarblar   blar   blar   blar   blarblar   blar   blar   blar   blarblar   blar   blar   blar   blarblar   blar   blar   blar   blarblar   blar   blar   blar   blar"],
      ["Github" , "www.어쩌고 저ㄱ쩌고 "],
      ["URL", "www.woodongs.site"],
      ["Frontend", "React.js, contextAPI, WebsocketAPI, styled-components "],
      ["DB", "AWS"],
      ["Deployment", "AWS"]
    ]
  },

];

const ProjectList = () => {
  return (
    <>
      <div className="m-auto max-w-6xl mt-8 ">
        {projectArr.map((element, id) => {
          return (
            <>
              <div
                key={id}
                className="border-2 bg-white m-10 p-10 max-h-fit rounded-2xl shadow-2xl "
              >
                <SingleProject
                  id = {element.id}
                  title={element.title}
                  duetime={element.duetime}
                  img={element.img}
                  mainContent={element.mainContent}
                  subContent = {element.subContent}
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
