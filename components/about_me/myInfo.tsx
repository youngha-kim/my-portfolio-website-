import { FunctionComponent } from "react";

interface Personal {
  img: string;
  title: string;
  content: string;
  opt?: string;
}

const splitEmail = (el: string) => {
  const emailArr = el.split("@");

  return (
    <>
      <div>{emailArr[0]}</div>
      <div>{"@" + emailArr[1]}</div>
    </>
  );
};

const MyInfo: FunctionComponent<Personal> = (props) => {
  const { img, title, content, opt } = props;
  return (
    <>
      <div className="flex sm:ml-20">
        <img className="w-20" src={img} />
        <div className="flex-col ml-6">
          <div className="font-black text-lg mb-2">{title}</div>
          <div className="w-full">
            {content.includes("@") ? splitEmail(content) : content}
          </div>
          <div>{opt}</div>
        </div>
      </div>
    </>
  );
};

export default MyInfo;
