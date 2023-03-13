import React from 'react'
import Link from 'next/link'
type Props = {}

function Header({}: Props) {
  return (
    <nav className="flex space-x-4 mb-2">
      <Link href="/" className="bg-blue-200 rounded px-4 py-2">
        Home
      </Link>
      <Link href="/todos" className="shadow-2xl bg-cyan-200 rounded px-4 py-2">
        Todos
      </Link>
    </nav>
  );
}

export default Header