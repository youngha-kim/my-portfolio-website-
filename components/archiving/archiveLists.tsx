import SingleArchieve from "./singleArchive";
import notion from "../../public/notion.png";
import github from "../../public/github.png";
import { StaticImageData } from "next/image";

interface Archieve {
  id?: string,
  image: StaticImageData | string;
  link: string;
  subtitle: string;
  content: string[];
}
const ArchiveList = (props : any) => {
  const {archiving } = props

  return (
    <>
      <div className="flex flex-col items-center m-auto max-w-4xl mt-8 md:flex-row md:justify-around">
        {archiving?.map((element : Archieve) => {
          return (
            <>
              <div
                key={element.id}
                className="border-2 bg-white m-10 p-6 max-h-fit max-w-fit rounded-2xl shadow-2xl "
              >
               
                <SingleArchieve
                  img={ element.image === "notion" ? notion : github }
                  link={element.link}
                  subtitle={element.subtitle}
                  content={element.content}
                />
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default ArchiveList;
