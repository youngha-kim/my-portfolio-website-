import SinglSkill from "./singleSkill";
import react from "../../public/react.png";
import ts from "../../public/ts.png";
import htcsjs from "../../public/ht_cs_js.png";
import next from "../../public/next.png";
import git from "../../public/git.png";
import react_query from "../../public/react_query.png";
import tailwind from "../../public/tailwind.png";
import styled from "../../public/styled.png";
import github from "../../public/github.png";
import vercel from "../../public/vercel.png";
import netlify from "../../public/netlify.png";
import notion from "../../public/notion.png";
import slack from "../../public/slack.png";
import figma from "../../public/figma.png";
import node from "../../public/node.png";
import mongo from "../../public/mongo.png";
import { StaticImageData } from "next/image";

const SkillLists = () => {
  interface Stacks {
    id: number;
    stack: string;
    imgs: StaticImageData[];
  }
  interface StacksArray extends Array<Stacks> {}

  const elementArray: StacksArray = [
    // HTMLCSSJavascript, typescript, react,  Nextjs, React-query, tailwind,  styled-component
    {
      id: 1,
      stack: "Frontend",
      imgs: [htcsjs, ts, react, next, react_query, tailwind, styled],
    },
    // nodejs, mongoDB
    { id: 2, stack: "DB & Server", imgs: [node, mongo] },

    // Vercel , Netlify
    { id: 3, stack: "Deployment", imgs: [vercel, netlify] },

    // git, github
    { id: 4, stack: "Version Controls", imgs: [git, github] },

    // notion, slack, figma
    { id: 5, stack: "Communications", imgs: [notion, slack, figma] },
  ];

  return (
    <>
      <div className="flex-col flex-wrap justify-around m-auto max-w-5xl">
        {elementArray.map((element, id) => {
          return (
            <>
              <section
                key={element.id}
                className={
                  element.stack === "Frontend" ? "max-h-fit max-w-md" : "max-w-md"
                }
              >
                <div className="border-2 bg-white m-10 p-10">
                  <SinglSkill stack={element.stack} imgs={element.imgs} />
                </div>
              </section>
            </>
          );
        })}
      </div>
    </>
  );
};

export default SkillLists;
