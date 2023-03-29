import { GetStaticProps, GetStaticPaths, GetStaticPropsContext } from "next";
import ReadMeDetail from "@/components/projects/readMeDetail";
import { StaticImageData } from "next/image";
import Serial from "@/components/shared/serialData";
import ConnectDb from "@/components/shared/ConnectDb";

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
export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  const readMeId = context.params?.readMeId;
  const data = await ConnectDb("readMe","get", readMeId )
  const  SerialedReadMe  =  Serial(data[0]);

  return {
    props: SerialedReadMe ,
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
        deployment={props?.deployment}
        outline={props?.outline}
        background={props?.background}
        stacks={props?.stacks}
        meaning={props?.meaning}
        image={props?.image}
        title={props?.title}
      />
    </>
  );
};

export default ReadMePage;
