import Subtitle from "../shared/subtitle";
import ArchiveList from "./archiveLists";
const Archiving = () => {
  return (
    <article className="bg-gradient-to-r from-black to-gray-400 pt-20 m-auto pb-10 m-auto max-w-10xl">
      <Subtitle title={"Archiving"} txtColor={"text-white"} />
      <div>
        <ArchiveList />
      </div>
    </article>
  );
};

export default Archiving;
