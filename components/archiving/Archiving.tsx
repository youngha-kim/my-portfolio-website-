import Subtitle from "../../components/ui/subtitle"
import ArchiveList from "./archiveLists"
const Archiving = () => {
  return(
    <article className="bg-black pt-20 m-auto pb-10 m-auto max-w-10xl">
    <Subtitle title = {"Archiving"} txtColor = {"text-white"}/>
    <ArchiveList/>
  </article>
  )
}

export default Archiving