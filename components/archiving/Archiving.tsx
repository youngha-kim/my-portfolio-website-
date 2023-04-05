import Subtitle from "../shared/subtitle";
import ArchiveList from "./archiveLists";
import AddArchiving from "./addArchiving"




const Archiving = (props: any) => {
  const { archiving } = props;
  return (
    <article className="border-b-2 border-black bg-[#FAB9B9] to-gray-400 pt-20 m-auto pb-10 m-auto max-w-10xl">
      <Subtitle title={"Archiving"} txtColor={"text-black"} />
      <div>
        <ArchiveList archiving={archiving} />
      </div>
      {/* <AddArchiving/> */}
    </article>
  );
};

export default Archiving;
