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
import HomepageIconsMob from "../assets/HomepageIconsMob";

import { useWindowSize } from "usehooks-ts";
import { Footer } from "../Footer";

export default function Home() {
  const onClick = () => {
    copy("npx create-huddle");
    toast.success("Copied to clipboard");
  };

  const { width } = useWindowSize();
  const isMob = width < 425;
  const isTab = width < 768;

  return (
    <>
      <Head>
        <title>Huddle01</title>
        <meta
          name="og:description"
          content="We have done the heavy lifting so you can focus on building the best live audio & video experiences within few lines of code. "
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
        <div className=" hdReady:max-w-2xl tablet:max-w-xl max-w-sm text-center mx-auto mob:text-4xl laptop:text-5xl font-extrabold  text-transparent bg-clip-text bg-gradient-to-r from-[#F7F6FF] via-[#9A8BFF,#5EC3FC]  to-[#F7F6FF] ">
          Build Powerful Audio/Video Apps in Minutes
        </div>
        <p className="max-w-sm tablet:max-w-lg mx-auto mt-6 text-sm font-medium leading-tight text-center text-gray-400 ">
          We have done the heavy lifting so you can focus on building the best
          live audio & video experiences within few lines of code.
        </p>
        <div className="w-full mx-auto mob:mt-12 tablet:mt-12 sm:flex sm:gap-4 sm:justify-center ">
          <div className="rounded-md ">
            <Link href="/docs">
              <a className="flex items-center justify-center gap-2 w-full px-8 py-3 text-base font-medium text-white no-underline bg-brand border border-transparent rounded-xl md:py-3 md:text-lg md:px-10 md:leading-6">
                Start Building {<ArrowCircleRightIcon className="h-5" />}
              </a>
            </Link>
          </div>
          <div className="relative mt-3 rounded-md sm:mt-0 sm:ml-3">
            <button
              onClick={onClick}
              className="flex gap-2 items-center justify-center w-full px-8 py-3 font-mono text-base font-semibold text-slate-400 bg-custom-1 border-2 border-slate-700 rounded-xl bg-opacity-5 dark:bg-custom-1 dark:text-slate-400 dark:border-gray-700 dark:bg-opacity-5 betterhover:hover:bg-gray-50 betterhover:dark:hover:bg-gray-900 md:py-3 md:text-base md:leading-6 md:px-10"
            >
              npx create-huddle
              <span className="h-5">{HomepageIcons.clipboard}</span>
            </button>
          </div>
        </div>
      </div>

      <div className="mob:flex flex-col gap-4 hdReady:hidden">
        <div className="flex flex-row items-center px-8 h-12 justify-around">
          <div className=" h-8 tablet:h-10 self-end ">
            {HomepageIconsMob.UD}
          </div>
          <div className=" h-8 tablet:h-10 self-start ">
            {HomepageIconsMob.metamask}
          </div>
          <div className=" h-8 tablet:h-10 self-start ">
            {HomepageIconsMob.nft}
          </div>
          <div className=" h-8 tablet:h-10 self-end ">
            {HomepageIconsMob.polygon}
          </div>
        </div>
        <div className="flex flex-row  items-center px-[72px] h-12 justify-around">
          <div className="h-8 tablet:h-10 self-start">
            {HomepageIconsMob.solana}
          </div>
          <div className=" h-8 tablet:h-10 self-end ">
            {HomepageIconsMob.phantom}
          </div>
          <div className=" h-8 tablet:h-10 self-end">
            {HomepageIconsMob.ens}
          </div>
          <div className=" h-8 tablet:h-10 self-start ">
            {HomepageIconsMob.ethereum}
          </div>
        </div>
      </div>

      <div className=" hdReady:mt-20 mob:mt-10">
        <img src="/images/landingWeb.png" />
      </div>

      <div className="py-16">
        <div className="mx-auto ">
          <p className="pb-8 text-sm font-medium tracking-wide text-center">
            Trusted by DAOs, Communities and Builders
          </p>
          <Marquee>
            <Clients />
          </Marquee>
        </div>
      </div>

      <div className="relative gridBack">
        <div className="px-4 py-16 mx-auto flex flex-col justify-center items-center sm:pt-20 sm:pb-24 lg:max-w-7xl w-full lg:pt-24">
          <h2 className="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-[#A0C6FF]   to-[#E7A1FF] font-extrabold tracking-tight lg:text-5xl xl:text-6xl text-center">
            Heading
          </h2>
          <p className="mx-auto mt-4 text-sm font-normal text-slate-400 lg:max-w-3xl lg:text-xl text-center">
            Subtext
          </p>
          <HomeFeatures />
        </div>
      </div>
      <div className="gridBack  flex flex-col items-center justify-center mx-auto gap-32">
        <div className="blobBack max-w-full flex flex-col justify-center items-center gap-12 p-4">
          <div className="flex flex-col gap-2 px-4">
            <h1 className="text-center text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#B0D9FF] to-[#3BB4E1] ">
              Right Out of the Box
            </h1>
            <p className=" text-sm font-normal text-slate-400 text-center">
              Get essential Audio/Video features to build powerful communication
              apps plus Web3 Features
            </p>
          </div>

          <div className=" w-full laptop:px-12 laptop:py-12 py-12 px-8  rounded-2xl bg-custom-2 border border-slate-700 ">
            <Tabs.Root
              className="max-w-full flex flex-col gap-3 md:gap-4 md:flex-row  w-full"
              defaultValue="f1"
            >
              <Tabs.List className="flex md:flex-col overflow-x-auto scrollbar-hide gap-4 md:w-1/3 ">
                <Tabs.Trigger
                  className="bg-custom-2 w-full text-sm trigger whitespace-pre text-left p-3 rounded-lg"
                  value="f1"
                >
                  Feature 1
                </Tabs.Trigger>
                <Tabs.Trigger
                  className="bg-custom-2 w-full text-sm trigger whitespace-pre text-left p-3 rounded-lg"
                  value="f2"
                >
                  Feature 2
                </Tabs.Trigger>
                <Tabs.Trigger
                  className="bg-custom-2 w-full  text-sm trigger whitespace-pre text-left p-3 rounded-lg"
                  value="f3"
                >
                  Feature 3
                </Tabs.Trigger>
              </Tabs.List>
              <Tabs.Content
                className="bg-webRgbColors-6 content rounded-md h-80 w-full flex justify-center items-center"
                value="f1"
              >
                Content 1
              </Tabs.Content>
              <Tabs.Content
                className="bg-webRgbColors-6 content rounded-md h-80 w-full flex justify-center items-center"
                value="f2"
              >
                Content 2
              </Tabs.Content>
              <Tabs.Content
                className="bg-webRgbColors-6 content rounded-md h-80 w-full flex justify-center items-center"
                value="f3"
              >
                Content 3
              </Tabs.Content>
            </Tabs.Root>
          </div>
        </div>

        <div className="max-w-full flex flex-col items-center justify-center gap-12 mb-10  md:mb-32">
          <div className="max-w-full flex flex-col justify-center items-center gap-2 px-4">
            <h1 className="max-w-sm laptop:max-w-full text-3xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#E8CDFF]   to-[#FFA6AB]">
              Integrate/Build Blazingly Fast
            </h1>
            <p className=" text-center text-sm font-normal text-slate-400">
              Designed for the Developers, By the Developers. To empower them
              build or leverage the Huddle01 Infra to ship Audio/Video quickly.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:gap-8 md:grid-cols-2 place-items-center px-4 w-full">
            <div className=" h-64 mob:w-full hdReady:w-[560px] laptop:h-80 border border-slate-700 bg-custom-2 rounded-2xl flex justify-center items-center lg:place-self-end ">
              GIF
            </div>
            <div className=" h-64 mob:w-full hdReady:w-[560px] laptop:h-80 bg-custom-2 rounded-2xl border border-slate-700 flex justify-center items-center lg:place-self-start ">
              GIF
            </div>
          </div>

          <div className="flex mob:flex-col laptop:flex-row laptop:justify-center mx-auto gap-4 w-full">
            <div className="flex items-center  mx-6 gap-3 max-w-full">
              <span className="text-sm text-slate-400 font-medium">
                Available{" "}
              </span>{" "}
              {HomepageIcons.react} {HomepageIcons.reactNative}
            </div>

            <div className="flex items-center mx-6 gap-3 max-w-full">
              <span className="text-sm text-slate-400 font-medium">
                Coming Soon{" "}
              </span>{" "}
              {HomepageIcons.javascript}
              {HomepageIcons.android}
              {HomepageIcons.ios}
              {HomepageIcons.flutter}
            </div>
          </div>

          <div className="flex flex-col gap-8 mt-12">
            <div className="flex flex-col gap-2 text-center px-4">
              <div className="flex items-center justify-between">
                <Image
                  src="/images/CloudL.png"
                  className=""
                  width={isTab ? 90 : 175}
                  height={isTab ? 90 : 120}
                />
                {!isTab ? (
                  <div className="flex flex-col gap-4">
                    <h1 className=" mob:text-3xl laptop:text-4xl text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#F8A3A3] to-[#98ECFF]">
                      Tailored for your Needs
                    </h1>
                    <p className="px-3 text-slate-400 text-center text-sm font-normal ">
                      Sky is the limit when you build via Huddle01 SDK. Build
                      according to your usecase, or go beyond and ship something
                      crazy!
                    </p>
                  </div>
                ) : (
                  ""
                )}

                <Image
                  src="/images/cloudR.png"
                  className=""
                  width={isTab ? 90 : 175}
                  height={isTab ? 90 : 120}
                />
              </div>
              {isTab ? (
                <>
                  <h1 className=" mob:text-3xl laptop:text-4xl text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#F8A3A3] to-[#98ECFF]">
                    Tailored for your Needs
                  </h1>
                  <p className="px-3 text-slate-400 text-center text-sm font-normal ">
                    Sky is the limit when you build via Huddle01 SDK. Build
                    according to your usecase, or go beyond and ship something
                    crazy!
                  </p>
                </>
              ) : (
                ""
              )}
            </div>

            <div className="mx-4 md:mx-20">
              <Tabs.Root
                className="flex flex-col gap-3 md:gap-4  w-full"
                defaultValue="f1"
              >
                <Tabs.List className="flex gap-6 md:w-full  border-b-[1px] justify-center border-slate-700 ">
                  <Tabs.Trigger
                    className="bg-custom-5 text-base trigger2 text-left h-full py-2 px-1"
                    value="f1"
                  >
                    Case
                  </Tabs.Trigger>
                  <Tabs.Trigger
                    className="bg-custom-5 text-base trigger2 text-left py-2 px-1"
                    value="f2"
                  >
                    Case
                  </Tabs.Trigger>
                  <Tabs.Trigger
                    className="bg-custom-5 text-base trigger2 text-left py-2 px-1"
                    value="f3"
                  >
                    Case
                  </Tabs.Trigger>
                </Tabs.List>
                <Tabs.Content
                  // className="flex content flex-col md:flex-row md:items-center gap-4 mt-[52px]"
                  value="f1"
                >
                  <div className="grid overflow-hidden laptop:grid-cols-2 laptop:grid-rows-2 gap-2 mt-[52px]">
                    <div className="bg-custom-2 h-80 rounded-xl mob:w-full laptop:row-span-2 laptop:col-start-2 laptop:col-span-1" />

                    <h1 className=" text-2xl font-bold text-slate-400 mt-8 laptop:row-start-1 laptop:col-span-1 self-end">
                      Heading 1
                    </h1>
                    <p className="text-base text-justify tablet:text-left font-normal mt-2 text-slate-500 laptop:row-start-2 laptop:col-span-1">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Explicabo illum nostrum obcaecati repellendus quae, quidem
                      saepe laboriosam quam nulla ab id qui, dolorum facere
                      labore quos dicta fugit maxime placeat!
                    </p>
                  </div>
                </Tabs.Content>
                <Tabs.Content
                  // className="flex content flex-col md:flex-row md:items-center gap-4 mt-[52px]"
                  value="f2"
                >
                  <div className="grid overflow-hidden laptop:grid-cols-2 laptop:grid-rows-2 gap-2 mt-[52px]">
                    <div className="bg-custom-2 h-80 rounded-xl mob:w-full laptop:row-span-2 laptop:col-start-2 laptop:col-span-1" />

                    <h1 className=" text-2xl font-bold text-slate-400 mt-8 laptop:row-start-1 laptop:col-span-1 self-end">
                      Heading 2
                    </h1>
                    <p className="text-base text-justify tablet:text-left font-normal mt-2 text-slate-500 laptop:row-start-2 laptop:col-span-1">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Explicabo illum nostrum obcaecati repellendus quae, quidem
                      saepe laboriosam quam nulla ab id qui, dolorum facere
                      labore quos dicta fugit maxime placeat!
                    </p>
                  </div>
                </Tabs.Content>
                <Tabs.Content
                  // className="flex flex-col md:flex-row md:items-center max-w-full gap-4 mt-[52px]"
                  value="f3"
                >
                  <div className="grid overflow-hidden laptop:grid-cols-2 laptop:grid-rows-2 gap-2 mt-[52px]">
                    <div className="bg-custom-2 h-80 rounded-xl mob:w-full laptop:row-span-2 laptop:col-start-2 laptop:col-span-1" />

                    <h1 className=" text-2xl font-bold text-slate-400 mt-8 laptop:row-start-1 laptop:col-span-1 self-end">
                      Heading 3
                    </h1>
                    <p className="text-base text-justify tablet:text-left font-normal mt-2 text-slate-500 laptop:row-start-2 laptop:col-span-1">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Explicabo illum nostrum obcaecati repellendus quae, quidem
                      saepe laboriosam quam nulla ab id qui, dolorum facere
                      labore quos dicta fugit maxime placeat!
                    </p>
                  </div>
                </Tabs.Content>
              </Tabs.Root>
            </div>
          </div>

          <div className=" max-w-full flex mob:flex-col laptop:flex-row laptop:justify-evenly laptop:gap-8 gap-4 mob:px-4 tablet:px-16 w-full md:mt-52 mt-24 mb-20 md:mb-32">
            <button className=" border border-slate-700  rounded-xl py-6 px-8 bg-custom-2 grow ">
              <a className=" text-4xl text-center font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#98FFc1]   to-[#3BE191] ">
                Start Buidling
              </a>
            </button>
            <button className="border border-slate-700  rounded-xl py-6 px-8 bg-custom-2 grow ">
              <a className="text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#B0D9FF]   to-[#3BB4E1] ">
                Pricing
              </a>
            </button>
            <button className="border border-slate-700  rounded-xl py-6 px-8 bg-custom-2 grow ">
              <a className="text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#A0C6FF]   to-[#E7A1FF] ">
                About Us
              </a>
            </button>
            <button className="border border-slate-700  rounded-xl py-6 px-8 bg-custom-2 grow ">
              <a className="text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#E8CDFF]   to-[#FFA6AB] ">
                Try Huddle01
              </a>
            </button>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
      <Toaster position="bottom-right" />
    </>
  );
}
