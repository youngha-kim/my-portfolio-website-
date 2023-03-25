import Subtitle from "../shared/subtitle";
import ArchiveList from "./archiveLists";
import { useRef } from "react";


async function addMeetupHandler(enteredData: any) {
  console.log(enteredData);
  const response = await fetch("/api/archiveData", {
    method: "POST",
    body: JSON.stringify(enteredData),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  console.log(data);
}


const Archiving = (props: any) => {
  const { archiving } = props;

  const subtitleInputRef = useRef<HTMLInputElement>(null);
  const imageInputRef = useRef<HTMLInputElement>(null);
  const contentInputRef = useRef<HTMLInputElement>(null);
  const linkInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: any) => {
    event.preventDefault();
    const enteredSubtitle = subtitleInputRef.current!.value;
    const enteredImage = imageInputRef.current!.value;
    const enteredContent = contentInputRef.current!.value;
    const enteredLink = linkInputRef.current!.value;

    const archieveData = {
      subtitle: enteredSubtitle,
      image: enteredImage,
      content: enteredContent,
      link: enteredLink,
    };

    addMeetupHandler(archieveData);
  };
  return (
    <article className="bg-gradient-to-r from-black to-gray-400 pt-20 m-auto pb-10 m-auto max-w-10xl">
      <Subtitle title={"Archiving"} txtColor={"text-white"} />
      <div>
        <ArchiveList archiving={archiving} />
      </div>
      <form onSubmit={submitHandler} className="bg-white">
        <div>
          <label htmlFor="image">Image</label>
          <input required type="text" ref={imageInputRef} />
        </div>
        <div>
          link <input required type="text" ref={linkInputRef} />
        </div>
        <div>
          <label htmlFor="title">subtitle</label>
          <input required type="text" ref={subtitleInputRef} />
        </div>
        <div>
          <label htmlFor="description">Content</label>
          <input required type="textarea" ref={contentInputRef} />
        </div>
        <div>
          <button>확인</button>
        </div>
      </form>
    </article>
  );
};

export default Archiving;
