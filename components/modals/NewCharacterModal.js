"use client";

import { useState, useRef, useEffect, useContext } from "react";

import Modal from "../Modal";

// import { db } from "@/Lib/firebase";
// import { collection, addDoc, getDocs } from "firebase/firestore";

import { charContext } from "@/Lib/charContext";

function NewCharacterModal({ show, onClose }) {
  const nameRef = useRef();
  const levelRef = useRef();
  const classRef = useRef();
  const raceRef = useRef();
  const { characters, newCharacterSheet } = useContext(charContext);

  // handler
  const createNewCharacter = async (e) => {
    e.preventDefault();

    const newCharacter = {
      name: nameRef.current.value,
      level: levelRef.current.value,
      class: classRef.current.value,
      race: raceRef.current.value,
      createdAt: new Date(),
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
          <label>Create new character</label>
          <input
            className="w-80"
            type="text"
            name="name"
            ref={nameRef}
            min={1}
            max={20}
            step={1}
            placeholder="Name"
            required
          />
          <input
            className="w-80"
            type="number"
            name="level"
            ref={levelRef}
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
          <button type="submit">Create Character</button>
        </div>
      </form>
    </Modal>
  );
}

export default NewCharacterModal;
