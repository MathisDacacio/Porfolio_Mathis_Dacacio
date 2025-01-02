"use client";
import React from "react";

export default function Footer() {
  return (
    
    <footer className="relative flex justify-center bg-gray-800">
      <div className="w-9 h-9 bg-white flex justify-center rounded-full cursor-pointer relative border-none ">
        <button
          className="hover:bg-white rounded-full w-9 h-9 flex justify-center items-center border-2 border-black"
          onClick={() => window.scrollTo(0, 0)}
        >
          <svg height="1.2em" viewBox="0 0 512 512">
            <path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"></path>
          </svg>
        </button>
      </div>
    </footer>
  );
}
