import Image from "next/image";
import React from "react";

const theories = [
  {
    title: "Harmony and Chords",
    link: "https://en.wikipedia.org/wiki/Harmony",
    image:
      "https://imgs.search.brave.com/zcatZ7hvfyJBbPuFi4XY6zVVuknblbrPpUC90nXmfjU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5waXRjaGZvcmsu/Y29tL3Bob3Rvcy82/N2Q0MjMyZTdkN2Nj/M2EwZWMwZjFiN2Mv/MToxL3dfMTYwMCxj/X2xpbWl0L1BsYXli/b2ktQ2FydGktTVVT/SUMuanBlZw",
  },
  {
    title: "Rhythm and Time",
    link: "https://en.wikipedia.org/wiki/Time_signature",
    image:
      "https://imgs.search.brave.com/4k5m3la1m6CVH9XqHrhvWbOOevLVZslVnBXBDYh8MYk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tYXJr/ZXRwbGFjZS5jYW52/YS5jb20vRUFGMDBQ/a21iR1UvMy8wLzE2/MDB3L2NhbnZhLXJl/ZC1hbmQteWVsbG93/LW1vZGVybi1yYXAt/bXVzaWMtYWxidW0t/Y292ZXItYzc2bGVi/Ulg5NE0uanBn",
  },
  {
    title: "Melody and Scales",
    link: "https://en.wikipedia.org/wiki/Melody",
    image:
      "https://imgs.search.brave.com/-4Y5YgnrmCNWMObPuxest7ssqy_GvLFtQ9CEP0q8nlE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzE5LzEz/L2YyLzE5MTNmMmEx/ZjMxYTEzMjEyNTNj/NTZjZjVhMDk0MDE4/LmpwZw",
  },
  {
    title: "Counter Composition",
    link: "https://en.wikipedia.org/wiki/Counterpoint",
    image:
      "https://imgs.search.brave.com/YCqyxSRa6JZFT5FLIXM0UbKx1L3HoR0xKYWkxxudcdg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4y/LmFsYnVtb2Z0aGV5/ZWFyLm9yZy8yMDB4/MC9hbGJ1bS8yMDE0/LzE5Nzc1LWRheXMt/YmVmb3JlLXJvZGVv/LTEuanBn",
  },
  {
    title: "Tonal vs Atonal Music",
    link: "https://en.wikipedia.org/wiki/Tonality",
    image:
      "https://imgs.search.brave.com/Jif5QHNKY9mt6FAWAfwRXvFTeovHaxyEQU2QGxTuKDI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/YWxidW1vZnRoZXll/YXIub3JnL2FydGlz/dHMvc3EvdHJhdmlz/LXNjb3R0XzE2OTA4/MDU4MzYuanBn",
  },
  {
    title: "Musical Notation Systems",
    link: "https://en.wikipedia.org/wiki/Musical_notation",
    image:
      "https://imgs.search.brave.com/LmR5tm2UmT0o8y2ukH4GJxqrBAS5Vc7JHPt9Z57S-Cc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5ibGV1bWFnLmNv/bS9icmFuZC1pbWcv/blF3MHJFV2RELzB4/MC90cmF2aXMtc2Nv/dHQtcm9kZW8tMTcw/NjQxMjUyNTcwOC5q/cGc",
  },
  {
    title: "Music and Acoustics",
    link: "https://en.wikipedia.org/wiki/Musical_acoustics",
    image:
      "https://imgs.search.brave.com/YtLmxlpfiYbTLLqI4CdqcLPbF6t6SLTE9IviGgtMEkQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sYXN0/Zm0uZnJlZXRscy5m/YXN0bHkubmV0L2kv/dS8zMDB4MzAwL2Q1/NjdkN2JiYzIxMmRm/ZDcwMzFlNzU2NTNl/ZWU2YWE5LmpwZw",
  },
  {
    title: "Expression and Dynamics",
    link: "https://en.wikipedia.org/wiki/Dynamics_(music)",
    image:
      "https://imgs.search.brave.com/Lr19jV-rUkMNyb0ZtmUYyORA0kG_XdrBJ9KT6117RaY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4y/LmFsYnVtb2Z0aGV5/ZWFyLm9yZy8yMDB4/MC9hbGJ1bS8yMDE1/LzM2NDQ2LWJlYXV0/eS1iZWhpbmQtdGhl/LW1hZG5lc3MtMS5q/cGc",
  },
];

const Page = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-zinc-500 to-black pt-20">
      <h1 className="text-5xl font-bold text-center mb-10 text-[#afb2b3]">
        MUSIC THEORY
      </h1>
      <h1 className="text-5xl font-bold text-center mb-10 text-[#afb2b3]">
        Theories Based on Music
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-10 px-4">
        {theories.map((theory, index) => (
          <div
            key={index}
            className="border-2 border-white w-72 rounded-3xl p-4 bg-black shadow-lg"
          >
            <div className="w-full h-40 relative">
              <Image
                src={theory.image}
                alt={theory.title}
                layout="fill"
                objectFit="cover"
                className="rounded-2xl"
              />
            </div>
            <p className="text-center mt-3 text-cyan-400 text-xl font-semibold">
              {theory.title}
            </p>
            <p className="text-center mt-1 text-white">
              Learn more about this theory:
              <a href={theory.link} target="_blank" className="text-blue-400">
                {" "}
                Read more
              </a>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
