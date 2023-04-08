import SingleProject from "./singleProject";
import archiving from "../../public/archiving.png";
import intro from "../../public/intro.png";
import skills from "../../public/skills.png";
import main from "../../public/main.png";
import chat from "../../public/chat.png";
import login from "../../public/login.png";
import alarm from "../../public/alarm.png";
import recruit from "../../public/recruit.png";
import mypage from "../../public/mypage.png";
import aboutme from "../../public/aboutme.png";

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
    img: [archiving, intro, aboutme, skills],
    mainContent: [
      " 처음으로 진행했던 단독 프로젝트 입니다. 보는 이로 하여금, `어떻게 하면 쉽게 읽힐 수 있을까`에 대한 부분들을 고민하며 개발하였습니다.",
      " 폴더 구조의 세분화, 컴포넌트를 구분하는 기준을 스스로 정의하면서, 차분히 개발을 할 수 있었습니다. 특히 하드코딩을 피하는 것과 코드의 길이는 줄이는 것을 우선순위로 삼은 결과, useCustom hook을 사용하는 것에 익숙해 진 계기가 되었습니다.",
      " Next.js, Typescript등 처음 접해본 기술들을 직접 학습하며 적용해 나갔다는 점이 저에게로 하여금 새로운 기술에 대한 두려움을 설렘으로 바뀌게 된 계기가 되었습니다. 특히 빌드시 사전 렌더링된 페이지를 가져와 더 나은 사용자 경험을 제공하는 SSG 기법과 동적인 페이징을 제공하는 API_route기능을 사용해 보면서, Next.js에 대한 위대함을 느껴볼 수 있었고, 더 깊게 배우고 싶다는 호기심이 들게 되었습니다.",
    ],
    subContent: [
      [
        "주요기능",
        "간단한 자기소개, 인적사항, 기술스택, Github 및 노션 링크, 프로젝트 경험, 데이터 CRUD",
      ],
      ["Github", "https://github.com/youngha-kim/my-portfolio-website-"],
      ["URL", "https://my-portfolio-website-mu.vercel.app/"],
      ["Frontend", "Next.js, Typescript, Tailwind css "],
      ["DB", "MongoDB Atlas"],
      ["Deploy", "Vercel"],
    ],
  },
  {
    id: 2,
    title: "우리동네 스터디 Woodongs",
    duetime: "< 2022.10 4인 프로젝트 >",
    img: [login, main, mypage, recruit, chat, alarm],
    mainContent: [
      " 부트캠프의 최종 프로젝트으로 4인이서 진행한 팀 프로젝트입니다. 백엔드 개발자와 협업하면서 명확한 명세를 문서로 작성하여 원활한 소통을 유지하였고, 서로 필요한 지식을 공유하며 함께 학습하는 경험을 통해 많은 것을 배울 수 있었습니다.",
      " 웹소켓 프로토콜을 사용하여 채팅 및 알림 기능을 구현하면서 실시간 통신에 대한 내용을 새로 배웠으며, 이러한 기술을 활용하면 더 다양한 기능을 구현할 수 있다는 기대감을 갖게 되었습니다.",
      " Geolocation API와 같은 웹 API를 사용해 보면서, 비동기 처리가 사용자 경험에 얼마나 중요한 영향을 미치는지 더욱 명확하게 인지할 수 있었습니다. 이는 막연한 지식에서 벗어나 직접 경험을 통해 깨닫게 된 중요한 점이었습니다.",
      " 회원가입과 로그인 기능을 구현하면서, Oauth와 JWT에 대한 이해도를 보다 깊게 느낄 수 있었습니다. 실제로 이러한 기능을 구현해 보면서, 이들이 어떻게 흘러가고 연계되는지에 대한 이해도가 높아졌습니다. ",
    ],
    subContent: [
      [
        "주요기능",
        "내 위치를 토대로 3km 이내 생성된 스터디들 조회, 원하는 스터디 가입 또는 스터디원 모집, 스터디원들 간의 실시간 채팅 기능, 전체 게시판 기능",
      ],
      ["Github", "https://github.com/SEB-team44/woodongs/tree/fe-production"],
      ["URL", "https://woodongs.site"],
      ["Frontend", "React.js, ContextAPI, WebsocketAPI, Styled-components "],
      ["DB", "AWS"],
      ["Deploy", "AWS"],
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
                className="border-black border-4 bg-white pt-10 pb-10 mt-16 md:m-16 md:ml-10 md:mr-10 sm:p-10 max-h-fit rounded-2xl shadow-2xl "
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
