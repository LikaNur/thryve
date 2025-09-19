"use client";

import Image from "next/image";
import Link from "next/link";
import { ModeToggle } from "../ui/ModeToggle";

export function Navbar() {
  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-white/15 backdrop-blur-2xl rounded-b-xl shadow-md dark:bg-[#49235269]/50">
      <div className="bg-[#8A69D5]">
        <h2 className="text-center p-3 text-white tracking-wide">
          Boost Your Memory, Sharpen Your Focus!
        </h2>
      </div>

      <div className="flex items-center justify-between py-3 px-4">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Thryve Logo"
            draggable={false}
            width={160}
            height={40}
            priority
          />
        </Link>
        <ModeToggle />
      </div>
    </nav>
  );
}
