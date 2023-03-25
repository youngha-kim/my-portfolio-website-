import Subtitle from "../shared/subtitle";
import MyInfo from "./myInfo";

interface Personal {
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

const About_me = ( props : any) => {
  const aboutMe = props.aboutMe;
  return (
    <article className="bg-white pt-20 pb-10 m-auto max-w-10xl">
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
