// import React from 'react'
'use client'
import { StickyScroll } from "./ui/sticky-scroll-reveal"


const content = [
  {
    title: "Live Collaboration",
    description:
      "Create, edit, and share music with your bandmates, producers, and collaborators in real time. No more back-and-forth file exchanges—everything updates instantly so you can focus on making music.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        Live Collaboration
      </div>
    ),
  },
  {
    title: "Real-Time Audio Mixing",
    description:
      "Make adjustments to your tracks on the fly and hear changes in real time. Fine-tune levels, effects, and arrangements without waiting—experience seamless collaboration between artists and engineers.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        Real-Time Audio Mixing
      </div>
    ),
  },
  {
    title: "Version Control for Tracks",
    description:
      "Never lose an idea again. Keep track of every version of your music, compare edits, and revert to previous versions anytime. Stay in control of your creative process without worrying about lost progress.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white">
        Version Control for Tracks
      </div>
    ),
  },
  {
    title: "Unlimited Creativity",
    description:
      "Experiment freely with your sound without limitations. Save multiple versions of your projects, collaborate with other artists, and push the boundaries of your creativity in a dynamic and flexible environment.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        Unlimited Creativity
      </div>
    ),
  },
];




const PageAnimation = () => {
  return (
    <div className="">
      <StickyScroll content={content} />
    </div>
  )
}

export default PageAnimation;
