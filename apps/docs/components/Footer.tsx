import { useRouter } from "next/router";
import Link from "next/link";
import { useState, ReactNode } from "react";
import VercelLogo from "./logos/Vercel";
import Huddle01 from "./logos/Huddle01";

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  const classes =
    "text-sm text-gray-500 no-underline betterhover:hover:text-gray-700 betterhover:hover:dark:text-white transition";
  if (href.startsWith("http")) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href}>
      <a className={classes}>{children}</a>
    </Link>
  );
}

function FooterHeader({ children }: { children: React.ReactNode }) {
  return <h3 className="text-sm text-gray-900 dark:text-white">{children}</h3>;
}

const navigation = {
  solutions: [
    { name: "Documentation", href: "/docs" },
    { name: "API Reference", href: "/docs" },
    { name: "Blog", href: "/blog" },
  ],
  support: [
    {
      name: "GitHub",
      href: "https://github.com/Huddle-01/",
    },
    {
      name: "Discord",
      href: "https://turborepo.org/discord",
    },
    {
      name: "Twitter",
      href: "https://twitter.com/huddle01com",
    },
  ],
  company: [
    { name: "About Us", href: "https://github.com/Huddle-01" },
    { name: "Terms & Conditions", href: "https://twitter.com/huddle01com" },
    { name: "Privacy Policy", href: "https://twitter.com/huddle01com" },
    { name: "Cookies", href: "https://twitter.com/huddle01com" },
  ],
};

export function Footer() {
  return (
    <footer className="" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className=" sr-only">
        Footer
      </h2>
      <div> hello World</div>
    </footer>
  );
}


