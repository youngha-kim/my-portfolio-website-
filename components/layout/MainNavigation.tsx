import Link from "next/link";
import Intro from "../intro";


function MainNavigation() {
  const indexStyle = "w-auto px-4 py-2 text-xl hover:text-white transition duration-200";
  return (
    <header className=" py-6 ">
      <nav className="flex justify-between mb-2">
        <div className="font-mono w-80 rounded px-4 py-2 text-2xl text-[#e0dee8]">
          youngha's Portfolio
        </div>
        <div className="flex items-center">
          <Link href="/todos" className={indexStyle}>
            About me
          </Link>
          <Link href="/todos" className={indexStyle}>
            Skills
          </Link>
          <Link href="/todos" className={indexStyle}>
            Archiving
          </Link>
          <Link href="/todos" className={indexStyle}>
            Projects
          </Link>
        </div>
      </nav>
      <div>
        <Intro />
      </div>
    </header>
  );
}

export default MainNavigation;
