import { geistMono } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Link from "next/link";

const SiteMapLink = () => {
  return (
    <>
      {footerSitemap.map((section) => (
        <div key={section.section} className="mt-7">
          <h3
            className={cn(
              "md:font-medium font-bold text-[#6B7280] md:mb-7 mb-3",
              geistMono.className
            )}
          >
            {section.section}
          </h3>
          <ul className="md:space-y-[18px] space-y-3 flex flex-col items-start">
            {section.links.map((link, i) => (
              <li key={link.id}>
                <Link
                  href={link.href}
                  className={cn("text-[#374151] leading-6 transition")}
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

const footerSitemap = [
  {
    section: "Resources",
    links: [
      { id: 1, text: "Update Logs", href: "/" },
      { id: 2, text: "Roadmap", href: "/" },
      {
        id: 3,
        text: "Tailwind UI Components",
        href: "/",
      },
      { id: 4, text: "Tailwind CSS", href: "/" },
      { id: 5, text: "Tailwind Figma", href: "/" },
    ],
  },
  {
    section: "Useful Links",
    links: [
      { id: 1, text: "License", href: "/" },
      { id: 2, text: "Privacy policy", href: "/" },
      { id: 3, text: "Refund Policy", href: "/" },
      { id: 4, text: "Free Download", href: "/" },
      { id: 5, text: "NPM Package", href: "/" },
    ],
  },
  {
    section: "Help and Support",
    links: [
      { id: 1, text: "Support", href: "/" },
      { id: 2, text: "Docs", href: "/" },
      { id: 3, text: "Faqs", href: "/" },
      { id: 4, text: "Community", href: "/" },
      { id: 5, text: "Blog", href: "/" },
    ],
  },
];

export default SiteMapLink;
