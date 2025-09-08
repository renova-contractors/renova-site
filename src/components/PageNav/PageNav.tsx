"use client";
import Link from "next/link";

type NavLink = { text: string; href: string };

interface PageNavProps {
  showVideo?: boolean;
  showShorts?: boolean;
}

export const PageNav = ({ showVideo = false, showShorts = false }: PageNavProps) => {
  const baseLinks: NavLink[] = [
    { text: "📞 Contact", href: "#contact" },
    { text: "📜 Licencing", href: "#licensing" },
    { text: "💰 Cost Table", href: "#cost_table" },
    { text: "⭐ Reviews", href: "#reviews" },
    { text: "📈 ROI Calculator", href: "#roi" },
    { text: "❓ FAQ", href: "#faq" },
    { text: "🌐 Socials", href: "#socials" },
    { text: "🤖 Estimate with AI", href: "#ai_estimate" }
  ];

  const videoLink: NavLink = { text: "🎥 Video", href: "#video" };
  const shortsLink: NavLink = { text: "🎬 Shorts", href: "#shorts" };
  
  let links = [...baseLinks];
  
  // Add video link after cost table if video is present
  if (showVideo) {
    links.splice(3, 0, videoLink);
  }
  
  // Add shorts link after video (or after cost table if no video)
  if (showShorts) {
    const insertIndex = showVideo ? 4 : 3;
    links.splice(insertIndex, 0, shortsLink);
  }

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
