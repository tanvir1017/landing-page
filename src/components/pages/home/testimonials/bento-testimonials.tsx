import RattingStarIcon from "@/src/assets/svgs/rating-star";
import Image from "next/image";

type Testimonial = {
  name: string;
  role: string;
  content: string;
  content1?: string;
  avatar: string;
  stars: number;
  image: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Fajar Siddiq",
    role: "Serial Entrepreneur, Singapore",
    content:
      "TailGrids is such a great help when comes to building landing page and web app UI for Tailwind CSS web projects with just copy-paste method! ",
    content1:
      "I really liked the design and it is easy to get started which saves tons of time & money for developers and designers with Figma files & source code!",
    avatar: "FS",
    stars: 5,
    image: "/assets/fajar.png",
  },
  {
    name: "Ostap Brehin",
    role: "Fullstack Developer",
    content:
      "A landing page is the first thing your customers will see before even trying the product. You want to make sure it looks great, and this is where TailGrids comes to help!",
    content1:
      "It provides a collection of beautiful hand-crafted uniquely-looking components that you can use to build your startup website, web application, or dashboard.",
    avatar: "OB",
    stars: 5,
    image: "/assets/ostap.png",
  },
  {
    name: "Arnob Mukherjee",
    role: "Founder @Qvy",
    content:
      "Seems like an amazing alternative to tailwindui, also the design looks amazing man 🚀",
    avatar: "AM",
    stars: 5,
    image: "/assets/arnob.png",
  },
  {
    name: "Marko Denic",
    role: "Developer and Software Engineer",
    content:
      "TailGrids includes all the essential UI components you need to build beautiful websites with Tailwind CSS. Its consistent design, clean codebase, copy-paste interface, and detailed documentation make it organized and easy to use.",
    avatar: "MD",
    stars: 5,
    image: "/assets/marko.png",
  },
  {
    name: "Anamoul Rouf",
    role: "UX Designer",
    content:
      "Even though I am a design person, I need to build site sometimes. TailGrids UI empowered me to do more with my little HTML/CSS skills.",
    avatar: "AR",
    stars: 5,
    image: "/assets/fajar.png",
  },
  {
    name: "Athar Ahmed",
    role: "Founder, ScrapeOwl",
    content:
      "Since I like doing engineering parts only, designing and coding landing pages is great blocker for me while I develop MVPs or try to validate a new product idea. TailGrids seems have great collection of UI components that also comes relevant contents and Figma file that I can use to play or create prototype before diving into code.",
    avatar: "AA",
    stars: 5,
    image: "/assets/athar.png",
  },

  {
    name: "Fajar Siddiq",
    role: "Software Developer @HappyAddons",
    content:
      "Having used almost all the Tailwind CSS UI toolkits and resources, I can confidently say that TailGrids is the easiest and most comprehensive Tailwind UI Library with almost all essential Tailwind CSS components you may need to build web UI faster.",
    avatar: "FS",
    stars: 5,
    image: "/assets/fazar.png",
  },
];

