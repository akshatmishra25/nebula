import { TfiAlignJustify } from "react-icons/tfi";
import Link from "next/link";

const Navbar = () => {
    const navbarLinks = [
        { "Examples": "https://discord.gg/93ksAWeNVW" },
        { "Github": "https://github.com/akshatmishra25/nebula" },
        { "Community": "https://discord.gg/93ksAWeNVW" }
    ];

    return (
        <div className="w-full border-b-[1px] border-gray-500 text-white p-4">
            <div className="max-w-screen-2xl mx-auto justify-between px-4 flex items-center pl-8">
                <h1 className="text-2xl uppercase font-bold">Nebula</h1>
                <ul className="hidden lg:inline-flex items-center gap-3 uppercase text-md font-semibold">
                    {navbarLinks.map((navLink, index) => {
                        const [text, url] = Object.entries(navLink)[0];  // Destructure key-value pair

                        return (
                            <li key={index} className="hover:text-hoverColor cursor-pointer duration-300">
                                <Link href={url} target="_blank" rel="noopener noreferrer">
                                    {text}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
                <div className="hidden lg:inline-flex items-center">
                    <button className="w-48 h-12 bg-white text-black uppercase text-md font-semibold rounded-md 
                    hover:bg-darkRed hover:text-white">
                        Get Started
                    </button>
                </div>
                <div className="inline-flex lg:hidden">
                    <TfiAlignJustify className="text-3xl" />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
