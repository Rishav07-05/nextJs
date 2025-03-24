"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import courseData from "@/data/music_data.json";

const Page = () => {
  return (
    <div className="bg-black min-h-screen w-full pt-32 py-12">
      <div>
        <h1 className="text-white text-6xl font-bold text-center mt-12">
          All Courses ({courseData.courses.length})
        </h1>
        <div className="flex flex-wrap justify-center gap-8">
          {courseData.courses.map((course) => (
            <CardContainer key={course.id} className="inter-var">
              <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                  {course.title}
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                  {course.description}
                </CardItem>
                <CardItem
                  translateZ="100"
                  rotateX={20}
                  rotateZ={-10}
                  className="w-full mt-4"
                >
                  <Image
                    src={course.image}
                    height={1000}
                    width={1000}
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt={course.title}
                    unoptimized={true} // ✅ Add this if images fail to load
                  />
                </CardItem>
                <div className="flex justify-between items-center mt-6">
                  <CardItem
                    translateZ={20}
                    translateX={-40}
                    as="button"
                    className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                  >
                    Learn More →
                  </CardItem>
                  <CardItem
                    translateZ={20}
                    translateX={40}
                    as="button"
                    className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                  >
                    Enroll Now
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
