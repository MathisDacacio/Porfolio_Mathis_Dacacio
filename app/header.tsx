"use client";
import React from "react";

export default function Header() {
  return (
    <header className="flex flex-col items-center justify-between p-10 bg-slate-100 bg-gradient-to-r from-black to-gray-500 text-white">
        <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left">
            <a
              href="/"
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-black hover:text-black"
              rel="noopener noreferrer"
            >
              <h2 className={`mb-3 text-2xl font-semibold`}>
                Home{" "}
              </h2>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                Return to the main page. Explore my skills and dive into my professional journey.
              </p>
            </a>

            <a
              href="/About_me"
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 hover:text-black"
              rel="noopener noreferrer"
            >
              <h2 className={`mb-3 text-2xl font-semibold`}>
                About Me{" "}
              </h2>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                Learn more about me and my hobbies.
              </p>
            </a>
          
            <a
              href="/Contact_me"
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 hover:text-black"
              rel="noopener noreferrer"
            >
              <h2 className={`mb-3 text-2xl font-semibold`}>
                Contact me{" "}
              </h2>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                Explore where you can contact me.
              </p>
            </a>
        </div>
      </header>
  );
}