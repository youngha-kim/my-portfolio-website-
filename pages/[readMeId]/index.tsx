import { GetStaticProps, GetStaticPaths, GetStaticPropsContext } from "next";
import ReadMeDetail from "@/components/projects/readMeDeatail";
import { StaticImageData } from "next/image";
import { MongoClient} from "mongodb";
import Serial from "@/components/shared/Serial";

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

  const client = await MongoClient.connect(
    `mongodb+srv://youngha-kim:dkstmq25@my-portfolio.yerzt7i.mongodb.net/portfolio?retryWrites=true&w=majority`
  );
  const db = client.db();
  const readMeCollection = db.collection("readMe");
  const readMeData = await readMeCollection.find({ title: readMeId }).toArray();
  const  SerialedData  =  Serial(readMeData[0]);

  return {
    props: SerialedData ,
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
