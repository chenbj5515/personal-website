import React from "react";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import { postFilePaths, POSTS_PATH } from "lib/mdx-utils";
import fs from "fs";
import path from "path";

// const GET_USER_CONTENT = gql`
//   query getArticle($id: uuid) {
//     article(where: { id: { _eq: $id } }) {
//       content
//     }
//   }
// `;

export default function({ source, frontMatter }: any) {

  return (
    <div className="w-full mt-6 text-left max-w-2xl mx-auto lg:mt-12">
      <div className="post-header">
        <h1>{frontMatter.title}</h1>
        {frontMatter.description && (
          <p className="description">{frontMatter.description}</p>
        )}
      </div>
      <main className="text-base tracking-wider mb-20">
        <MDXRemote {...source} />
        <div className="description text-right">{frontMatter.date}</div>
      </main>
      <footer>
        <ul className="p-6 bg-dark text-white">
          <li className="text-center text-xl lg:text-2xl my-6">
            <div className="tracking-wide uppercase opacity-40 text-xs mb-2">Previous</div>
            <a
              href="https://lee.so/blog/2022-weibo-twitter-review"
              title="2022 年微博 Twitter 文字回顾"
            >
              2022 年微博 Twitter 文字回顾
            </a>
          </li>
          <li className="text-center text-xl lg:text-2xl my-6">
            <div className="tracking-wide uppercase opacity-40 text-xs mb-2">Next</div>
            <a href="https://lee.so/blog/travel-in-haifeng" title="海丰游记">
              海丰游记
            </a>
          </li>
        </ul>
      </footer>

      <style jsx>{`
        .post-header h1 {
          margin-bottom: 0;
        }

        .post-header {
          margin-bottom: 2rem;
        }
        .description {
          opacity: 0.6;
        }
      `}</style>
    </div>
  );
};

export const getStaticProps = async ({ params }: { params: any }) => {
  const postFilePath = path.join(POSTS_PATH, `${params.slug}.mdx`);
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

export const getStaticPaths = async () => {
  const paths = postFilePaths
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ""))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};
