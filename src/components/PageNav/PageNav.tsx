"use client";
import Link from "next/link";

type NavLink = { text: string; href: string };

interface PageNavProps {
  showVideo?: boolean;
}

export const PageNav = ({ showVideo = false }: PageNavProps) => {
  const baseLinks: NavLink[] = [
    { text: "📞 Contact", href: "#contact" },
    { text: "📜 Licencing", href: "#licensing" },
    { text: "💰 Cost Table", href: "#cost_table" },
    { text: "🎬 Videos", href: "#videos" },
    { text: "⭐ Reviews", href: "#reviews" },
    { text: "📈 ROI Calculator", href: "#roi" },
    { text: "❓ FAQ", href: "#faq" },
    { text: "🌐 Socials", href: "#socials" },
    { text: "🤖 Estimate with AI", href: "#ai_estimate" }
  ];

  const videoLink: NavLink = { text: "🎥 Video", href: "#video" };
  
  const links = showVideo 
    ? [...baseLinks.slice(0, 4), videoLink, ...baseLinks.slice(4)]
    : baseLinks;

  return (
    <div className="container scroll-anchor">
      <nav
        aria-label="Page navigation"
        className="component-mb relative w-full mx-auto"
      >
        <ul className="flex slider-gap overflow-x-auto overflow-y-hidden">
          {links.map((link, index) => (
            <li key={index}>
              <Link className="catalog-button block" href={link.href}>
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
