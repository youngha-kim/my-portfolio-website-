
import About_me from "../components/about_me/About_me"
import Skills from "../components/skills/Skills"
import Archiving from "../components/archiving/Archiving"
import Projects from '../components/projects/Projects'

export default function Home() {
  return (
    <div className="flex-col space-x-4 mb-2 ">
      <About_me />
      <Skills/>
      <Archiving/>
      <Projects/>
    </div>
  )
}

