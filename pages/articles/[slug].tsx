import { useRouter } from "next/router";
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

const Child = ({source, frontMatter}: any) => {
  return ( 
    <div className="mt-6 px-5 text-left max-w-2xl mx-auto lg:mt-16">
      <div className="post-header">
        <h1>{frontMatter.title}</h1>
        {frontMatter.description && (
          <p className="description">{frontMatter.description}</p>
        )}
      </div>
      <main className="text-lg tracking-wider">
        <MDXRemote {...source} />
      </main>

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

export default Child;

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
