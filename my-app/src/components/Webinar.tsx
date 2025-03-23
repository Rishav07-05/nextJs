'use client'
import Link from "next/link";
import { HoverEffect } from "./ui/card-hover-effect";


const Webinar = () => {
  return (
    <div className="h-screen w-full bg-black p-10">
      <div>
        <div className="mb-32">
          <h1 className="text-white text-3xl font-bold text-center mb-9">
            Our Webinars
          </h1>
          <p className="text-white text-5xl font-semibold text-center">
            Enhance your Vocals with Webinars
          </p>
        </div>
        <div>
          <div className="max-w-5xl mx-auto px-8">
            <HoverEffect items={projects} />
          </div>
        </div>
        <div className="text-center mt-20">
          <Link
            href={"/courses"}
            className="px-6 py-4 bg-gradient-to-b from-zinc-800 to-zinc-600 text-white font-semibold transition duration-300 hover:opacity-80 rounded-full"
          >
            View All Webinars
          </Link>
        </div>
      </div>
    </div>
  );
};

export const projects = [
  {
    title: "Mastering Music Production",
    description:
      "A deep dive into the art of music production, covering mixing, mastering, and sound design techniques from industry experts.",
    link: "https://musicwebinar.com/mastering-production",
  },
  {
    title: "Songwriting Secrets",
    description:
      "Learn how to craft compelling lyrics and melodies in this exclusive webinar with award-winning songwriters.",
    link: "https://musicwebinar.com/songwriting-secrets",
  },
  {
    title: "Live Performance Techniques",
    description:
      "Enhance your stage presence and connect with your audience through expert tips on live performance strategies.",
    link: "https://musicwebinar.com/live-performance",
  },
  {
    title: "Music Marketing & Branding",
    description:
      "Discover the strategies successful artists use to build their brand, grow their audience, and promote their music effectively.",
    link: "https://musicwebinar.com/music-marketing",
  },
  {
    title: "Sound Engineering Essentials",
    description:
      "An in-depth session covering the fundamentals of recording, mixing, and producing high-quality audio.",
    link: "https://musicwebinar.com/sound-engineering",
  },
  {
    title: "Building a Career in the Music Industry",
    description:
      "Get insights from industry professionals on how to navigate the music business, network, and turn your passion into a career.",
    link: "https://musicwebinar.com/music-career",
  },
];


export default Webinar;
