"use client";

import Logo from "./logo";
import { useState } from "react";

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const isConnected = false;
  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <header className="z-30 mt-2 w-full md:mt-5">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="nes-container is-dark is-rounded relative flex h-16 items-center justify-between gap-3 rounded-2xl bg-gray-900/90 bg-opacity-65 px-3 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,theme(colors.gray.800),theme(colors.gray.700),theme(colors.gray.800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] after:absolute after:inset-0 after:-z-10 after:backdrop-blur-sm">
            {/* Site branding */}
            <div className="">
              <span><Logo /></span>
            </div>
            <button className="bg-slate-800 rounded-md justify-end flex items-center gap-2" onClick={handleButtonClick}>
              <span className={`w-3 h-3 m-3 -mr-0.5 rounded-full ${isConnected ? 'bg-green-500' : 'bg-red-500'}`}></span>
              <span className="text-white mr-2 mb-2">...</span>
            </button>
          </div>
        </div>
      </header>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-10 bg-black bg-opacity-50">
          <div className="bg-black p-4 rounded-2xl">
            <h2 className="text-lg font-bold">Coming Soon...</h2>
            <p>Connect your Xaman Wallet!</p>
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
