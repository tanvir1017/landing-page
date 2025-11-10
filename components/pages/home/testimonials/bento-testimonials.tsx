import { Star } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Fajar Siddiq",
    role: "Serial Entrepreneur, Singapore",
    content:
      "TailGrids is such a great help when comes to building landing page and web app UI for Tailwind CSS web projects with just copy-paste method!",
    avatar: "FS",
    stars: 5,
  },
  {
    name: "Arnob Mukherjee",
    role: "Founder @Qvy",
    content:
      "Seems like an amazing alternative to tailwindui, also the design looks amazing man!",
    avatar: "AM",
    stars: 5,
  },
  {
    name: "Athar Ahmed",
    role: "Founder, ScrapeOwl",
    content:
      "Since I like doing engineering parts only, designing and coding landing pages is great blocker for me while I develop MVPs or try to validate a new product idea. TailGrids seems have great collection of UI components that also comes relevant contents and Figma file that I can use to play or create prototype before diving into code.",
    avatar: "AA",
    stars: 5,
  },
  {
    name: "Marko Denic",
    role: "Developer and Software Engineer",
    content:
      "TailGrids includes all the essential UI components you need to build beautiful websites with Tailwind CSS. Its consistent design, clean codebase, copy-paste interface, and detailed documentation make it organized and easy to use.",
    avatar: "MD",
    stars: 5,
  },
  {
    name: "Ostap Brehin",
    role: "Fullstack Developer",
    content:
      "A landing page is the first thing your customers will see before even trying the product. You want to make sure it looks great, and this is where TailGrids comes to help! It provides a collection of beautiful hand-crafted uniquely-looking components that you can use to build your startup website, web application, or dashboard.",
    avatar: "OB",
    stars: 5,
  },
  {
    name: "Anamoul Rouf",
    role: "UX Designer",
    content:
      "Even though I am a design person, I need to build site sometimes. TailGrids UI empowered me to do more with my little HTML/CSS skills.",
    avatar: "AR",
    stars: 5,
  },
  {
    name: "Fajar Siddiq",
    role: "Software Developer @HappyAddons",
    content:
      "Having used almost all the Tailwind CSS UI toolkits and resources, I can confidently say that TailGrids is the easiest and most comprehensive Tailwind UI Library with almost all essential Tailwind CSS components you may need to build web UI faster.",
    avatar: "FS",
    stars: 5,
  },
];

