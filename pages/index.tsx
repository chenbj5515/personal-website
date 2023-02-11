import React from "react";

export default function Home() {
  return (
    <>
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
      </div>
      <div className="flex flex-col justify-center items-center">
        <a href="/articles/为什么要自己搭建一个博客">
          <p className="text-[1.675rem]  font-bold cursor-pointer text-center">
            为什么要自己搭建一个博客？
          </p>
          <p className="w-[800px]">
            “和社交媒体相比，博客更加正式和私人的。你可以完整地叙述整件事，而不是仅仅是把一个缺乏上下文的思维碎片发送出去。
            文章和推文、笔记显然是不一样的东西，所有经常阅读的人显然都是都能体会到阅读带来的沉浸感和愉悦感的，这种感觉的来源之一是好的文章都是渐进的，优雅的，逻辑连贯而上下文充分的，你可以充分了解到文章所叙述的内容的前因后果、人物动机和历史背景，随着阅读的过程，你对文章里的内容会变得熟悉，你可以推测一些可能的走向，并且会对意料之外但合理的走向感到惊喜。
            ”
          </p>
        </a>
      </div>
    </>
  );
}
