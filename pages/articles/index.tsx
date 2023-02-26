import { postFilePaths, POSTS_PATH } from "lib/mdx-utils";
import { Tab } from "@headlessui/react";
import { keys, values } from "lodash-es";
import { useRouter } from "next/router";
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
  const router = useRouter();

  return (
    <div className="space-y-4 mt-6">
      <div className="w-full">
        <section className="p-6 bg-white dark:bg-black rounded shadow max-w-[640px] m-auto">
          <h4 className="text-base font-normal opacity-30 text-left">2023</h4>
          {posts.map((post: any) => (
            <article className="relative flex align-middle items-center justify-between mt-[10px]">
              <h2 className="m-0 leading-[1.9] text-[17px] lg:text-base font-normal tracking-[0.5px]">
                {post.filePath.replace(/\.mdx?$/, "")}
              </h2>
              <time className="text-[15px] opacity-30">{post.data.date}</time>
              <Link
                style={{ inset: "0" }}
                className="cursor-pointer absolute"
                as={`/articles/${post.filePath.replace(/\.mdx?$/, "")}`}
                key={post.filePath}
                href={`/articles/[slug]`}
              />
            </article>
          ))}
        </section>
        {/* <Tab.Group>
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
                <div className="m-2 grid grid-cols-1 lg:grid-cols-2 gap-8">
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
        </Tab.Group> */}
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
