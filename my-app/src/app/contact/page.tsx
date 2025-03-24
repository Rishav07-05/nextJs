import React from "react";

const Page = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-black to-zinc-500 pt-40 flex flex-col items-center">
      <h1 className="text-7xl font-bold text-white text-center mb-10">
        Contact Us
      </h1>
      <p className="text-white text-center max-w-2xl leading-relaxed">
        We&apos;re here to help with any questions about our courses, programs,
        or events. <br />
        Whether you are a beginner or an experienced musician, our team is ready
        to guide you. <br />
        Reach out and let us support your musical journey!
      </p>
      <div className="flex flex-col gap-6 mt-16 w-full max-w-xl">
        <input
          className="w-full px-4 py-3 border-2 border-gray-600 rounded-lg bg-[#111] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="email"
          placeholder="Your email here"
        />
        <textarea
          className="w-full px-4 py-3 h-40 border-2 border-gray-600 rounded-xl bg-[#111] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Your message"
        ></textarea>
        <button className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition">
          Send Message
        </button>
      </div>
    </div>
  );
};

export default Page;