export default function TestimonialsBento() {
  return (
    <section className="bg-[#F3F4F6] p-10">
      <div className=" mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 auto-rows-auto">
          {/* First column */}
          <div className="">
            <div className="flex flex-col space-y-2">
              <div className="bg-white p-10 rounded-2xl">
                <div>
                  <div className="flex items-start justify-between">
                    <div className="client flex items-center space-x-4">
                      <Image
                        src="/assets/fajar.png"
                        alt="avatar"
                        width={40}
                        height={40}
                      />
                      <div className="space-y-0.5">
                        <p className="text-base leading-6 font-medium">
                          Fajar Siddiq
                        </p>
                        <p className="text-[14px] text-[#9CA3AF] leading-5">
                          Serial Entrepreneur, Singapore
                        </p>
                      </div>
                    </div>

                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-2.5 h-2.5 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                  </div>

                  <div className="testimonials_descriptions mt-[30px] [&>p]:text-[#6B7280] text-bae leading-6">
                    <p>
                      TailGrids is such a great help when comes to building
                      landing page and web app UI for Tailwind CSS web projects
                      with just copy-paste method!
                    </p>
                    <p className="mt-6">
                      I really liked the design and it is easy to get started
                      which saves tons of time & money for developers and
                      designers with Figma files & source code!
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-10 rounded-2xl">
                <div>
                  <div className="flex items-start justify-between">
                    <div className="client flex items-center space-x-4">
                      <Image
                        src="/assets/fajar.png"
                        alt="avatar"
                        width={40}
                        height={40}
                      />
                      <div className="space-y-0.5">
                        <p className="text-base leading-6 font-medium">
                          Fajar Siddiq
                        </p>
                        <p className="text-[14px] text-[#9CA3AF] leading-5">
                          Serial Entrepreneur, Singapore
                        </p>
                      </div>
                    </div>

                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-2.5 h-2.5 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                  </div>

                  <div className="testimonials_descriptions mt-[30px] [&>p]:text-[#6B7280] text-bae leading-6">
                    <p>
                      TailGrids is such a great help when comes to building
                      landing page and web app UI for Tailwind CSS web projects
                      with just copy-paste method!
                    </p>
                    <p className="mt-6">
                      I really liked the design and it is easy to get started
                      which saves tons of time & money for developers and
                      designers with Figma files & source code!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Second column */}
          <div className="">
            <div className="grid grid-flow-col grid-rows-4 gap-y-2">
              <div className="bg-white p-10 rounded-2xl row-span-1">
                <div className="flex items-start justify-between">
                  <div className="client flex items-center space-x-4">
                    <Image
                      src="/assets/arnob.png"
                      alt="avatar"
                      width={40}
                      height={40}
                    />
                    <div className="space-y-0.5">
                      <p className="text-base leading-6 font-medium">
                        Arnob Mukherjee
                      </p>
                      <p className="text-[14px] text-[#9CA3AF] leading-5">
                        Founder @Olvy
                      </p>
                    </div>
                  </div>

                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-2.5 h-2.5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                </div>

                <div className="testimonials_descriptions mt-[30px] [&>p]:text-[#6B7280] text-bae leading-6">
                  <p>
                    Seems like an amazing alternative to tailwindui, also the
                    design looks amazing man 🚀
                  </p>
                </div>
              </div>
              <div className="bg-white p-10 rounded-2xl row-span-2">
                <div>
                  <div className="flex items-start justify-between">
                    <div className="client flex items-center space-x-4">
                      <Image
                        src="/assets/marko.png"
                        alt="avatar"
                        width={40}
                        height={40}
                      />
                      <div className="space-y-0.5">
                        <p className="text-base leading-6 font-medium">
                          Marko Denic
                        </p>
                        <p className="text-[14px] text-[#9CA3AF] leading-5">
                          Developer and Software Engineer
                        </p>
                      </div>
                    </div>

                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-2.5 h-2.5 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                  </div>

                  <div className="testimonials_descriptions mt-[30px] [&>p]:text-[#6B7280] text-bae leading-6">
                    <p>
                      TailGrids includes all the essential UI components you
                      need to build beautiful websites with Tailwind CSS. Its
                      consistent design, clean codebase, copy-paste interface,
                      and detailed documentation make it organized and easy to
                      use.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-10 rounded-2xl row-span-1">
                <div>
                  <div className="flex items-start justify-between">
                    <div className="client flex items-center space-x-4">
                      <Image
                        src="/assets/marko.png"
                        alt="avatar"
                        width={40}
                        height={40}
                      />
                      <div className="space-y-0.5">
                        <p className="text-base leading-6 font-medium">
                          Fajar Siddiq
                        </p>
                        <p className="text-[14px] text-[#9CA3AF] leading-5">
                          Serial Entrepreneur, Singapore
                        </p>
                      </div>
                    </div>

                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-2.5 h-2.5 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                  </div>

                  <div className="testimonials_descriptions mt-[30px] [&>p]:text-[#6B7280] text-bae leading-6">
                    <p>
                      TailGrids is such a great help when comes to building
                      landing page and web app UI for Tailwind CSS web projects
                      with just copy-paste method!
                    </p>
                    <p className="mt-6">
                      I really liked the design and it is easy to get started
                      which saves tons of time & money for developers and
                      designers with Figma files & source code!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Third column */}
          <div className="">
            <div className="flex flex-col space-y-2">
              <div className="bg-white p-10 rounded-2xl">
                <div>
                  <div className="flex items-start justify-between">
                    <div className="client flex items-center space-x-4">
                      <Image
                        src="/assets/fajar.png"
                        alt="avatar"
                        width={40}
                        height={40}
                      />
                      <div className="space-y-0.5">
                        <p className="text-base leading-6 font-medium">
                          Fajar Siddiq
                        </p>
                        <p className="text-[14px] text-[#9CA3AF] leading-5">
                          Serial Entrepreneur, Singapore
                        </p>
                      </div>
                    </div>

                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-2.5 h-2.5 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                  </div>

                  <div className="testimonials_descriptions mt-[30px] [&>p]:text-[#6B7280] text-bae leading-6">
                    <p>
                      TailGrids is such a great help when comes to building
                      landing page and web app UI for Tailwind CSS web projects
                      with just copy-paste method!
                    </p>
                    <p className="mt-6">
                      I really liked the design and it is easy to get started
                      which saves tons of time & money for developers and
                      designers with Figma files & source code!
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-10 rounded-2xl">
                <div>
                  <div className="flex items-start justify-between">
                    <div className="client flex items-center space-x-4">
                      <Image
                        src="/assets/fajar.png"
                        alt="avatar"
                        width={40}
                        height={40}
                      />
                      <div className="space-y-0.5">
                        <p className="text-base leading-6 font-medium">
                          Fajar Siddiq
                        </p>
                        <p className="text-[14px] text-[#9CA3AF] leading-5">
                          Serial Entrepreneur, Singapore
                        </p>
                      </div>
                    </div>

                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-2.5 h-2.5 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                  </div>

                  <div className="testimonials_descriptions mt-[30px] [&>p]:text-[#6B7280] text-bae leading-6">
                    <p>
                      TailGrids is such a great help when comes to building
                      landing page and web app UI for Tailwind CSS web projects
                      with just copy-paste method!
                    </p>
                    <p className="mt-6">
                      I really liked the design and it is easy to get started
                      which saves tons of time & money for developers and
                      designers with Figma files & source code!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
