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

import { useWindowSize } from 'usehooks-ts'

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
        <div className="max-w-5xl text-center mx-auto mob:text-4xl laptop:text-5xl font-extrabold  text-transparent bg-clip-text bg-gradient-to-r from-[#F7F6FF] via-[#9A8BFF,#5EC3FC]  to-[#F7F6FF] ">
          Build Powerful Audio/Video&nbsp;
          <br className="mob:hidden tablet:block" />
          <span className="inline-block ">Apps in Minutes</span>{" "}
        </div>
        <p className="max-w-sm mx-auto mt-6 text-sm font-medium leading-tight text-center text-gray-400 ">
          We have done the heavy lifting so you can focus on building the best
          live audio & video experiences within few lines of code.
        </p>
        <div className="w-full mx-auto mob:mt-5 tablet:mt-12 sm:flex sm:justify-center ">
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

      <div className="grid grid-cols-6 place-content-center gap-4 hdReady:hidden">
        <div className="flex flex-col items-center justify-start">
          <div className=" h-8 tablet:h-10 ">
            {HomepageIconsMob.UD}
          </div>
        </div>
        <div className="flex flex-col  items-center justify-center">
          <div className="h-8 tablet:h-10">
            {HomepageIconsMob.solana}
          </div>
        </div>
        <div className="flex flex-col gap-7 items-center justify-between">
          <div className=" h-8 tablet:h-10 ">
            {HomepageIconsMob.metamask}
          </div>
          <div className=" h-8 tablet:h-10 ">
            {HomepageIconsMob.phantom}
          </div>
        </div>
        <div className="flex flex-col gap-7  items-center justify-between">
          <div className=" h-8 tablet:h-10 ">
            {HomepageIconsMob.nft}
          </div>
          <div className=" h-8 tablet:h-10">
            {HomepageIconsMob.ens}
          </div>
        </div>
        <div className="flex flex-col  items-center justify-center">
          <div className=" h-8 tablet:h-10 ">
            {HomepageIconsMob.ethereum}
          </div>
        </div>
        <div className="flex flex-col  items-center justify-start">
          <div className=" h-8 tablet:h-10 ">
            {HomepageIconsMob.polygon}
          </div>
        </div>
      </div>

      <div className=" mt-20">
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

      <div className="relative mesh">
        <div className="px-4 py-16 mx-auto sm:pt-20 sm:pb-24 lg:max-w-7xl lg:pt-24">
          <h2 className="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-[#A0C6FF] via-white  to-[#E7A1FF] font-extrabold tracking-tight lg:text-5xl xl:text-6xl text-center">
            Heading
          </h2>
          <p className="mx-auto mt-4 text-sm font-normal text-slate-400 lg:max-w-3xl lg:text-xl text-center">
            Subtext
          </p>
          <HomeFeatures />
        </div>
      </div>
      <div className="gridBack flex flex-col items-center justify-center mx-auto gap-32 px-5">
        <div className="flex flex-col justify-center items-center gap-12 ">
          <div className="flex flex-col gap-2 px-4">
            <h1 className="text-center text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#B0D9FF] to-[#3BB4E1] ">
              Right Out of the Box
            </h1>
            <p className=" text-sm font-normal text-slate-400 text-center">
              Get essential Audio/Video features to build powerful communication
              apps plus Web3 Features
            </p>
          </div>

          <div className="py-12 w-full px-8 rounded-2xl bg-custom-2 border border-slate-700 ">
            <Tabs.Root
              className="flex flex-col gap-3 md:gap-4 md:flex-row  w-full"
              defaultValue="f1"
            >
              <Tabs.List className="flex md:flex-col gap-4 md:w-1/3 ">
                <Tabs.Trigger
                  className="bg-custom-2 text-sm trigger text-left p-3 rounded-lg"
                  value="f1"
                >
                  Feature 1
                </Tabs.Trigger>
                <Tabs.Trigger
                  className="bg-custom-2 text-sm trigger text-left p-3 rounded-lg"
                  value="f2"
                >
                  Feature 2
                </Tabs.Trigger>
                <Tabs.Trigger
                  className="bg-custom-2 text-sm trigger text-left p-3 rounded-lg"
                  value="f3"
                >
                  Feature 3
                </Tabs.Trigger>
              </Tabs.List>
              <Tabs.Content
                className="bg-webRgbColors-6 content rounded-lg h-80 w-full flex justify-center items-center"
                value="f1"
              >
                Content 1
              </Tabs.Content>
              <Tabs.Content
                className="bg-webRgbColors-6 content rounded-lg h-80 w-full flex justify-center items-center"
                value="f2"
              >
                Content 2
              </Tabs.Content>
              <Tabs.Content
                className="bg-webRgbColors-6 content rounded-lg h-80 w-full flex justify-center items-center"
                value="f3"
              >
                Content 3
              </Tabs.Content>
            </Tabs.Root>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-12 mb-10  md:mb-32">
          <div className="flex flex-col gap-2 px-4">
            <h1 className="text-3xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#E8CDFF]   to-[#FFA6AB]">
              Integrate/Build <br /> Blazingly Fast
            </h1>
            <p className="text-center text-sm font-normal text-slate-400">
              Designed for the Developers, By the Developers. To empower them
              build or leverage the Huddle01 Infra to ship Audio/Video quickly.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:gap-8 md:grid-cols-2 place-items-center px-4">
            <div className=" h-64 w-80 lg:w-[560px] lg:h-80 border border-slate-700 bg-custom-2 rounded-2xl flex justify-center items-center lg:place-self-end ">
              GIF
            </div>
            <div className=" h-64 w-80 lg:w-[560px] lg:h-80 bg-custom-2 rounded-2xl border border-slate-700 flex justify-center items-center lg:place-self-start ">
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
            <div className="flex flex-col gap-2 text-center px-4">
              <div className="flex justify-between">
                <Image
                  src="/images/CloudL.png"
                  className=" self-start"
                  width={90}
                  height={60}
                />
                <h1 className=" text-3xl font-extrabold self-end text-transparent bg-clip-text bg-gradient-to-r from-[#F8A3A3] to-[#98ECFF]">
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
            <button className="flex justify-start items-start border border-slate-700 pt-5 pl-5 md:pb-24 pb-14 rounded-xl bg-custom-2 md:col-span-3 ">
              <a className="text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#98FFc1]   to-[#3BE191] ">
                Start Buidling
              </a>
            </button>
            <button className="flex justify-start items-start border border-slate-700 pt-5 pl-5 pb-14 md:pb-24 rounded-xl bg-custom-2 md:row-span-1 md:col-span-2 ">
              <a className="text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#B0D9FF]   to-[#3BB4E1] ">
                Pricing
              </a>
            </button>
            <button className="flex justify-start items-start border border-slate-700 pt-5 pl-5 pb-14 md:pb-24 rounded-xl bg-custom-2 md:col-start-1 md:col-span-2 ">
              <a className="text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#A0C6FF]   to-[#E7A1FF] ">
                About Us
              </a>
            </button>
            <button className="flex justify-start items-start border border-slate-700 pt-5 pl-5 pb-14 md:pb-24 rounded-xl bg-custom-2 md:col-span-3 ">
              <a className="text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#E8CDFF]   to-[#FFA6AB] ">
                Try Huddle01
              </a>
            </button>
          </div>
        </div>
      </div>
      <Toaster position="bottom-right" />
    </>
  );
}
