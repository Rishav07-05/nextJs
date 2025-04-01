import Link from "next/link";
import { BackgroundLines } from "./ui/background-lines";

const HeroSection = () => {
  return (
    <div className="h-auto md:h-screen w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-20 lg:py-32">
      <div className="relative z-10 w-full text-center px-4 sm:px-8 md:px-16 ">
        <BackgroundLines className="flex items-center justify-center w-full flex-col">
          {/* Heading */}
          <h1 className="mt-20 sm:mt-24 md:mt-0 text-3xl sm:text-5xl md:text-7xl lg:text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-zinc-700">
            Learn about Virtual Study
          </h1>

          {/* Description */}
          <p className="mt-6 sm:mt-8 md:mt-10 font-normal text-sm sm:text-base md:text-xl lg:text-2xl text-neutral-300 max-w-xs sm:max-w-xl md:max-w-3xl lg:max-w-4xl mx-auto text-center leading-relaxed sm:leading-loose">
            Embark on an immersive online study journey, exploring essential
            concepts with interactive lessons, AI-powered tools, and
            collaborative platforms. Develop skills in various fields through
            structured courses, real-time feedback, and engaging digital
            resources.
          </p>

          {/* Button */}
          <div className="mt-10 sm:mt-14 md:mt-20">
            <Link
              href={"/courses"}
              className="relative z-20 px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-full bg-gradient-to-b from-zinc-800 to-zinc-600 text-white font-semibold transition duration-300 hover:opacity-80"
            >
              Explore Courses
            </Link>
          </div>
        </BackgroundLines>
      </div>
    </div>
  );
};

export default HeroSection;
