"use client";

import { NavbarLinkTypes } from "@/types/LinkTypes";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";

export const navbarLinks: NavbarLinkTypes[] = [
  { name: "Examples", url: "https://discord.gg/93ksAWeNVW" },
  { name: "Docs", url: "https://github.com/akshatmishra25/nebula" },
  { name: "Community", url: "https://discord.gg/93ksAWeNVW" },
];

export default function Navbar() {
  const [showHamMenu, setShowHamMenu] = useState<boolean>(false);

  return (
    <div className="flex h-16 border-b-[1px] items-center justify-between w-full px-1">
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

      <div className="hidden sm:flex gap-4 items-center justify-center">
        {navbarLinks.map((link, _) => (
          <Link
            className="hover:underline hover:text-purple-500 text-gray-400 font-semibold"
            target="_blank"
            href={link.url}
            key={_}
          >
            {link.name}
          </Link>
        ))}
      </div>
      <div className="hidden sm:flex sm:gap-6 mr-2 sm:items-center">
        <Link href={"https://github.com/akshatmishra25/nebula"} target="_blank">
          <FaGithub size={24} />
        </Link>
        <Link
          className="border border-white text-gray-200 px-2 py-1 rounded-md hover:text-purple-500 hover:border-purple-500 transition-all duration-300"
          href="/login"
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
