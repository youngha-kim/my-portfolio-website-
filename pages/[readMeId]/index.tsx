import { GetStaticProps, GetStaticPaths, GetStaticPropsContext } from "next";
import ReadMeDetail from "@/components/projects/readMeDeatail";
import { StaticImageData } from "next/image";
import notion from "../../public/notion.png";

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
  URL: string;
  image: StaticImageData;
  title?: string;
}

export const getStaticProps: GetStaticProps = (
  context: GetStaticPropsContext
) => {
  const readMeId = context.params?.readMeId;

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
        "asdfasdfasdfsfadblur blur blur lbrer blureblur blur blur lbrer blureblur blur blur lbrer blureblur blur blur lbrer blureblur blur blur lbrer blureblur blur blur lbrer blureblur blur blur lbrer blureblur blur blur lbrer blure",
      ],
    },
    background: [
      "blur blur blur lbrer blureblur blur blur lbrer blureblur blur blur lbrer blureblur blur blur lbrer blureblur blur blur lbrer blureblur blur blur lbrer blureblur blur blur lbrer blureblur blur blur lbrer blureblur blur blur lbrer blure",
      "blur blur blur lbrer blureblur blur blur lbrer blureblur blur blur lbrer blureblur blur blur lbrer blureblur blur blur lbrer blureblur blur blur lbrer blureblur blur blur lbrer blureblur blur blur lbrer blureblur blur blur lbrer blureblur blur blur lbrer blure",
      "blur blur blur lbrer blureblur blur blur lbrer blureblur blur blur lbrer blureblur blur blur lbrer blureblur blur blur lbrer blureblur blur blur lbrer blureblur blur blur lbrer blureblur blur blur lbrer blureblur blur blur lbrer blureblur blur blur lbrer blure",
    ],
    meaning: ["blur blur blur lbrer blureblur blur blur lbrer blureblur blur blur lbrer blureblur blur blur lbrer blureblur blur blur lbrer blure", "blur blur blur lbrer blureblur blur blur lbrer blureblur blur blur lbrer blureblur blur blur lbrer blureblur blur blur lbrer blure", "blur blur blur lbrer blureblur blur blur lbrer blureblur blur blur lbrer blureblur blur blur lbrer blureblur blur blur lbrer blure"],
    stacks: {
      frontend: ["react", "reactquery", "ty"],
      database: ["123"],
    },
    URL: "www,blur blur blur lbrer blure.com",
    image: notion,
  };

  return {
    props: { ...mockData, title: readMeId },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    fallback: false,
    paths: [
      {
        params: { readMeId: "우리동네 스터디 Woodongs" },
      },
      {
        params: { readMeId: "포트폴리오 웹사이트" },
      },
    ],
  };
};

const ReadMePage = (props: ProjectDetail) => {
  return (
    <>
      <ReadMeDetail
        image={props?.image}
        title={props?.title}
        background={props?.background}
        outline={props?.outline}
        meaning={props?.meaning}
        stacks={props?.stacks}
        URL={props?.URL}
      />
    </>
  );
};

export default ReadMePage;
