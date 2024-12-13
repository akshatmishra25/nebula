"use client";

import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  useUser,
} from "@clerk/nextjs";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import { TfiAlignJustify } from "react-icons/tfi";

export default function UserDashboardPage() {
  const { isSignedIn } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!isSignedIn) {
      router.push("/");
      return;
    }
  }, []);

  return (
    <div className="w-full border-b-[1px] border-gray-500 text-white p-4">
      <div className="max-w-screen-2xl mx-auto justify-between px-4 flex items-center pl-8">
        <Link href={"/"}>
          <h1 className="text-2xl uppercase font-bold">Nebula</h1>
        </Link>
        <div className="hidden lg:flex justify-between items-center gap-4">
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
              <UserButton />
            </SignedIn>
          </div>
        </div>
        <div className="inline-flex lg:hidden">
          <TfiAlignJustify color="white" className="text-md" />
        </div>
      </div>
    </div>
  );
}
