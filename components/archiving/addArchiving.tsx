import { useRef } from "react";

async function addMeetupHandler(enteredData: any) {
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
const AddArchiving = () => {
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
    <form onSubmit={submitHandler} className="bg-gray-200">
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
  );
};

export default AddArchiving