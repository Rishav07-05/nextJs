import Image from "next/image";

// import React from 'react'

const page = () => {
  return (
    <div className="h-screen w-full bg-gradient-to-b from-zinc-500 to-black pt-40">
      <div>
        <h1 className="text-7xl font-bold text-center mb-10 text-[#afb2b3]">
          Theroies based on Music
        </h1>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-20">
        <div className="border border-black w-72 h-72 rounded-3xl">
          <Image
            src="https://imgs.search.brave.com/49ogd4rOP14ONhT6mrJ7zWxdIklksiQ-C_veJs54ha4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvOTM4/NzA5MzYyL3Bob3Rv/L3BvcnRyYWl0LW9m/LWEtZ2lybC5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9VVFH/WHBlaUxySTc4bk8x/QjlwZVVuMEQwZkNT/UnJtLUo4eG9oTVdH/Mkxtcz0" // Path inside 'public' folder
            alt="Example Image"
            width={300} // Define width
            height={100} // Define height
            className="rounded-3xl shadow-lg"
          />
          <p className="text-center mt-2">
            Music theory is the study of theoretical frameworks for
            understanding the practices and possibilities of music. 
          </p>
        </div>
        <div className="bg-red-500 w-72 h-72 rounded-3xl"></div>
        <div className="bg-red-500 w-72 h-72 rounded-3xl"></div>
        <div className="bg-red-500 w-72 h-72 rounded-3xl"></div>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-20 mt-10">
        <div className="bg-red-500 w-72 h-72 rounded-3xl"></div>
        <div className="bg-red-500 w-72 h-72 rounded-3xl"></div>
        <div className="bg-red-500 w-72 h-72 rounded-3xl"></div>
        <div className="bg-red-500 w-72 h-72 rounded-3xl"></div>
      </div>
    </div>
  );
};

export default page;

// <Image
//   src="https://imgs.search.brave.com/49ogd4rOP14ONhT6mrJ7zWxdIklksiQ-C_veJs54ha4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvOTM4/NzA5MzYyL3Bob3Rv/L3BvcnRyYWl0LW9m/LWEtZ2lybC5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9VVFH/WHBlaUxySTc4bk8x/QjlwZVVuMEQwZkNT/UnJtLUo4eG9oTVdH/Mkxtcz0" // Path inside 'public' folder
//   alt="Example Image"
//   width={100} // Define width
//   height={100} // Define height
//   className="rounded-full shadow-lg"
// />;
