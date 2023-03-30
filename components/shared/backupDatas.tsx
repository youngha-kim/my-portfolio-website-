import { StaticImageData } from "next/image";
import notion from "../../public.notion.png"
import github from "../../public.notion.png"

export interface Personal {
  id: number;
  img: string;
  title: string;
  content: string;
  opt?: string;
}

const personal_Info: Personal[] = [
  {
    id: 1,
    img: "https://cdn-icons-png.flaticon.com/512/1144/1144811.png",
    title: "이름",
    content: "김영하",
  },
  {
    id: 2,
    img: "https://cdn-icons-png.flaticon.com/512/3178/3178158.png",
    title: "이메일",
    content: "youngha.frontend@gmail.com",
  },
  {
    id: 3,
    img: "https://cdn-icons-png.flaticon.com/512/455/455705.png",
    title: "연락처",
    content: "010-8334-9844",
  },
  {
    id: 4,
    img: "https://cdn-icons-png.flaticon.com/512/5644/5644696.png",
    title: "학력",
    content: "한성대학교",
    opt: "[무역학과]",
  },
];


interface Archieve {
  id?: string,
  image: StaticImageData | string;
  link: string;
  subtitle: string;
  content: string[];
}

interface ArchieveArray extends Array<Archieve> {}

const archieveArr: ArchieveArray = [
  {
    image: notion,
    link: "https://young-ha.notion.site/My-Front-end-Studies-20c65dacb6784af8ad4fec67ec45bb07",
    subtitle: "노션 개인 블로그",
    content: [
      "언어, 프레임워크, 라이브러리 등 공부 기록",
      "과제, 프로젝트 중 만난 에러 기록",
      "Complete, Writing 등의 상태로, 지식 부채 관리",
    ],
  },
  {
    image: github,
    link: "https://github.com/youngha-kim",
    subtitle: "깃허브 코드 저장소",
    content: [
      "프로젝트의 소스코드",
      "부트캠프 수강시 부여된 과제들의 예제 코드",
      "강의, 공식문서, 블로그 예제 코드",
    ],
  },
];

interface OutLine {
  mainFunction: string[];
  description: string[];
}
interface Stacks {
  [key: string]: string[];
}

export interface ProjectDetail {
  outline: OutLine;
  stacks: Stacks;
  background: string[];
  meaning: string[];
  deployment: string;
  image: StaticImageData;
  title: string | undefined | string[];
  [key: string]: any;
}

const mockData: ProjectDetail = {
  outline: {
    mainFunction: [
      "blur blur blur lbrer blureblur",
      "blur blur blur lbrer blureblur blur blur lbrer blure",
      "blur blur blur lbrer blureblur blur blur lbrer blure",
    ],
    description: [
      "blur blur blur lbrer blure blur blur blur lbrer blureblur blur blur lbrer blureblur blur blur lbrer blureblur blur blur lbrer blureblur blur blur lbrer blureblur blur blur lbrer blureblur blur blur lbrer blure",
      "2 , asdfasdfas blur blur blur lbrer blureblur blur blur lbrer blureblur blur blur lbrer blureblur blur blur lbrer blureblur blur blur lbrer blureblur blur blur lbrer blureblur blur blur lbrer blure",
      "중첩구조의 배열과 객체들을 재귀함수를 통해 serialize를 진행해 봄으로써 재귀에 대한 이해가 깊어질 수 있었습니다."
    ],
  },
  background: [
    "blur blur blur lbrer blureblur blur blur lbrer blureblur blur blur lbrer blureblur blur blur lbrer blureblur blur blur lbrer blureblur blur blur lbrer blureblur blur blur lbrer blureblur blur blur lbrer blureblur blur blur lbrer blure",
    "blur blur blur lbrer blureblur blur blur lbrer blureblur blur blur lbrer blureblur blur blur lbrer blureblur blur blur lbrer blureblur blur blur lbrer blureblur blur blur lbrer blureblur blur blur lbrer blureblur blur blur lbrer blureblur blur blur lbrer blure",
    "blur blur blur lbrer blureblur blur blur lbrer blureblur blur blur lbrer blureblur blur blur lbrer blureblur blur blur lbrer blureblur blur blur lbrer blureblur blur blur lbrer blureblur blur blur lbrer blureblur blur blur lbrer blureblur blur blur lbrer blure",
  ],
  meaning: [
    "blur blur blur lbrer blureblur blur blur lbrer blureblur blur blur lbrer blureblur blur blur lbrer blureblur blur blur lbrer blure",
    "blur blur blur lbrer blureblur blur blur lbrer blureblur blur blur lbrer blureblur blur blur lbrer blureblur blur blur lbrer blure",
    "blur blur blur lbrer blureblur blur blur lbrer blureblur blur blur lbrer blureblur blur blur lbrer blureblur blur blur lbrer blure",
  ],
  stacks: {
    frontend: ["react", "reactquery", "ty"],
    database: ["123"],
  },
  deployment: "www.woodongs.site",
  image: notion,
  title: "readMeId",
};