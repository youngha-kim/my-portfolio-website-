
import About_me from "@/components/about_me/about_me"
import Archiving from "../components/archiving/Archiving"
import Projects from '../components/projects/projects'
import Skills from "@/components/skills/skills"
export default function Home() {
  return (
    <div className="flex-col mb-2">
      <About_me />
      <Skills/>
      <Archiving/>
      <Projects/>
    </div>
  )
}

