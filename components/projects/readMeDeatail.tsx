import { ProjectDetail } from "../../pages/[readMeId]/index";
import useDetail from "./hooks/useDetail";
import Link from "next/link";
import Image from "next/image";

const ReadMeDetail = (props: ProjectDetail) => {
  const { title, deployment, outline, background, meaning, stacks } = props;
  const propsKeys = Object.keys(props);
  const { some } = useDetail(propsKeys, props);

  const moveToOuter = (deployment : string) => {
    return window.location.replace(deployment)
  }
  return (
    <>
    <div className="max-w-screen-xl w-fit">
      <nav className="bg-black text-white p-5 pl-20 text-xl">READ_ME</nav>
      <section className="bg-white p-10 sm:p-20 pt-10 rounded-2xl shadow-2xl text-basic">
        <h1 className="text-3xl mb-10 font-bold">{title}</h1>
        <hr></hr>
        <div className="mt-5">
          <div className="mt-14">
            <h2 className="text-2xl font-semibold">🟢 Deployment</h2>
            <button className="text-xl ml-4 mt-4 text-blue-400" onClick={() => moveToOuter(deployment)}>
              <Link href={deployment} passHref>  [{deployment}]</Link>
            </button>
          </div>
          <div className="mt-14">
            <h2 className="text-2xl font-semibold">🟡 Outline</h2>
            <div className="text-lg ml-4 mt-4">
              {outline.description.map((el, id) => (
                <div key={id}>{el}</div>
              ))}
            </div>
            <h3 className="text-xl font-bold mt-4 pl-4">{`★ 주요 기능`}</h3>
            <div className="text-lg ml-4 mt-2">
              {outline.mainFunction.map((el, id) => (
                <div key={id}>{el}</div>
              ))}
            </div>
          </div>

          <div className="mt-14">
            <h2 className="text-2xl font-semibold">🟣 Background</h2>
            <div className="text-lg ml-4 mt-4">
              {background.map((el, id) => (
                <div key={id}>{el}</div>
              ))}
            </div>
          </div>

          <div className="mt-14">
            <h2 className="text-2xl font-semibold">🟠 Meaning</h2>
            <div className="text-lg ml-4 mt-4">
              {meaning.map((el, id) => (
                <div key={id}>{el}</div>
              ))}
            </div>
          </div>

          <div className="mt-14">
            <h2 className="text-2xl font-semibold">🔵 Stacks</h2>
            <div className="text-lg ml-4 mt-4">
              {Object.entries(stacks).map((el, id) => {
                return (
                  <>
                    <div
                      className="flex flex-row justify-between w-80"
                      key={id}
                    >
                      <div className="font-bold basis-1/4 ">{`${el[0]}`}</div>
                      <div className="basis-3/4 mb-5 ml-10">
                        {el[1].map((el, id) => (
                          <div className="pl-2" key={id}>
                            {" "}
                            {`${el}`}{" "}
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>

          {/* <div className="h-40 w-96">
            <Image src={props.image} alt="123123" />
          </div> */}
        </div>
      </section>
      </div>
    </>
  );
};

export default ReadMeDetail;
