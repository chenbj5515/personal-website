import { postFilePaths, POSTS_PATH } from "lib/mdx-utils";
import { Tab } from "@headlessui/react";
import { keys, values } from "lodash-es";
import Link from "next/link";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

interface IArticle {
  content: string;
  type: EArtcileTypes;
  title: string;
  id: string;
  sub_title: string;
}

enum EArtcileTypes {
  React = 0,
  History = 1,
  SmallTalk = 2,
  SystemDesign = 3,
}

interface IProps {
  posts: IArticle[];
}

interface ICategories {
  [key: string]: IArticle[];
}

("use client");
export default function Articles(props: any) {
  const { posts } = props;

  const categories = {
    0: [],
    1: [],
    2: posts,
    3: []
  }

  return (
    <div className="space-y-4 mt-6">
      <div className="w-full">
        <Tab.Group>
          <Tab.List className="flex space-x-1 rounded-xl p-1">
            {keys(categories).map((category) => (
              <Tab
                key={category}
                className={({ selected }) =>
                  classNames(
                    "w-full rounded-lg py-2.5 text-sm font-medium leading-5",
                    selected
                      ? "bg-white dark:bg-black dark:text-white shadow outline-none"
                      : "text-blue-100 hover:bg-white/[0.12] hover:shadow-lg"
                  )
                }
              >
                {EArtcileTypes[+category]}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="mt-2">
            {values(categories).map((posts, idx) => (
              <Tab.Panel key={idx}>
                <div className="m-2 grid grid-cols-2 gap-8">
                  {posts.length > 0 &&
                    posts.map((post: any) => (
                      <Link
                        as={`/articles/${post.filePath.replace(/\.mdx?$/, "")}`}
                        key={post.filePath}
                        href={`/articles/[slug]`}
                      >
                        <div className="rounded-[9px] dark:bg-dark-border hover:dark:shadow-fancy">
                          <div className="bord dark:bg-black transition duration-150 hover:scale-x-[0.99] hover:scale-y-[0.94] rounded-lg p-4 cursor-pointer bg-white shadow-card hover:shadow-lg">
                            <h3 className="p-2 text-xl font-bold">
                              {post.filePath.replace(/\.mdx?$/, "")}
                            </h3>
                            <p className="p-1.5 text-sm text-gray">
                              {post.data.description}
                            </p>
                            <div className="text-grey text-xs">
                            {post.data.date}
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                </div>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
}

export function getStaticProps() {
  const posts = postFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath));
    const { content, data } = matter(source);

    return {
      content,
      data,
      filePath,
    };
  });

  return { props: { posts } };
}
