import { TfiAlignJustify } from "react-icons/tfi";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";

const Navbar = () => {
  const navbarLinks = [
    { Examples: "https://discord.gg/93ksAWeNVW" },
    { Github: "https://github.com/akshatmishra25/nebula" },
    { Community: "https://discord.gg/93ksAWeNVW" },
  ];

  return (
    <div className="w-full border-b-[1px] border-gray-500 text-white p-4">
      <div className="max-w-screen-2xl mx-auto justify-between px-4 flex items-center pl-8">
        <h1 className="text-2xl uppercase font-bold">Nebula</h1>
        <ul className="hidden lg:inline-flex items-center gap-3 uppercase text-md font-semibold">
          {navbarLinks.map((navLink, index) => {
            const [text, url] = Object.entries(navLink)[0]; // Destructure key-value pair

            return (
              <li key={index} className="hover:scale-105 cursor-pointer">
                <Link href={url} target="_blank" rel="noopener noreferrer">
                  {text}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="hidden lg:flex justify-between items-center gap-3">
          <Link href={"https://github.com/akshatmishra25/nebula"}>
            <FaGithub size={22} />
          </Link>
          <div className="hidden lg:inline-flex items-center">
            <SignedOut>
              <SignInButton>
                <p
                  className="px-2 py-1 bg-white text-black text-md font-semibold rounded-xl 
            hover:bg-darkRed hover:bg-neutral-200 cursor-pointer"
                >
                  Sign In
                </p>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <Link href={"/dashboard"}>Dashboard</Link>
            </SignedIn>
          </div>
        </div>
        <div className="inline-flex lg:hidden">
          <TfiAlignJustify color="white" className="text-3xl" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
