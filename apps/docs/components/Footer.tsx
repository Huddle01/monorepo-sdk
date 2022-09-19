import Link from "next/link";

// Components
import Copyright from "./FooterComp/Copyright";
import FooterContent from "./FooterComp/FooterContent/FooterContent";

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
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

export function Footer() {
  return (
    <footer
      className="overflow-x-hidden w-full bg-webRgbColors-9  py-[4.5rem] mob:px-6"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <FooterContent />
      <Copyright />
    </footer>
  );
}
