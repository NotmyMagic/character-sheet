"use client";

import { useParams } from "next/navigation";
import { useContext, useEffect } from "react";
import { charContext } from "@/Lib/charContext";

const Character = () => {
  const params = useParams();
  const id = params.id;
  const { getChar } = useContext(charContext);

  const getCharacterHandler = async () => {
    try {
      const char = await getChar(id);
      console.log(char);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getCharacterHandler();
  }, [id]);

  return (
    <div>
      <h1>{Character.name}</h1>
      <h1>{Character.class}</h1>
    </div>
  );
};

export default Character;
