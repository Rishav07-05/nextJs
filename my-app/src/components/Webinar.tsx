import Link from "next/link";

const Webinar = () => {
  return (
    <div className="h-screen w-full bg-gradient-to-b from-black to-zinc-500 p-10">
      <div>
        <div>
          <h1 className="text-white text-3xl font-bold text-center mb-9">
            Our Webinars
          </h1>
          <p className="text-white text-5xl font-semibold text-center">
            Enhance your Vocals with Webinars
          </p>
        </div>
        <div></div>
        <div className="text-center mt-40">
          <Link
            href={"/courses"}
            className="px-6 py-4 bg-gradient-to-b from-zinc-800 to-zinc-600 text-white font-semibold transition duration-300 hover:opacity-80 rounded-full"
          >
            View All Courses
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Webinar;
