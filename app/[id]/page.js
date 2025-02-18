"use client";

import { useParams } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { charContext } from "@/Lib/charContext";

const LoadCharacter = () => {
  const params = useParams();
  const id = params.id;

  const { getChar } = useContext(charContext);

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

  return (
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
        <button className="btn">Update Character</button>
      </div>
    </div>
  );
};

export default LoadCharacter;
