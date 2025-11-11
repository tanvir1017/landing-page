import { geistMono } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Link from "next/link";

const SiteMapLink = () => {
  return (
    <>
      {footerSitemap.map((section) => (
        <div key={section.section}>
          <h3
            className={cn(
              "font-medium text-[#6B7280] mb-7",
              geistMono.className
            )}
          >
            {section.section}
          </h3>
          <ul className="space-y-[18px] flex flex-col items-start">
            {section.links.map((link, i) => (
              <li key={link.id}>
                <Link
                  href={link.href}
                  className={cn("text-[#374151] leading-6 transition ")}
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
      { id: 1, text: "Update Logs", href: "/update-logs" },
      { id: 2, text: "Roadmap", href: "/roadmap" },
      {
        id: 3,
        text: "Tailwind UI Components",
        href: "/tailwind-ui-components",
      },
      { id: 4, text: "Tailwind CSS", href: "/tailwind-css" },
      { id: 5, text: "Tailwind Figma", href: "/tailwind-figma" },
    ],
  },
  {
    section: "Useful Links",
    links: [
      { id: 1, text: "License", href: "/license" },
      { id: 2, text: "Privacy policy", href: "/privacy-policy" },
      { id: 3, text: "Refund Policy", href: "/refund-policy" },
      { id: 4, text: "Free Download", href: "/free-download" },
      { id: 5, text: "NPM Package", href: "/npm-package" },
    ],
  },
  {
    section: "Help and Support",
    links: [
      { id: 1, text: "Support", href: "/support" },
      { id: 2, text: "Docs", href: "/docs" },
      { id: 3, text: "Faqs", href: "/faqs" },
      { id: 4, text: "Community", href: "/community" },
      { id: 5, text: "Blog", href: "/blog" },
    ],
  },
];

export default SiteMapLink;
