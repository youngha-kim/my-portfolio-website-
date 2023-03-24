import { ProjectDetail } from "../../pages/[readMeId]/index";
import Image from "next/image";

const ReadMeDetail = (props: ProjectDetail) => {
  return (
    <>
      <nav className="bg-black text-white p-5 pl-20 text-xl">READ_ME</nav>
      <section className="bg-white p-20 pt-10 max-w-screen-2xl rounded-2xl shadow-2xl text-basic">
        <h1 className="text-3xl mb-10 font-bold">{props.title}</h1>
        <hr></hr>
        <div className="mt-5">
          <div className="mt-10">
            <h2 className="text-2xl font-bold">* Deployment URL</h2>
            <div>{props.URL}</div>
          </div>

          <div className="mt-10">
            <h2 className="text-2xl font-bold">* Outline</h2>
            <div className="text-lg">
              {props.outline.mainFunction.map((el, id) => (
                <div key={id}>{el}</div>
              ))}
            </div>
            <h3 className="text-xl font-bold">주요 기능</h3>
            <div className="text-lg">
              {props.outline.description.map((el, id) => (
                <div key={id}>{el}</div>
              ))}
            </div>
          </div>

          <div className="mt-10">
            {" "}
            <h2 className="text-2xl font-bold">* Background</h2>
            <div className="text-lg">
              {props.background.map((el, id) => (
                <div key={id}>{el}</div>
              ))}
            </div>
          </div>

          <div className="mt-10">
            <h2 className="text-2xl font-bold">* Meaning</h2>
            <div className="text-lg">
              {props.meaning.map((el, id) => (
                <div key={id}>{el}</div>
              ))}
            </div>
          </div>

          <div className="mt-10">
            <h2 className="text-2xl font-bold">* Stacks</h2>
            <div className="text-lg">
              {Object.entries(props.stacks).map((el ,id) => {
                return (
                  <>
                    <div className="flex flex-row" key={id}>
                      <div className="w-30">{`${el[0]} :`}</div>
                      <div>
                        {el[1].map((el ,id) => (
                          <div key={id}>{el}</div>
                        ))}
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>

          <div className="h-40 w-96">
            <Image src={props.image} alt="123123" />
          </div>
        </div>
      </section>
    </>
  );
};

export default ReadMeDetail;
