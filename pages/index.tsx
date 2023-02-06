import React from "react";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import { postFilePaths, POSTS_PATH } from "lib/mdx-utils";
import fs from "fs";
import path from "path";
// import { motion } from "framer-motion";
// const inter = Inter({ subsets: ["latin"] });

export default function Home({ source, frontMatter }: any) {
  return (
    <div className="flex">
      <div className="flex sticky flex-col py-10">
        <div className="w-33 h-33 lg:w-48 lg:h-48">
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
      <div className="w-full mt-6">
        <div className="flex flex-col lg:flex-row h-[217px]">
          <iframe
            className="bg-[#fafafa] rounded-md hover:opacity-90 w-[390px] h-[217px]"
            src="https://www.youtube.com/embed/YANjwKQ1Hn8"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <div className="flex ml-4 flex-1">
            <img
              className="cursor-pointer w-[293px] rounded-md hover:opacity-90 cursor-pointe"
              src="https://storage.googleapis.com/hallucinogenic_videos/mike.webp"
              alt=""
            />
            <div className="ml-4"></div>
            <img
              className="w-[325px] rounded-md hover:opacity-90 cursor-pointer"
              src="https://storage.googleapis.com/hallucinogenic_videos/best_friend.webp"
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row mt-6 h-[28rem]">
          <a
            href="/articles/为什么要自己写一个博客"
            className="cursor-pointer lg:w-[390px] bg-white rounded-md p-6 text-left overflow-auto"
          >
            <h1 className="text-2xl">{frontMatter.title}</h1>
            {frontMatter.description && (
              <p className="text-gray">{frontMatter.description}</p>
            )}
            <div className="text-base tracking-normal mb-20">
              <style>{`h2 {font-size: 24px}`}</style>
              <MDXRemote {...source} />
              <div className="description text-right">{frontMatter.date}</div>
            </div>
          </a>

          <div className="lg:w-[390px] ml-4 flex-1 bg-white rounded-md"></div>
        </div>
      </div>
    </div>
  );
}

export const getStaticProps = async ({ params }: { params: any }) => {
  const postFilePath = path.join(POSTS_PATH, `为什么要自己写一个博客.mdx`);
  const source = fs.readFileSync(postFilePath);

  const { content, data } = matter(source);

  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: data,
  });

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
};
