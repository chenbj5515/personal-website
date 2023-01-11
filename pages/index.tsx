import React from "react";
import Head from "next/head";
import Image from "next/image";
import { Inter } from '@next/font/google';
import { motion } from "framer-motion";
const inter = Inter({ subsets: ['latin'] });

export default function Home() {
    const sectionsRef = React.useRef<HTMLDivElement>(null);
    const [sections, setSections] = React.useState([
        {
            name: "plans",
            x: 10,
        },
        {
            name: "articles",
            x: 10
        },
    ]);
    const [theme, setTheme] = React.useState("dark");

    function handleHoverStart(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
        const itemID = e.currentTarget.getAttribute("itemID");
        if (itemID)
        setSections(sections.map(section => {
            if (section.name === itemID) {
                return ({
                    name: section.name,
                    x: 30,
                })
            }
            return section;
        }))
    }

    function handleHoverEnd(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
        const itemID = e.currentTarget.getAttribute("itemID");
        if (itemID)
        setSections(sections.map(section => {
            if (section.name === itemID) {
                return ({
                    name: section.name,
                    x: 10,
                })
            }
            return section;
        }))
    }

    // const toggle = document.querySelector(".theme-toggle");
    //     toggle.addEventListener("click", () => {
        
    // });

    function handleToggle() {
        if (theme === "dark") {
            setTheme("light");
        }
        else {
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
            <main className="h-full flex p-24 text-black dark:bg-black dark:text-white flex-col text-3xl align-middle text-center">
                <div className="absolute toggle cursor-pointer" onClick={handleToggle}>
                    <Image
                        src={theme === "dark" ? "/assets/svgs/light.svg" : "/assets/svgs/dark.svg"}
                        alt="Vercel Logo"
                        className={theme === "dark" ? "" : "invert"}
                        width={theme === "dark" ? 30 : 26}
                        height={theme === "dark" ? 30 : 26}
                        priority
                    />
                </div>
                <div className="flex flex-row-reverse">
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
                        className={theme === "dark" ? "" : "invert"}
                        width={100}
                        height={24}
                        priority
                    />
                    </a>
                </div>
                <div className="font-NewYork p-32 tracking-widest">
                    Chen's personal website
                </div>
                <div className="grid grid-cols-2 gap-8" ref={sectionsRef}>
                    {
                        sections.map(section => (
                            <a
                                itemID={section.name}
                                href={`/${section.name}`}
                                className="h-20"
                                onMouseEnter={handleHoverStart}
                                onMouseLeave={handleHoverEnd}
                                key={section.name}
                            >
                                <h2 className={inter.className}>
                                    <span className="font-semibold">
                                        {section.name}
                                    </span>
                                    <motion.div
                                        className="inline-block"
                                        animate={{x: section.x}}
                                    >
                                        -&gt;
                                    </motion.div>
                                </h2>
                            </a>
                        ))
                    }
                    {/* <a href="/plans" className="h-20">
                        <h2 className={inter.className}>
                            <span className="font-semibold">
                                Plans
                            </span>
                            <motion.div
                                className="inline-block"
                                animate={{x1}}
                            >
                                -&gt;
                            </motion.div>
                        </h2>
                    </a>
                    <a href="/articles" ref={sectionRef} className="h-20">
                        <h2 className={inter.className}>
                            <span className="font-semibold">
                                Articles
                            </span>
                            <motion.div
                                className="inline-block"
                                animate={{x2}}
                            >
                                -&gt;
                            </motion.div>
                        </h2>
                    </a>
                    <a href=""></a>
                    <a href=""></a> */}
                </div>
            </main>
        </>
    );
}