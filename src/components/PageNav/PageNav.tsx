"use client";
import Link from "next/link";

type NavLink = { text: string; href: string };

export const PageNav = () => {
  const links: NavLink[] = [
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
