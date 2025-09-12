import Image from "next/image";
import Link from "next/link";

export function Navbar() {
  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-white/15 backdrop-blur-2xl rounded-b-xl shadow-md">
      <div className="bg-[#8A69D5]">
        <h2 className="text-center p-3 text-white tracking-wide">
          Boost Your Memory, Sharpen Your Focus!
        </h2>
      </div>

      <Link href="/">
        <Image
          src="/logo.png"
          alt="Thryve Logo"
          draggable={false}
          width={160}
          height={40}
          priority
          className="py-3"
        />
      </Link>
    </nav>
  );
}
