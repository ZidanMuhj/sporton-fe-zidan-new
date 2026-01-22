import { FiFastForward } from "react-icons/fi";
import Button from "../ui/button";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section
      id="hero-section"
      className="container mx-auto  pt-32 md:pt-[90px] min-h-screen flex relative pb-20 mb-10"
    >
      <div className="relative self-center w-full">
        <Image
          src="/images/img-basketball.svg"
          alt="basketball pattern"
          width={380}
          height={432}
          className="grayscale absolute left-0 -top-10"
        />
        <div className="relative px-5 md:pl-40 z-10 w-full">
          <div className="text-primary italic ">Friday Sale, 50%</div>
          <h1 className="font-extrabold text-5xl md:text-[90px] italic bg-gradient-to-b leading-tight from-black to-[#979797] bg-clip-text text-transparent">
            WEAR YOUR <br /> TOP-QUALITY <br /> SPORTSWEAR
          </h1>
          <p className="md:w-1/2 w-full mt-6 md:mt-10 leading-loose text-sm md:text-base text-gray-600">
            Engineered for endurance and designed for speed. Experience gear
            that moves as fast as you do. Premium fabrics. Unmatched comfort.
            Limitless motion.
          </p>
          <div className="flex gap-3 md:gap-5 mt-8 md:mt-5">
            <Button>
              Explore More <FiFastForward />{" "}
            </Button>
            <Button variant="ghost">
              Watch Video{" "}
              <Image
                src="/images/icon-play-video.svg"
                alt="icon playvideo"
                width={29}
                height={29}
              />{" "}
            </Button>
          </div>
        </div>

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -right-[-60px] top-[-15px] bottom-0 w-[280px] opacity-30 md:opacity-100 md:w-[605px] md:top-37 md:-translate-y-1/2 md:-right-1 transition-all duration-300">
            <Image
              src="/images/img-hero.svg"
              alt="hero image"
              width={590}
              height={687}
              className="w-full h-auto"
            />
          </div>

          <div className="absolute -right-[50px] top-42 -translate-y-1/2 w-[150px] opacity-50 md:opacity-100 md:w-[280px] md:-right-[150px] transition-all duration-300">
            <Image
              src="/images/img-ornament-hero.svg"
              alt="ornament hero"
              width={272}
              height={272}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
