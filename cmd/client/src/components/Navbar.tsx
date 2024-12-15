import { NavbarLinkTypes } from "@/types/LinkTypes";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const navbarLinks: NavbarLinkTypes[] = [
  { name: "Examples", url: "https://discord.gg/93ksAWeNVW" },
  { name: "Github", url: "https://github.com/akshatmishra25/nebula" },
  { name: "Community", url: "https://discord.gg/93ksAWeNVW" },
];

export default function Navbar() {
  return (
    <div className="flex h-16 items-center justify-between w-full px-1">
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

      <div className="flex gap-2 items-center justify-center">
        {navbarLinks.map((link, _) => (
          <Link
            className="hover:underline"
            target="_blank"
            href={link.url}
            key={_}
          >
            {link.name}
          </Link>
        ))}
      </div>
      <div>
        <Link
          className="p-2 border hover:bg-gray-950 bg-gray-950/10 rounded-2xl"
          href="/signup"
        >
          Signup
        </Link>
      </div>
    </div>
  );
}
