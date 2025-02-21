"use client";

import { useRef, useContext } from "react";

import Modal from "../Modal";

// import { db } from "@/Lib/firebase";
// import { collection, addDoc, getDocs } from "firebase/firestore";

import { charContext } from "@/Lib/charContext";
import { authContext } from "@/Lib/authContext";

function NewCharacterModal({ show, onClose }) {
  const nameRef = useRef();
  const levelRef = useRef();
  const classRef = useRef();
  const raceRef = useRef();
  const { newCharacterSheet } = useContext(charContext);
  const { user } = useContext(authContext);

  // handler
  const createNewCharacter = async (e) => {
    e.preventDefault();

    const newCharacter = {
      name: nameRef.current.value,
      level: levelRef.current.value,
      class: classRef.current.value,
      race: raceRef.current.value,
      createdAt: new Date(),
      uid: user.uid,
    };

    try {
      await newCharacterSheet(newCharacter);
      nameRef.current.value = "";
      levelRef.current.value = "";
      classRef.current.value = "";
      raceRef.current.value = "";
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Modal show={show} onClose={onClose}>
      <form onSubmit={createNewCharacter}>
        <div className="flex flex-col items-center gap-2 ">
          <label className="text-2xl">Create New Character</label>
          <input
            className="w-80"
            type="text"
            name="name"
            ref={nameRef}
            placeholder="Name"
            required
          />
          <input
            className="w-80"
            type="number"
            name="level"
            ref={levelRef}
            min={1}
            max={20}
            step={1}
            required
          />
          <input
            className="w-80"
            type="text"
            name="class"
            ref={classRef}
            placeholder="Class"
            required
          />
          <input
            className="w-80"
            type="text"
            name="name"
            ref={raceRef}
            placeholder="Race"
            required
          />
          <button
            onClick={() => {
              onClose(false);
            }}
            type="submit"
            className="btn"
          >
            Create
          </button>
        </div>
      </form>
    </Modal>
  );
}

export default NewCharacterModal;
