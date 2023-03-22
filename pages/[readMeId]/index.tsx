import { GetStaticProps } from "next";
import ReadMeDetail from "@/components/projects/readMeDeatail";
type Mock = {
  image: string;
  title: string;
  id: string;
  content: string;
  description: string;
};

const ReadMePage = (props: any) => {
  return (
    <>
      <ReadMeDetail
        img={props.mockData.image}
        title={props.mockData.title}
        content={props.mockData.content}
        description={props.mockData.description}
      />
    </>
  );
};

export function getStaticPaths() {
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
}

export const getStaticProps = (context: any) => {
  const readMeId = context.params.readMeId;
  console.log(readMeId);
  return {
    props: {
      mockData: {
        title: readMeId,
        image:
          "https://imagesunsplash.com/photo-1677980102989-96e7c29731f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
        content: "123123",
        description:
          "lemsdupsd sdfasdfasd fasdfasdfasdf asdfasdfasdfa sdfasdfasdfasdfasd fasdfsadfasdf",
      },
    },
  };
};

export default ReadMePage;
