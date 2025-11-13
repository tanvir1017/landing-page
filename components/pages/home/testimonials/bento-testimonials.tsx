import { Star } from "lucide-react";
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
      "A landing page is the first thing your customers will see before even trying the product. You want to make sure it looks great, and this is where TailGrids comes to help! It provides a collection of beautiful hand-crafted uniquely-looking components that you can use to build your startup website, web application, or dashboard.",
    avatar: "OB",
    stars: 5,
    image: "/assets/fajar.png",
  },
  {
    name: "Arnob Mukherjee",
    role: "Founder @Qvy",
    content:
      "Seems like an amazing alternative to tailwindui, also the design looks amazing man!",
    avatar: "AM",
    stars: 5,
    image: "/assets/arnob.png",
  },
  {
    name: "Athar Ahmed",
    role: "Founder, ScrapeOwl",
    content:
      "Since I like doing engineering parts only, designing and coding landing pages is great blocker for me while I develop MVPs or try to validate a new product idea. TailGrids seems have great collection of UI components that also comes relevant contents and Figma file that I can use to play or create prototype before diving into code.",
    avatar: "AA",
    stars: 5,
    image: "/assets/fajar.png",
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
    name: "Fajar Siddiq",
    role: "Software Developer @HappyAddons",
    content:
      "Having used almost all the Tailwind CSS UI toolkits and resources, I can confidently say that TailGrids is the easiest and most comprehensive Tailwind UI Library with almost all essential Tailwind CSS components you may need to build web UI faster.",
    avatar: "FS",
    stars: 5,
    image: "/assets/fajar.png",
  },
];

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <div className="bg-white p-8 md:p-10 rounded-2xl h-full flex flex-col justify-between">
      <div>
        <div className="flex items-start justify-between gap-4">
          <div className="client flex items-center space-x-4 min-w-0">
            <Image
              src={testimonial.image}
              alt={testimonial.name}
              width={40}
              height={40}
              className="rounded-full w-10 h-10"
            />
            <div className="space-y-0.5 min-w-0">
              <p className="text-base leading-6 font-medium truncate">
                {testimonial.name}
              </p>
              <p className="text-[14px] text-[#9CA3AF] leading-5 truncate">
                {testimonial.role}
              </p>
            </div>
          </div>

          <div className="flex gap-1 shrink-0">
            {[...Array(testimonial.stars)].map((_, i) => (
              <Star
                key={i}
                className="w-2.5 h-2.5 fill-yellow-400 text-yellow-400"
              />
            ))}
          </div>
        </div>

        <div className="testimonials_descriptions mt-4 md:mt-[30px] [&>p]:text-[#6B7280] text-base leading-6">
          <p className="line-clamp-6">{testimonial.content}</p>
          <p className="line-clamp-6 mt-5 mb-5">{testimonial.content1}</p>
        </div>
      </div>
    </div>
  );
};

export default function TestimonialsBento() {
  const column1 = testimonials.slice(0, 2);
  const column2 = testimonials.slice(2, 5);
  const column3 = testimonials.slice(5, 7);

  return (
    <section className="bg-[#F3F4F6] p-6 md:p-10 lg:p-12">
      <div className="mx-auto ">
        {/* Mobile: Single column layout */}
        <div className="grid grid-cols-1 gap-2 md:hidden">
          {testimonials.map((testimonial, idx) => (
            <TestimonialCard key={idx} testimonial={testimonial} />
          ))}
        </div>

        {/* Tablet and Desktop: 3-column Bento Grid Layout */}
        <div className="hidden md:grid md:grid-cols-3 gap-2 lg:gap-3">
          {/* Column 1: 2 cards in grid */}
          <div className="grid grid-rows-2 gap-2 lg:gap-3">
            {column1.map((testimonial, idx) => (
              <TestimonialCard key={idx} testimonial={testimonial} />
            ))}
          </div>

          {/* Column 2: 3 cards in grid */}
          <div className="grid grid-rows-3 gap-2 lg:gap-3">
            {column2.map((testimonial, idx) => (
              <TestimonialCard key={idx} testimonial={testimonial} />
            ))}
          </div>

          {/* Column 3: 2 cards in grid */}
          <div className="grid grid-rows-2 gap-2 lg:gap-3">
            {column3.map((testimonial, idx) => (
              <TestimonialCard key={idx} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
