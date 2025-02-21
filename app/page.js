"use client";

import { useContext, useState } from "react";

import { authContext } from "@/Lib/authContext";

import NewCharacterModal from "@/components/modals/NewCharacterModal";
import ViewCharacterModal from "@/components/modals/ViewCharacterModal";
import SignIn from "@/components/SignIn";

export default function Home() {
  const [showNewCharacterModal, setShowNewCharacterModal] = useState(false);
  const [showViewCharacterModal, setShowViewCharacterModal] = useState(false);

  const { user } = useContext(authContext);

  if (!user) {
    return <SignIn />;
  }

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
        <h1 className="text-center mx-6 my-7 text-4xl font-bold">
          Character Creator
        </h1>
        <div className="flex items-center justify-center ">
          <button
            onClick={() => {
              setShowNewCharacterModal(true);
            }}
            className="mx-5 my-2 btn"
          >
            New Character
          </button>
          <button
            onClick={() => {
              setShowViewCharacterModal(true);
            }}
            className="mx-5 my-2 btn"
          >
            Load Character
          </button>
        </div>
      </main>
    </>
  );
}
