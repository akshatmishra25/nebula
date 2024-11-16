"use client";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Banner = () => {
  const [text] = useTypewriter({
    words: [
      "your all-in-one backend solution...",
      "easily manage projects and storage with custom services.",
      "Ship your dream projects.",
    ],
    loop: true,
    typeSpeed: 25,
    deleteSpeed: 15,
    delaySpeed: 600,
  });
  return (
    <div className="h-96 max-w-screen-2xl mx-auto flex flex-col justify-center items-center">
      <h1 className="text-4xl text-white uppercase font-bold">NEBULA</h1>
      <p className="text-lg font-semibold text-slate-200 mt-2">
        {text}
        <Cursor cursorBlinking cursorStyle="|" cursorColor="#ffaa17" />
      </p>
    </div>
  );
};

export default Banner;
