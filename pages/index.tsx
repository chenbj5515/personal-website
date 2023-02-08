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
    <div className="flex flex-col lg:flex-row">
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
      <div className="flex flex-col w-full mt-6">
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
            <img
              className="w-full lg:w-[325px] rounded-md hover:opacity-90 cursor-pointer"
              src="https://storage.googleapis.com/hallucinogenic_videos/best_friend.webp"
              alt="/搏击俱乐部"
            />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row mt-4">
          <a
            href="/articles/为什么要自己写一个博客"
            className="cursor-pointer h-[300px] lg:w-[390px] bg-white dark:bg-black dark:text-[#f0f0f0] rounded-md p-6 text-left overflow-auto"
          >
            <h1 className="text-2xl">{frontMatter[0].title}</h1>
            {frontMatter[0].description && (
              <p className="text-gray">{frontMatter[0].description}</p>
            )}
            <div className="text-base tracking-normal">
              <style>{`h2 {font-size: 24px}`}</style>
              <MDXRemote {...source[0]} />
              <div className="text-gray text-right">{frontMatter[0].date}</div>
            </div>
          </a>
          <a
            href="/articles/为什么要自己写一个博客"
            className="lg:w-[390px] mt-4 lg:mt-0 lg:ml-4 h-[300px] flex-1 cursor-pointer bg-white dark:bg-black dark:text-[#f0f0f0] rounded-md p-6 text-left overflow-auto"
          >
            <h1 className="text-2xl">{frontMatter[1].title}</h1>
            {frontMatter[1].description && (
              <p className="text-gray">{frontMatter[1].description}</p>
            )}
            <div className="text-base tracking-normal">
              <style>{`h2 {font-size: 24px}`}</style>
              <MDXRemote {...source[1]} />
              <div className="text-gray text-right">{frontMatter[1].date}</div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
  const postFilePath = path.join(POSTS_PATH, `为什么要自己写一个博客.mdx`);
  const postFilePath1 = path.join(POSTS_PATH, `这个博客是如何搭建的.mdx`);
  const source = fs.readFileSync(postFilePath);
  const source1 = fs.readFileSync(postFilePath1);

  const { content, data } = matter(source);
  const { content: content1, data: data1 } = matter(source1)

  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: data,
  });

  const mdxSource1 = await serialize(content1, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: data1,
  });

  return {
    props: {
      source: [mdxSource, mdxSource1],
      frontMatter: [data, data1],
    },
  };
};