const TestimonialCard = () => {
  return (
    <div className="bg-sec p-10">
      <div className="grid grid-cols-3 grid-rows-4 gap-2 ">
        <div className="bg-white rounded-2xl p-10 border col-start-1 row-start-1 row-end-3 row-span-2">
          <div className="user-info flex items-center justify-between">
            <div className="w-full flex items-center space-x-3.5">
              <Image
                src="/assets/fajar.png"
                alt="Fajar Siddiq"
                width={40}
                height={40}
                className=" rounded-full"
              />
              <div className="about space-y-1">
                <p className="text-base leading-6 font-medium tracking-[-0.2px] text-[#1F2937]">
                  Fajar Siddiq
                </p>
                <p className="text-sm font-normal tracking-[-0.2px] text-[#9CA3AF]">
                  Serial Entrepreneur, Singapore
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <RattingStarIcon key={i} />
              ))}
            </div>
          </div>
          <div className="contant mt-[30px] space-y-5 [&>p]:text-base [&>p]:leading-6 [&>p]:font-normal [&>p]:tracking-[-0.2px] [&>p]:text-[#6B7280]">
            <p>
              TailGrids is such a great help when comes to building landing page
              and web app UI for Tailwind CSS web projects with just copy-paste
              method!
            </p>

            <p>
              I really liked the design and it is easy to get started which
              saves tons of time & money for developers and designers with Figma
              files & source code!
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-10 border col-start-2 row-span-1">
          <div className="user-info flex items-center justify-between">
            <div className="w-ful flex items-center space-x-3.5">
              <Image
                alt="Arnob Mukherjee"
                src="/assets/arnob.png"
                width={40}
                height={40}
                className="rounded-full"
              />
              <div className="about space-y-1">
                <p className="text-base leading-6 font-medium tracking-[-0.2px] text-[#1F2937]">
                  Arnob Mukherjee
                </p>
                <p className="text-sm font-normal tracking-[-0.2px] text-[#9CA3AF]">
                  Founder @Qvy
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <RattingStarIcon key={i} />
              ))}
            </div>
          </div>
          <div className="contant mt-[30px] space-y-5 [&>p]:text-base [&>p]:leading-6 [&>p]:font-normal [&>p]:tracking-[-0.2px] [&>p]:text-[#6B7280]">
            <p>
              Seems like an amazing alternative to tailwindui, also the design
              looks amazing man 🚀
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-10 border col-start-1 row-span-2">
          <div className="user-info flex items-center justify-between">
            <div className="w-ful flex items-center space-x-3.5">
              <Image
                alt="Ostap Brehin"
                src="/assets/ostap.png"
                width={40}
                height={40}
                className="rounded-full"
              />
              <div className="about space-y-1">
                <p className="text-base leading-6 font-medium tracking-[-0.2px] text-[#1F2937]">
                  Ostap Brehin
                </p>
                <p className="text-sm font-normal tracking-[-0.2px] text-[#9CA3AF]">
                  Fullstack Developer
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <RattingStarIcon key={i} />
              ))}
            </div>
          </div>
          <div className="contant mt-[30px] space-y-5 [&>p]:text-base [&>p]:leading-6 [&>p]:font-normal [&>p]:tracking-[-0.2px] [&>p]:text-[#6B7280]">
            <p>
              A landing page is the first thing your customers will see before
              even trying the product. You want to make sure it looks great, and
              this is where TailGrids comes to help!
            </p>

            <p>
              It provides a collection of beautiful hand-crafted
              uniquely-looking components that you can use to build your startup
              website, web application, or dashboard.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-10 border col-start-2 row-start-2 row-span-2">
          <div className="user-info flex items-center justify-between">
            <div className="w-ful flex items-center space-x-3.5">
              <Image
                alt="Marko Denic"
                src="/assets/marko.png"
                width={40}
                height={40}
                className="rounded-full"
              />

              <div className="about space-y-1">
                <p className="text-base leading-6 font-medium tracking-[-0.2px] text-[#1F2937]">
                  Marko Denic
                </p>
                <p className="text-sm font-normal tracking-[-0.2px] text-[#9CA3AF]">
                  Developer and Software Engineer
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <RattingStarIcon key={i} />
              ))}
            </div>
          </div>
          <div className="contant mt-[30px] space-y-5 [&>p]:text-base [&>p]:leading-6 [&>p]:font-normal [&>p]:tracking-[-0.2px] [&>p]:text-[#6B7280]">
            <p>
              TailGrids includes all the essential UI components you need to
              build beautiful websites with Tailwind CSS. Its consistent design,
              clean codebase, copy-paste interface, and detailed documentation
              make it organized and easy to use.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-10 border col-start-2 row-span-1">
          <div className="user-info flex items-center justify-between">
            <div className="w-ful flex items-center space-x-3.5">
              <Image
                alt="Anamoul Rouf"
                src="/assets/anamol.png"
                width={40}
                height={40}
                className=" rounded-full"
              />
              <div className="about space-y-1">
                <p className="text-base leading-6 font-medium tracking-[-0.2px] text-[#1F2937]">
                  Anamoul Rouf
                </p>
                <p className="text-sm font-normal tracking-[-0.2px] text-[#9CA3AF]">
                  UX Designer
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <RattingStarIcon key={i} />
              ))}
            </div>
          </div>
          <div className="contant mt-[30px] space-y-5 [&>p]:text-base [&>p]:leading-6 [&>p]:font-normal [&>p]:tracking-[-0.2px] [&>p]:text-[#6B7280]">
            <p>
              Even though I am a design person, I need to build site sometimes.
              TailGrids UI empowered me to do more with my little HTML/CSS
              skills.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-10 border col-start-3 row-start-1 row-span-2">
          <div className="user-info flex items-center justify-between">
            <div className="w-ful flex items-center space-x-3.5">
              <Image
                alt="Athar Ahmed"
                src="/assets/athar.png"
                width={40}
                height={40}
                className=" rounded-full"
              />
              <div className="about space-y-1">
                <p className="text-base leading-6 font-medium tracking-[-0.2px] text-[#1F2937]">
                  Athar Ahmed
                </p>
                <p className="text-sm font-normal tracking-[-0.2px] text-[#9CA3AF]">
                  Founder, ScrapeOwl
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <RattingStarIcon key={i} />
              ))}
            </div>
          </div>
          <div className="contant mt-[30px] space-y-5 [&>p]:text-base [&>p]:leading-6 [&>p]:font-normal [&>p]:tracking-[-0.2px] [&>p]:text-[#6B7280]">
            <p>
              Since I like doing engineering parts only, designing and coding
              landing pages is great blocker for me while I develop MVPs or try
              to validate a new product idea. TailGrids seems have great
              collection of UI components that also comes relevant contents and
              Figma file that I can use to play or create prototype before
              diving into code
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-10 border col-start-3 row-start-3  row-span-2">
          <div className="user-info flex items-center justify-between">
            <div className="w-ful flex items-center space-x-3.5">
              <Image
                alt="Fajar Siddiq"
                src="/assets/fazar.png"
                width={40}
                height={40}
                className=" rounded-full"
              />
              <div className="about space-y-1">
                <p className="text-base leading-6 font-medium tracking-[-0.2px] text-[#1F2937]">
                  Fajar Siddiq
                </p>
                <p className="text-sm font-normal tracking-[-0.2px] text-[#9CA3AF]">
                  Software Developer @HappyAddons
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <RattingStarIcon key={i} />
              ))}
            </div>
          </div>
          <div className="contant mt-[30px] space-y-5 [&>p]:text-base [&>p]:leading-6 [&>p]:font-normal [&>p]:tracking-[-0.2px] [&>p]:text-[#6B7280]">
            <p>
              Having used almost all the Tailwind CSS UI toolkits and resources,
              I can confidently say that TailGrids is the easiest and most
              comprehensive Tailwind UI Library with almost all essential
              Tailwind CSS components you may need to build web UI faster.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
