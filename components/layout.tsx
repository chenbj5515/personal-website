import React from "react";
import Head from "next/head";
import Image from "next/image";

export default function Layout({ children }: { children: any }) {
  const [theme, setTheme] = React.useState("light");

  function handleToggle() {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
    document.body.classList.toggle("dark");
  }

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-full min-h-full flex px-24 text-black dark:bg-dark dark:text-white flex-col align-middle text-center">
        <header className="w-full flex-col z-10 bg-white dark:bg-dark opacity-90 justify-center sticky top-0 h-20 flex backdrop-opacity-10">
          <div className="w-full flex flex-row justify-between h-10">
            <label className="text-base relative inline-block w-14 h-7">
              <input
                onChange={handleToggle}
                checked={theme === "light"}
                className="peer opacity-0 w-0 h-0"
                type="checkbox"
              />
              <span className="transition duration-300 ease-in-out peer-checked:translate-x-5 peer-checked:shadow-full-moon left-2 top-1 rounded-full shadow-crescent absolute h-5 w-5 z-[1]"></span>
              <span className="peer-checked:bg-blue absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-black transition duration-500 rounded-3xl"></span>
            </label>
            <a
              className="flex align-middle text-center"
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="text-base">By</p>

              <Image
                src="/assets/svgs/vercel.svg"
                alt="Vercel Logo"
                className={theme === "light" ? "" : "invert"}
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </header>

        {children}
      </main>
    </>
  );
}
