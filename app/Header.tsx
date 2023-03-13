import Link from "next/link";
import React from "react";

type Props = {};

function Header({}: Props) {
  return (
    <nav className="flex space-x-4 mb-2">
      <Link href="/" className="font-mono w-80 bg-blue-500 rounded px-4 py-2">
        Home
      </Link>
      <Link href="/todos" className="w-48 bg-cyan-200 rounded px-4 py-2">
        Todos
      </Link>
    </nav>
  );
}

export default Header;