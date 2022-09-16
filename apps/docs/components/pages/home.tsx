import {
  ArrowCircleRightIcon,
  ClipboardIcon,
  DuplicateIcon,
} from "@heroicons/react/outline";
import { Fragment } from "react";
import copy from "copy-to-clipboard";
import Head from "next/head";
import Image from "next/future/image";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";
import HomepageIcons from "../assets/HomepageIcons";

import { HomeFeatures } from "../Features";
import { Marquee } from "../clients/Marquee";
import { Clients } from "../clients/Clients";
import * as Tabs from "@radix-ui/react-tabs";

export default function Home() {
  const onClick = () => {
    copy("npx create-turbo@latest");
    toast.success("Copied to clipboard");
  };

  return (
    <>
      <Head>
        <title>Huddle01</title>
        <meta
          name="og:description"
          content="Turborepo is a high-performance build system for JavaScript and
          TypeScript codebases"
        />
      </Head>
      <div className="hidden xl:block">
        <div className="absolute top-[188px] left-[207px] h-12 w-12 ">
          {HomepageIcons.metamask}
        </div>
        <div className="absolute top-[252px] left-[97px] h-12 w-12 ">
          {HomepageIcons.solana}
        </div>
        <div className="absolute top-[316px] left-[208.5px] h-12 w-12 ">
          {HomepageIcons.phantom}
        </div>
        <div className="absolute top-[380px] left-[97px] h-12 w-12 ">
          {HomepageIcons.UD}
        </div>
        <div className="absolute top-[188px] right-[207px] h-12 w-12 ">
          {HomepageIcons.nft}
        </div>
        <div className="absolute top-[252px] right-[97px] h-12 w-12 ">
          {HomepageIcons.ethereum}
        </div>
        <div className="absolute top-[316px] right-[208.5px] h-12 w-12 ">
          {HomepageIcons.ens}
        </div>
        <div className="absolute top-[380px] right-[97px] h-12 w-12 ">
          {HomepageIcons.polygon}
        </div>
      </div>
      <div className=" flex flex-col px-4 pt-16 pb-8 mx-auto sm:pt-24 lg:px-8">
        <div className="bg-custom-1 border border-slate-700 pr-3 pl-1 py-1 mx-auto border-1 items-center flex gap-2 rounded-3xl text-xs  mb-4">
          <div className="px-2 py-0.5 rounded-3xl bg-blue-500 font-semibold">
            Alpha Release
          </div>
          <div className="text-blue-300 font-medium">SDK out in alpha use</div>
        </div>
        <div className="max-w-5xl text-center mx-auto  mob:text-4xl hdReady:text-5xl  font-extrabold  text-transparent bg-clip-text bg-gradient-to-r from-[#F7F6FF] via-[#9A8BFF,#5EC3FC]  to-[#F7F6FF] ">
          Build Powerful Audio/Video&nbsp;
          <br className="hidden lg:block" />
          <span className="inline-block ">Apps in Minutes</span>{" "}
        </div>
        <p className="max-w-lg mx-auto mt-6 hdReady:text-base mob:text-sm font-medium leading-tight text-center text-gray-400 ">
          We have done the heavy lifting so you can focus on building the best
          live audio & video experiences within few lines of code.
        </p>
        <div className="w-full mx-auto mt-5 sm:flex sm:justify-center md:mt-8">
          <div className="rounded-md ">
            <Link href="/docs">
              <a className="flex items-center justify-center gap-2 w-full px-8 py-3 text-base font-medium text-white no-underline bg-brand border border-transparent rounded-xl dark:bg-brand dark:text-white md:py-3 md:text-lg md:px-10 md:leading-6">
                Start Building {<ArrowCircleRightIcon className="h-5" />}
              </a>
            </Link>
          </div>
          <div className="relative mt-3 rounded-md sm:mt-0 sm:ml-3">
            <button
              onClick={onClick}
              className="flex gap-2 items-center justify-center w-full px-8 py-3 font-mono text-base font-semibold text-slate-400 bg-custom-1 border-2 border-slate-700 rounded-xl bg-opacity-5 dark:bg-custom-1 dark:text-slate-400 dark:border-gray-700 dark:bg-opacity-5 betterhover:hover:bg-gray-50 betterhover:dark:hover:bg-gray-900 md:py-3 md:text-base md:leading-6 md:px-10"
            >
              npx create-turbo
              <span className="h-5">{HomepageIcons.clipboard}</span>
            </button>
          </div>
        </div>
      </div>

      <div className="py-16">
        <div className="mx-auto ">
          <p className="pb-8 mob:text-sm hdReady:text-xl font-medium tracking-wide text-center">
            Trusted by DAOs, Communities and Builders
          </p>
          <Marquee>
            <Clients />
          </Marquee>
        </div>
      </div>

      <div className="relative mesh">
        <div className="px-4 py-16 mx-auto sm:pt-20 sm:pb-24 lg:max-w-7xl lg:pt-24">
          <h2 className="mob:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-[#A0C6FF] via-white  to-[#E7A1FF] font-extrabold tracking-tight hdReady:text-4xl text-center">
            Heading
          </h2>
          <p className="mx-auto mt-4 font-normal text-slate-400 lg:max-w-3xl hdReady:text-base mob:text-sm text-center">
            Subtext
          </p>
          <HomeFeatures />
        </div>
      </div>
      <div className="gridBack flex flex-col items-center justify-center mx-auto gap-32 px-5">
        <div className="flex flex-col justify-center items-center gap-12 ">
          <div className="flex flex-col gap-2 px-4 ">
            <h1 className="text-center mob:text-3xl hdReady:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#B0D9FF] to-[#3BB4E1] ">
              Right Out of the Box
            </h1>
            <p className="mob:text-sm hdReady:text-base  font-normal text-slate-400 text-center ">
              Get essential Audio/Video features to build powerful communication
              apps plus Web3 Features
            </p>
          </div>

          <div className="py-12 w-full px-8 rounded-2xl bg-custom-5 border border-slate-700 ">
            <Tabs.Root
              className="flex flex-col gap-3 md:gap-4 md:flex-row  w-full"
              defaultValue="f1"
            >
              <Tabs.List className="flex md:flex-col gap-4 md:w-1/3 ">
                <Tabs.Trigger
                  className="bg-custom-5 text-sm trigger text-left p-3 rounded-lg"
                  value="f1"
                >
                  Feature 1
                </Tabs.Trigger>
                <Tabs.Trigger
                  className="bg-custom-5 text-sm trigger text-left p-3 rounded-lg"
                  value="f2"
                >
                  Feature 2
                </Tabs.Trigger>
                <Tabs.Trigger
                  className="bg-custom-5 text-sm trigger text-left p-3 rounded-lg"
                  value="f3"
                >
                  Feature 3
                </Tabs.Trigger>
              </Tabs.List>
              <Tabs.Content
                className="bg-custom-2 content rounded-lg h-80 w-full flex justify-center items-center"
                value="f1"
              >
                Content 1
              </Tabs.Content>
              <Tabs.Content
                className="bg-custom-2 content rounded-lg h-80 w-full flex justify-center items-center"
                value="f2"
              >
                Content 2
              </Tabs.Content>
              <Tabs.Content
                className="bg-custom-2 content rounded-lg h-80 w-full flex justify-center items-center"
                value="f3"
              >
                Content 3
              </Tabs.Content>
            </Tabs.Root>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-12 mb-10  md:mb-32 ">
          <div className="flex flex-col gap-2 px-4">
            <h1 className="mob:text-3xl hdReady:text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#E8CDFF]   to-[#FFA6AB]">
              Integrate/Build Blazingly Fast
            </h1>
            <p className="text-center text-sm font-normal text-slate-400">
              Designed for the Developers, By the Developers. To empower them
              build or leverage the Huddle01 Infra to ship Audio/Video quickly.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:gap-8 md:grid-cols-2 place-items-center px-4">
            <div className=" h-64 w-80 lg:w-[560px] lg:h-80 border border-slate-700 bg-custom-5 rounded-2xl flex justify-center items-center lg:place-self-end ">
              GIF
            </div>
            <div className=" h-64 w-80 lg:w-[560px] lg:h-80 bg-custom-5 rounded-2xl border border-slate-700 flex justify-center items-center lg:place-self-start ">
              GIF
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 place-items-start md:place-items-center gap-4">
            <div className="flex items-center mx-6 gap-3 lg:place-self-end ">
              <span className="text-sm text-slate-400 font-medium">
                Available{" "}
              </span>{" "}
              {HomepageIcons.react} {HomepageIcons.reactNative}
            </div>

            <div className="flex items-center mx-6 gap-3 lg:place-self-start ">
              <span className="text-sm text-slate-400 font-medium">
                Coming Soon{" "}
              </span>{" "}
              {HomepageIcons.javascript}
              {HomepageIcons.android}
              {HomepageIcons.ios}
              {HomepageIcons.flutter}
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-2  text-center px-4">
              <div className="flex justify-between">
                <Image
                  src="/images/CloudL.png"
                  className=" self-start"
                  width={90}
                  height={60}
                />
                <h1 className="mob:text-3xl hdReady:text-4xl font-extrabold self-end text-transparent bg-clip-text bg-gradient-to-r from-[#F8A3A3] to-[#98ECFF]">
                  Tailored for your Needs
                </h1>
                <Image
                  src="/images/cloudR.png"
                  className=" self-start"
                  width={90}
                  height={60}
                />
              </div>

              <p className="text-sm font-normal ">
                Sky is the limit when you build via Huddle01 SDK. Build
                according to your usecase, or go beyond and ship something
                crazy!
              </p>
            </div>

            <div className="mx-4">
              <Tabs.Root
                className="flex flex-col gap-3 md:gap-4  w-full"
                defaultValue="f1"
              >
                <Tabs.List className="flex gap-4 md:w-full pb-1 border-b-[1px] justify-center border-slate-700 ">
                  <Tabs.Trigger
                    className="bg-custom-5 text-base trigger2 text-left py-2 px-6 rounded-lg"
                    value="f1"
                  >
                    Case
                  </Tabs.Trigger>
                  <Tabs.Trigger
                    className="bg-custom-5 text-base trigger2 text-left py-2 px-6 rounded-lg"
                    value="f2"
                  >
                    Case
                  </Tabs.Trigger>
                  <Tabs.Trigger
                    className="bg-custom-5 text-base trigger2 text-left py-2 px-6 rounded-lg"
                    value="f3"
                  >
                    Case
                  </Tabs.Trigger>
                </Tabs.List>
                <Tabs.Content
                  className="flex content flex-col md:flex-row md:items-center gap-4 mt-[52px]"
                  value="f1"
                >
                  <div>
                    <h1 className=" text-2xl font-bold text-slate-300">
                      Heading 1
                    </h1>
                    <p className="text-base font-normal text-slate-400">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Explicabo illum nostrum obcaecati repellendus quae, quidem
                      saepe laboriosam quam nulla ab id qui, dolorum facere
                      labore quos dicta fugit maxime placeat!
                    </p>
                  </div>
                  <div className="bg-custom-2 h-80 rounded-xl w-full mt-4" />
                </Tabs.Content>
                <Tabs.Content
                  className="flex content flex-col md:flex-row md:items-center gap-4 mt-[52px]"
                  value="f2"
                >
                  <div>
                    <h1 className=" text-2xl font-bold text-slate-300">
                      Heading 2
                    </h1>
                    <p className="text-base font-normal text-slate-400">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Explicabo illum nostrum obcaecati repellendus quae, quidem
                      saepe laboriosam quam nulla ab id qui, dolorum facere
                      labore quos dicta fugit maxime placeat!
                    </p>
                  </div>
                  <div className="bg-custom-2 h-80 rounded-xl w-full mt-4" />
                </Tabs.Content>
                <Tabs.Content
                  className="flex content flex-col md:flex-row md:items-center gap-4 mt-[52px]"
                  value="f3"
                >
                  <div>
                    <h1 className=" text-2xl font-bold text-slate-300">
                      Heading 3
                    </h1>
                    <p className="text-base font-normal text-slate-400">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Explicabo illum nostrum obcaecati repellendus quae, quidem
                      saepe laboriosam quam nulla ab id qui, dolorum facere
                      labore quos dicta fugit maxime placeat!
                    </p>
                  </div>
                  <div className="bg-custom-2 h-80 rounded-xl w-full mt-4" />
                </Tabs.Content>
              </Tabs.Root>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 md:grid-rows-2 place-content-center gap-4 px-4 w-full md:mt-52 md:w-2/3">
            <button className="flex justify-start items-start border border-slate-700 pt-5 pl-5 md:pb-24 pb-14 rounded-xl bg-custom-5 md:col-span-3 ">
              <a className="text-[2.5rem] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#98FFc1]   to-[#3BE191] ">
                Start Buidling
              </a>
            </button>
            <button className="flex justify-start items-start border border-slate-700 pt-5 pl-5 pb-14 md:pb-24 rounded-xl bg-custom-5 md:row-span-1 md:col-span-2 ">
              <a className="text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#B0D9FF]   to-[#3BB4E1] ">
                Pricing
              </a>
            </button>
            <button className="flex justify-start items-start border border-slate-700 pt-5 pl-5 pb-14 md:pb-24 rounded-xl bg-custom-5 md:col-start-1 md:col-span-2 ">
              <a className="text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#A0C6FF]   to-[#E7A1FF] ">
                About Us
              </a>
            </button>
            <button className="flex justify-start items-start border border-slate-700 pt-5 pl-5 pb-14 md:pb-24 rounded-xl bg-custom-5 md:col-span-3 ">
              <a className="text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#E8CDFF]   to-[#FFA6AB] ">
                Try Huddle01
              </a>
            </button>
          </div>
        </div>
      </div>
      {/* <div className="sm:py-20 lg:py-24">
        <div className="max-w-4xl px-4 pb-12 mx-auto lg:px-8 ">
          <h2 className="text-4xl font-extrabold leading-tight tracking-tight lg:text-5xl xl:text-6xl md:text-center dark:text-white">
            Loved by badass engineers
          </h2>
        </div>
        <div className="grid gap-4 px-4 mx-auto lg:grid-cols-3 max-w-7xl">
          <div className="space-y-4">
            <Tweet
              url="https://twitter.com/jongold/status/1409714159227326466"
              username="jongold"
              name="Jon Gold"
              date="Jun 28"
              avatar={jongold}
            >
              <Mention>@turborepo</Mention> is the coolest javascript thing
              i&apos;ve seen probably since an early prototype of Next.js
              <br />
              <br />
              javascript fatigue is over
            </Tweet>
            <Tweet
              url="https://twitter.com/flavioukk/status/1405526268615958530"
              username="flavioukk"
              name="Flávio Carvalho"
              date="Jun 17"
              avatar={flavio}
            >
              <Mention>@turborepo</Mention> cache hit in CI is the most
              satisfying thing ever, why hasn&apos;t anyone thought of this
              before lol
            </Tweet>
            <Tweet
              url="https://twitter.com/shadcn/status/1470269932789125123"
              username="yangshunz"
              name="Yangshun Tay"
              date="Dec 12"
              avatar={yangshunz}
            >
              Experimented with <Mention>@turborepo</Mention> on my Flow-based
              4-package monorepo where each package contains lint, test and
              build commands:
              <br />
              <br />
              - lint, test, build all files in series: ~75s
              <br />
              - lerna --parallel: ~62s
              <br />
              - turbo: ~35s (791ms on cache hit)
              <br />
              <br />
              🤯 Impressive results! FULL TURBO!
            </Tweet>
          </div>

          <div className="space-y-4">
            <Tweet
              url="https://twitter.com/paularmstrong/status/1386796930479665158"
              username="paularmstrong"
              name="Paul Armstrong"
              date="Apr 26"
              avatar={paularmstrong}
            >
              Just saw <Mention>@turborepo</Mention> in action and gotta say: it
              looks amazing!
            </Tweet>

            <Tweet
              url="https://twitter.com/edelman215/status/1410388867828654084"
              username="edelman215"
              name="Michael Edelman"
              date="Jun 30"
              avatar={edelman}
            >
              10 runtime-diverse apps, 7 IAC stacks, 6 custom JSII CDK
              constructs, 5 third-party client wrappers, 2 auto-generated
              internal api sdks, a handful of utility/misc packages under
              management, &amp; growing, in 1 monorepo--all in a day&apos;s work
              for <Mention>@turborepo</Mention>
              --no pain, all gain. 😻
            </Tweet>
            <Tweet
              url="https://twitter.com/shadcn/status/1470269932789125123"
              username="shadcn"
              name="shadcn"
              date="Dec 12"
              avatar={shadcn}
            >
              Turborepo is really good at what it does: Ridiculously fast
              builds.
            </Tweet>
            <Tweet
              url="https://twitter.com/n_moore/status/1469344866194788355"
              username="n_moore"
              name="Nate Moore"
              date="Dec 10"
              avatar={nmoore}
            >
              Finally! <Mention>@astrodotbuild</Mention> is now using
              <Mention>@turborepo</Mention>. ♥️⚡️
              <br />
              So glad it&apos;s open source now—congrats to{" "}
              <Mention>@jaredpalmer</Mention> and <Mention>@vercel</Mention> on
              the release!
            </Tweet>
          </div>
          <div className="space-y-4">
            <Tweet
              url="https://twitter.com/ollermi/status/1377458483671543810"
              username="ollermi"
              name="Miguel Oller"
              date="Mar 31"
              avatar={ollermi}
            >
              It&apos;s been a joy to use <Mention>@turborepo</Mention>.{" "}
              <Mention>@jaredpalmer</Mention> is building something truly
              wonderful for the JS community
            </Tweet>
            <Tweet
              url="https://twitter.com/elado/status/1377405777506279425"
              username="elado"
              name="Elad Ossadon"
              date="Mar 31"
              avatar={elad}
            >
              If you build for web, leave everything and go see what{" "}
              <Mention>@jaredpalmer</Mention> is doing with{" "}
              <Mention>@turborepo</Mention>. One of the most exciting pieces of
              tech lately! The hype is real
            </Tweet>

            <Tweet
              url="https://twitter.com/christianjuth/status/1469494057843847169"
              username="christianjuth"
              name="Christian 👨🏼‍💻"
              date="Dec 10"
              avatar={christian}
            >
              Holy wow, I just rewrote my entire Lerna monorepo to use Turborepo
              and SWC, and it took me like maybe 20 minutes. This is insane.
              Literally, everything Vercel has backed/acquired/created makes
              development a little easier. But wow, it just blew my mind how
              easy this all is to use.
            </Tweet>
            <Tweet
              url="https://twitter.com/jplhomer/status/1494080248845062154"
              username="jplhomer"
              name="Josh Larson"
              date="Feb 16"
              avatar={joshlarson}
            >
              <>
                Living that <Mention>@turborepo</Mention> life{" "}
                <span role="img" aria-label="Smiling face with sunglasses">
                  😎
                </span>
              </>
            </Tweet>
          </div>
        </div>
        <Container>
          <div className="px-4 py-16 mx-auto mt-10 sm:max-w-none sm:flex sm:justify-center">
            <div className="space-y-4 sm:space-y-0 sm:mx-auto ">
              <Link href="/docs/getting-started">
                <a className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white no-underline bg-black border border-transparent rounded-md dark:bg-white dark:text-black betterhover:dark:hover:bg-gray-300 betterhover:hover:bg-gray-700 md:py-3 md:text-lg md:px-10 md:leading-6">
                  Start Building →
                </a>
              </Link>
            </div>
          </div>
        </Container>
      </div> */}
      <Toaster position="bottom-right" />
    </>
  );
}
