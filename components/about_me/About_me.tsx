import Subtitle from "../shared/subtitle";
import MyInfo from "./myInfo";

interface Personal {
  id: number;
  img: string;
  title: string;
  content: string;
  opt?: string;
}

const About_me = ( props : any) => {
  const aboutMe = props.aboutMe;
  return (
    <article className="bg-[#FAB9B9] border-b-2 border-black bg-white pt-20 pb-10 m-auto max-w-10xl">
      <div className="mb-20">
        <Subtitle title={"About me"} txtColor={"text-black"} />
      </div>
      <ul className="flex row flex-wrap justify-around m-auto max-w-3xl">
        {aboutMe?.map((element : any) => {
          return (
            <li key={element.id} className="w-80 h-40 sm:items-center">
              <MyInfo
                img={element.img}
                title={element.title}
                content={element.content}
                opt={element?.opt}
              />
            </li>
          );
        })}
      </ul>
    </article>
  );
};

export default About_me;
