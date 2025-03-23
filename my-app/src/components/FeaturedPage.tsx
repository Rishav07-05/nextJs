"use client";

import Link from "next/link";
import courseData from "@/data/music_data.json";
import { BackgroundGradient } from "./ui/background-gradient";

interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
}

const CourseCard = ({ course }: { course: Course }) => {
  return (
    <BackgroundGradient className="rounded-lg p-6 shadow-md hover:scale-105 transition-transform duration-300 ">
      <h2 className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-neutral-50 to-zinc-400">
        {course.title}
      </h2>
      <p className="text-sm text-black mt-2">By {course.instructor}</p>
      <p className="text-gray-300 mt-4 text-sm">{course.description}</p>
      <div className="mt-6 flex items-center justify-between">
        <span className="text-lg font-bold text-green-400">
          ${course.price}
        </span>
        <Link href={`/courses/${course.slug}`}>
          <button className="px-4 py-2 bg-green-700 text-white rounded-lg hover:bg-green-600 transition">
            View Course
          </button>
        </Link>
      </div>
    </BackgroundGradient>
  );
};

const FeaturedPage = () => {
  const featuredCourses = courseData.courses.filter(
    (course: Course) => course.isFeatured
  );

  return (
    <div className="h-auto min-h-screen w-full bg-black p-5">
      {/* Heading */}
      <div>
        <h1 className="text-center font-bold text-5xl mt-10 bg-clip-text text-transparent bg-gradient-to-b from-zinc-700 to-neutral-50">
          Featured Courses
        </h1>
        <p className="text-center font-bold text-3xl mt-8">
          Learn from the best
        </p>
      </div>

      {/* Course Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center mt-32">
        {featuredCourses.map((course: Course) => (
          <div key={course.id} className="flex justify-center">
            <CourseCard course={course} />
          </div>
        ))}
      </div>

      {/* View All Courses Button */}
      <div className="text-center mt-40">
        <Link
          href={"/courses"}
          className="px-6 py-4 bg-gradient-to-b from-zinc-800 to-zinc-600 text-white font-semibold transition duration-300 hover:opacity-80 rounded-full"
        >
          View All Courses
        </Link>
      </div>
    </div>
  );
};

export default FeaturedPage;
