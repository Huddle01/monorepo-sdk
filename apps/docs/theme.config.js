import { useRouter } from "next/router";
import { useConfig } from "nextra-theme-docs";
import { Footer } from "./components/Footer";
import Huddle01 from "./components/logos/Huddle01";

const theme = {
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
  logoLink: false,
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
        <link rel="shortcut icon" href="/images/favicon/favicon.svg" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="theme-color" content="#000" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@huddle01com" />
        <meta name="twitter:creator" content="@huddle01com" />
        <meta property="og:type" content="website" />
        <meta name="og:title" content={title} />
        <meta name="og:description" content={frontMatter.description} />
        <meta
          property="og:url"
          content={`https://doc.huddle01.com${router.asPath}`}
        />
        <meta property="og:locale" content="en_IE" />
        <meta property="og:site_name" content="Huddle01Docs" />
      </>
    );
  },
  editLink: {
    text: "Edit this page on GitHub",
  },
  footer: { component: <Footer /> },
  nextThemes: {
    themes: ["dark"],
    forcedTheme: "dark",
    defaultTheme: "dark",
  },
  darkMode: false,
};
export default theme;
