"use client";

import React from "react";
import { useState } from "react";

export default function Home() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <>
      {modalIsOpen && (
        <div
          style={{
            opacity: modalIsOpen ? "opacity: 1" : "opacity: 0",
          }}
          className="absolute top-0 left-0 w-full h-full z-10 transition-opacity duration-900"
        >
          <div className="bg-orange-200 container mx-auto max-w-2xl h-[80vh] mb-4 text-red-600 py-6 px-4 rounded-lg border border-gray-600 shadow-md">
            <div className="bg-orange-300">
              <button
                onClick={() => {
                  setModalIsOpen(false);
                }}
                className="w-10 h-10 mb-4 font-bold rounded-md"
              >
                X
              </button>
            </div>
          </div>
        </div>
      )}

      <main>
        <h1 className="text-center mx-6 my-7">Character Creator</h1>
        <div className="flex items-center justify-center ">
          <button
            onClick={() => {
              setModalIsOpen(true);
            }}
            className="mx-5 my-2"
          >
            New Character
          </button>
          <button className="mx-5 my-2">Load Character</button>
        </div>
      </main>
    </>
  );
}
