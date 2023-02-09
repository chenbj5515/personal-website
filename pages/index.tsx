import React from "react";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import { POSTS_PATH } from "lib/mdx-utils";
import fs from "fs";
import path from "path";
// import { motion } from "framer-motion";
// const inter = Inter({ subsets: ["latin"] });

export default function Home({ source, frontMatter }: any) {
  return (
    <div className="flex flex-row">
      <div className="flex flex-col py-10">
        <div className="w-[132px] h-[132px] lg:w-48 lg:h-48">
          <img
            className="rounded-full"
            src="https://avatars.githubusercontent.com/u/39869273?v=4"
            alt="profile"
          />
        </div>
        <div className="mt-8 w-[320px]">
          <div className="font-bold	text-32 text-start font-NewYork">
            CHEN BAIJIN
          </div>
          <div className="text-left pl-2 lg:text-base text-gray">
            Have fun, be awesome.
          </div>
        </div>
      </div>
      <div className="relative flex-1">
        <img
          className="w-full hover:z-10 top-[12px] lg:w-[343px] absolute rotate-[-7.9128deg] rounded-md cursor-pointer"
          src="https://storage.googleapis.com/hallucinogenic_videos/best_friend.webp"
          alt="/搏击俱乐部"
        />
        <iframe
          className="bg-[#fafafa] rotate-[6.9128deg] max-w-full rounded-md lg:w-[600px] lg:h-[320px] absolute left-[172px] top-0 hover:z-10"
          src="https://www.youtube.com/embed/YANjwKQ1Hn8"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <img
          className="absolute left-[645px] top-[90px] rotate-[19.4285deg] cursor-pointer lg:w-[343px] rounded-md"
          src="https://storage.googleapis.com/hallucinogenic_videos/mike.webp"
          alt="/猜火车"
        />
      </div>

      {/* <div className="flex flex-col w-full mt-6">
        <div className="flex flex-col lg:flex-row">
          <iframe
            className="bg-[#fafafa] max-w-full rounded-md hover:opacity-90 lg:w-[390px] lg:h-[217px]"
            src="https://www.youtube.com/embed/YANjwKQ1Hn8"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <div className="flex mt-4 lg:mt-0 flex-col lg:flex-row lg:ml-4 flex-1">
            <img
              className="cursor-pointer w-full lg:-[293px] rounded-md hover:opacity-90 cursor-pointe"
              src="https://storage.googleapis.com/hallucinogenic_videos/mike.webp"
              alt="/猜火车"
            />
            <div className="ml-4"></div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row mt-4">
          <img
            className="w-full lg:w-[325px] rounded-md hover:opacity-90 cursor-pointer"
            src="https://storage.googleapis.com/hallucinogenic_videos/best_friend.webp"
            alt="/搏击俱乐部"
          />
        </div>
      </div> */}
    </div>
  );
}
