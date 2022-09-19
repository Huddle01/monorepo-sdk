import { useRouter } from "next/router";
import { useConfig } from "nextra-theme-docs";
import { Footer } from "./components/Footer";
import Huddle01 from "./components/logos/Huddle01";

const theme = {
  github: "https://github.com/Huddle-01/huddle01-docs",
  project: {
    link: "https://github.com/Huddle-01/huddle01-docs",
  },
  docsRepositoryBase: "https://github.com/Huddle-01/huddle01-docs/",
  titleSuffix: " | Huddle01",
  unstable_flexsearch: true,
  unstable_staticImage: true,
  toc: {
    float: true,
  },
  font: false,
  feedback: {
    link: "Question? Give us feedback →",
  },
  logo: function LogoActual() {
    return (
      <>
        <Huddle01 height={26} />
        <span className="sr-only">Huddle01</span>
      </>
    );
  },
  head: function () {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router = useRouter();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { frontMatter, title } = useConfig();
    return (
      <>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon/favicon-16x16.png"
        />
        <link
          rel="mask-icon"
          href="/images/favicon/safari-pinned-tab.svg"
          color="#000000"
        />
        <link rel="shortcut icon" href="/images/favicon/favicon.ico" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="theme-color" content="#000" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@turborepo" />
        <meta name="twitter:creator" content="@turborepo" />
        <meta property="og:type" content="website" />
        <meta name="og:title" content={title} />
        <meta name="og:description" content={frontMatter.description} />
        <meta
          property="og:url"
          content={`https://turborepo.org${router.asPath}`}
        />
        <meta
          property="twitter:image"
          content={`https://turborepo.org${
            frontMatter.ogImage ?? "/og-image.png"
          }`}
        />
        <meta
          property="og:image"
          content={`https://turborepo.org${
            frontMatter.ogImage ?? "/og-image.png"
          }`}
        />
        <meta property="og:locale" content="en_IE" />
        <meta property="og:site_name" content="Turborepo" />
      </>
    );
  },
  editLink: {
    text: "Edit this page on GitHub",
  },
  footer: { component: <Footer /> },
  nextThemes: {
    defaultTheme: "dark",
  },
};
export default theme;
