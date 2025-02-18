"use client";

import { useContext } from "react";

import Link from "next/link";

import Modal from "../Modal";

import { charContext } from "@/Lib/charContext";

import { FaTrashCan } from "react-icons/fa6";

function ViewCharacterModal({ show, onClose }) {
  const { characters, deleteCharacter } = useContext(charContext);

  const deleteCharacterHandler = async (characterId) => {
    try {
      await deleteCharacter(characterId);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal show={show} onClose={onClose}>
      <div>
        <h3>Characters</h3>

        {characters.map((i) => {
          return (
            <div className="flex items-center justify-between">
              <Link
                className="flex items-center justify-between"
                href={"/" + i.id}
                key={i.id}
              >
                <div className="flex justify-between gap-4 btn">
                  <p className="capitalize">Name: {i.name}</p>
                  <p className="capitalize">Level: {i.level}</p>
                  <p className="capitalize">Class: {i.class}</p>
                  <p className="capitalize">Race: {i.race}</p>
                </div>
              </Link>
              <button
                onClick={() => {
                  deleteCharacterHandler(i.id);
                }}
                className="btn-danger"
              >
                <FaTrashCan />
              </button>
            </div>
          );
        })}
      </div>
    </Modal>
  );
}

export default ViewCharacterModal;
