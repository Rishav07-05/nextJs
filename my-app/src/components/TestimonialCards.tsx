'use client'
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { cn } from "@/lib/utils";



const testimonials = [
  {
    quote:
      "This platform changed the way I collaborate with my bandmates. We can now mix and edit tracks in real time, making the creative process seamless!",
    name: "Alex Johnson",
    title: "Music Producer",
  },
  {
    quote:
      "I used to struggle with version control for my music projects. Now, I can easily track edits and revert changes whenever I need. It's a game-changer!",
    name: "Samantha Lee",
    title: "Singer & Songwriter",
  },
  {
    quote:
      "The real-time audio mixing feature is incredible! Working with my sound engineer remotely has never been this smooth and efficient.",
    name: "David Carter",
    title: "Guitarist & Composer",
  },
];



const TestimonialCards = () => {
  return (
    <div className="h-screen w-full relative flex flex-col items-center justify-center gap-20 overflow-hidden bg-black">
      {/* Overlay with partial grid visibility */}
      <div
        className={cn(
          "absolute inset-0 bg-black",
          "before:absolute before:inset-0 before:bg-[radial-gradient(circle,rgba(0,0,0,0)_10%,rgba(0,0,0,1)_80%)]",
          "[background-size:100px_100px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
        )}
      />

      <h2 className="text-white text-center text-4xl font-bold z-10">
        Hear out Harmony: Voices of Success
      </h2>
      
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8 z-10">
        <div className="w-full max-w-6xl">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
};

export default TestimonialCards;
