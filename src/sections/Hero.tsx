import ArrowRight from "@/assets/arrow-right.svg";
import cogImage from "@/assets/cog.png";
import Image from "next/image";
import cylinderImage from "@/assets/cylinder.png";
import noodleImage from "@/assets/noodle.png";

export const Hero = () => {
  return (
    <section
      aria-labelledby="productivity-heading"
      className="pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_80%)] overflow-x-clip"
    >
      <div className="container mx-0">
        <div className="md:flex lg:gap-16 items-center">
          <div className="md:w-[458px] lg:w-[558px]">
            <p
              className="inline-block font-medium text-sm tracking-tight border border-[#222]/10 rounded-lg px-3 py-1"
              aria-label="Announcement"
            >
              Version 2.0 is here
            </p>
            <h1
              className="font-bold text-5xl md:text-7xl lg:text-8xl tracking-tight mt-6 bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text"
              id="productivity-heading"
            >
              Pathway to Productivity
            </h1>
            <p className="text-xl text-[#010D3E] mt-6 tracking-tight">
              Celebrate the joy of accomplishment with an app designed to track
              your progress, motivate your efforts, and celebrate your
              successes.
            </p>
            <div className="flex gap-8 items-center mt-[30px]">
              <button
                type="button"
                className="bg-black text-white text-[16px] px-4 py-2 rounded-lg"
                aria-label="Download the app for free"
              >
                Get for free
              </button>
              <button type="button" className="flex items-center gap-2">
                <span
                  className="text-black"
                  aria-label="Learn more about the app"
                >
                  Learn More
                </span>
                <ArrowRight className="w-4 h-4 text-black" aria-hidden="true" />
              </button>
            </div>
          </div>
          <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
            <Image
              src={cogImage}
              alt="Cog Image"
              className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0"
            />
            <Image
              src={cylinderImage}
              width={220}
              height={220}
              alt="Cylinder Image"
              className="hidden md:block -top-8 -left-32 md:absolute"
            />
            <Image
              src={noodleImage}
              width={220}
              alt="Noodle Image"
              className="hidden lg:block absolute top-[524px] left-[448px] rotate-[30deg]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
