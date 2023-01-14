import { getAllPosts } from "lib/data";
import Link from "next/link";
import { useState } from "react";
import { Tab } from "@headlessui/react";

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

("use client");
export default function Articles({ posts }: { posts: any }) {
  const [categories] = useState({
    React: [],
    SmallTalk: [
      {
        id: 1,
        title: "为什么要自己写一个博客？",
        sub_title: "博客是特别的，尤其是自己的博客。",
      },
    ],
    History: [
      {
        id: 1,
        title: "中日关系史",
        sub_title: "背叛与征服"
      },
      {
        id: 2,
        title: "资本主义的发展脉络",
        sub_title: "左还是右"
      }
    ],
    ["System Design"]: [
      {
        id: 1,
        title: "这个博客是如何搭建的？",
        sub_title: "NextJs/TailwindCss/HeadlessUI",
      },
    ]
  });
  return (
    <div className="space-y-4 mt-6">
      <div className="w-full">
        <Tab.Group>
          <Tab.List className="flex space-x-1 rounded-xl p-1">
            {Object.keys(categories).map((category) => (
              <Tab
                key={category}
                className={({ selected }) =>
                  classNames(
                    "w-full rounded-lg py-2.5 text-sm font-medium leading-5",
                    selected
                      ? "bg-white shadow outline-none"
                      : "text-blue-100 hover:bg-white/[0.12] hover:shadow-lg"
                  )
                }
              >
                {category}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="mt-2">
            {Object.values(categories).map((posts, idx) => (
              <Tab.Panel
                key={idx}
              >
                <ul className="m-2">
                  {posts.map((post) => (
                    <div className="group mt-3 rounded-lg text-gray-800 w-58 h-34 p-4 cursor-pointer bg-white relative shadow-card hover:shadow-lg">
                      <h3 className="p-2 text-xl font-bold">{post.title}</h3>
                      <p className="p-1.5 text-sm text-gray">{post.sub_title}</p>
                      <div className="text-grey text-xs">
                        April 15, 2022
                      </div>
                    </div>
                  ))}
                </ul>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts();
  return {
    props: {
      posts: allPosts.map(({ data, content, slug }) => ({
        ...data,
        content,
        slug,
      })),
    },
  };
}
