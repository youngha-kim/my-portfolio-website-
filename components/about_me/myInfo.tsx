import { FunctionComponent } from "react";

interface Personal {
  img: string;
  title: string;
  content: string;
  opt?: string;
}

const MyInfo: FunctionComponent<Personal> = (props) => {
  return (
    <>
      <div className="flex ml-20">
        <img className="w-20" src={props.img} />
        <div className="flex-col ml-6">
          <div className="font-black text-lg mb-2">{props.title}</div>
          <div className="overflow-x-auto">{props.content}</div>
          <div>{props.opt}</div>
        </div>
      </div>
    </>
  );
};

export default MyInfo;
