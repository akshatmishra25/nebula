import { TfiAlignJustify } from "react-icons/tfi";
import Link from "next/link";
import { SignedIn, SignedOut, SignInButton, useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const navbarLinks = [
    { Examples: "https://discord.gg/93ksAWeNVW" },
    { Github: "https://github.com/akshatmishra25/nebula" },
    { Community: "https://discord.gg/93ksAWeNVW" },
  ];
  const router = useRouter();
  const { user } = useUser();

  if (user) {
    router.push("/");
  }

  return (
    <div className="w-full flex border-b-[1px] border-gray-500 text-white p-4">
      <div className="flex w-full justify-between px-4 items-center pl-8">
        <Link href={"/"}>
          <h1 className="text-2xl uppercase font-bold">Nebula</h1>
        </Link>
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

        <div className="hidden lg:inline-flex items-center">
          <SignedOut>
            <SignInButton>
              <p
                className="px-3 py-1 bg-white text-black text-md font-semibold rounded-xl 
            hover:bg-darkRed hover:bg-neutral-200 cursor-pointer"
              >
                Sign In
              </p>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <Link href={`/dashboard/${user?.id}`}>Dashboard</Link>
          </SignedIn>
        </div>
      </div>
      <div className="inline-flex lg:hidden">
        <TfiAlignJustify color="white" className="text-3xl" />
      </div>
    </div>
  );
};

export default Navbar;
