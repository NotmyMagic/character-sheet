"use client";

import React, { useContext } from "react";
import { useState, useRef } from "react";

import NewCharacterModal from "@/components/modals/NewCharacterModal";
import ViewCharacterModal from "@/components/modals/ViewCharacterModal";

export default function Home() {
  const [showNewCharacterModal, setShowNewCharacterModal] = useState(false);
  const [showViewCharacterModal, setShowViewCharacterModal] = useState(false);

  return (
    <>
      <NewCharacterModal
        show={showNewCharacterModal}
        onClose={setShowNewCharacterModal}
      />

      <ViewCharacterModal
        show={showViewCharacterModal}
        onClose={setShowViewCharacterModal}
      />

      <main>
        <h1 className="text-center mx-6 my-7">Character Creator</h1>
        <div className="flex items-center justify-center ">
          <button
            onClick={() => {
              setShowNewCharacterModal(true);
            }}
            className="mx-5 my-2"
          >
            New Character
          </button>
          <button
            onClick={() => {
              setShowViewCharacterModal(true);
            }}
            className="mx-5 my-2"
          >
            Load Character
          </button>
        </div>
      </main>
    </>
  );
}
