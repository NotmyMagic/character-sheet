"use client";

import { useParams } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { charContext } from "@/Lib/charContext";
import Modal from "@/components/Modal";

const LoadCharacter = () => {
  useContext(charContext);

  const { getChar, updateChar, characters } = useContext(charContext);

  const params = useParams();
  const id = params.id;

  const [updateCharacterModal, setUpdateCharacterModal] = useState(false);

  const [character, setCharacter] = useState({
    name: "",
    level: "",
    class: "",
    race: "",
  });

  // console.log(character);

  useEffect(() => {
    const fetchCharacter = async () => {
      const response = await getChar(id);

      const char = await response;

      setCharacter(char);
    };

    fetchCharacter();
  }, [id]);

  const updateCharacterHandler = async (e) => {
    e.preventDefault();

    const updateCharacter = {
      name: character.name,
      level: character.level,
      class: character.class,
      race: character.race,
    };

    try {
      await updateChar(id, updateCharacter);
      console.log(updateCharacter);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <Modal show={updateCharacterModal} onClose={setUpdateCharacterModal}>
        <form onSubmit={updateCharacterHandler}>
          <div className="flex flex-col items-center gap-2 ">
            <label className="text-2xl">Update Character</label>
            <input
              className="w-80"
              type="text"
              name="name"
              placeholder="Name"
              value={character.name}
              onChange={(e) =>
                setCharacter({ ...character, name: e.target.value })
              }
              required
            />
            <input
              className="w-80"
              type="number"
              name="level"
              placeholder="Level"
              value={character.level}
              onChange={(e) =>
                setCharacter({ ...character, level: e.target.value })
              }
              min={1}
              max={20}
              step={1}
              required
            />
            <input
              className="w-80"
              type="text"
              name="class"
              placeholder="Class"
              value={character.class}
              onChange={(e) =>
                setCharacter({ ...character, class: e.target.value })
              }
              required
            />
            <input
              className="w-80"
              type="text"
              name="race"
              placeholder="Race"
              value={character.race}
              onChange={(e) =>
                setCharacter({ ...character, race: e.target.value })
              }
              required
            />
            <button
              onClick={() => {
                setUpdateCharacterModal(false);
              }}
              type="submit"
              className="btn"
            >
              Update
            </button>
          </div>
        </form>
      </Modal>

      <div>
        <div className="m-10 p-10 flex justify-between gap-5 bg-orange-300 border-4 border-amber-800">
          <div>
            <h1 className="font-bold text-lg">Character Name</h1>
            <h2 className="text-lg">{character.name}</h2>
          </div>
          <div>
            <h1 className="font-bold text-lg">Level</h1>
            <h2>{character.level}</h2>
          </div>
          <div>
            <h1 className="font-bold text-lg">Class</h1>
            <h2 className="text-lg">{character.class}</h2>
          </div>
          <div>
            <h1 className="font-bold text-lg">Race</h1>
            <h2>{character.race}</h2>
          </div>
        </div>
        <div className="m-10 p-10 flex justify-center">
          <button
            onClick={() => {
              setUpdateCharacterModal(true);
            }}
            className="btn"
          >
            Update Character
          </button>
        </div>
      </div>
    </>
  );
};

export default LoadCharacter;
