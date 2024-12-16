import { NavbarLinkTypes } from "@/types/LinkTypes";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export const navbarLinks: NavbarLinkTypes[] = [
  { name: "Examples", url: "https://discord.gg/93ksAWeNVW" },
  { name: "Github", url: "https://github.com/akshatmishra25/nebula" },
  { name: "Community", url: "https://discord.gg/93ksAWeNVW" },
];

export default function Navbar() {
  const [showHamMenu, setShowHamMenu] = useState<boolean>(false);

  return (
    <div className="flex h-16 border-b-[.5px] items-center justify-between w-full px-1">
      <div className="flex items-center">
        <Image
          width={50}
          height={50}
          src="/nebula.png"
          alt="Nebula-logo"
          className="rounded-full"
        />
        <p className="text-xl gradient-text font-semibold">Nebula</p>
      </div>

      <div className="hidden sm:flex gap-3 items-center justify-center">
        {navbarLinks.map((link, _) => (
          <Link
            className="hover:underline text-gray-400 font-semibold"
            target="_blank"
            href={link.url}
            key={_}
          >
            {link.name}
          </Link>
        ))}
      </div>
      <div className="hidden sm:block">
        <Link
          className="py-2 px-3 border hover:shadow-md hover:border-gray-400 rounded-xl"
          href="/signup"
        >
          Sign In
        </Link>
      </div>
      <div
        onClick={() => setShowHamMenu(!showHamMenu)}
        className="sm:hidden block cursor-pointer"
      >
        {showHamMenu ? <X /> : <Menu />}
      </div>
    </div>
  );
}
