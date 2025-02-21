"use client";

// import NewCharacterModal from "@/components/modals/NewCharacterModal";
import { db } from "@/Lib/firebase";
import {
  collection,
  addDoc,
  getDocs,
  getDoc,
  doc,
  deleteDoc,
  updateDoc,
  query,
  where,
} from "firebase/firestore";
import { createContext, useEffect, useState, useContext } from "react";

import { authContext } from "./authContext";

export const charContext = createContext({
  characters: [],
  newCharacterSheet: async () => {},
  deleteCharacter: async () => {},
  getChar: async () => {},
  updateChar: async () => {},
});

// all elements that view this function can view all functions inside of it
export default function CharContextProvider({ children }) {
  const [characters, setCharacters] = useState([]);

  const { user } = useContext(authContext);

  const getChar = async (characterId) => {
    const docRef = doc(db, "characters", characterId);

    try {
      const docSnap = await getDoc(docRef);
      return docSnap.data();
    } catch (error) {
      throw error;
    }
  };

  const updateChar = async (characterId, updateCharacter) => {
    const docRef = doc(db, "characters", characterId);

    try {
      await updateDoc(docRef, {
        name: updateCharacter.name,
        level: updateCharacter.level,
        class: updateCharacter.class,
        race: updateCharacter.race,
      });

      // update state
      setCharacters((prevState) => {
        const updatedChar = [...prevState];

        const foundIndex = updatedChar.findIndex((character) => {
          return character.id === characterId;
        });

        if (foundIndex !== -1) {
          updatedChar[foundIndex] = {
            id: characterId,
            name: updateCharacter.name,
            level: updateCharacter.level,
            class: updateCharacter.class,
            race: updateCharacter.race,
          };
        }

        return updatedChar;
      });
    } catch (error) {
      throw error;
    }
  };

  const newCharacterSheet = async (newCharacter) => {
    const collectionRef = collection(db, "characters");

    try {
      const docSnap = await addDoc(collectionRef, newCharacter);

      setCharacters((prevState) => {
        return [
          ...prevState,
          {
            id: docSnap.id,
            ...newCharacter,
          },
        ];
      });
    } catch (error) {
      throw error;
    }
  };

  const deleteCharacter = async (characterId) => {
    const docRef = doc(db, "characters", characterId);

    try {
      await deleteDoc(docRef);

      setCharacters((prevState) => {
        return prevState.filter((i) => i.id !== characterId);
      });
    } catch (error) {
      throw error;
    }
  };

  const values = {
    characters,
    newCharacterSheet,
    deleteCharacter,
    getChar,
    updateChar,
  };

  useEffect(() => {
    if (!user) return;

    const getCharacterData = async () => {
      const collectionRef = collection(db, "characters");
      const q = query(collectionRef, where("uid", "==", user.uid));

      const docsSnap = await getDocs(q);

      const data = docsSnap.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
          createdAt: new Date(doc.data().createdAt.toMillis()),
          // firebase and react have different date formats toMillies makes them equal
        };
      });

      setCharacters(data);
    };

    getCharacterData();
  }, [user]);

  return <charContext.Provider value={values}>{children}</charContext.Provider>;
}
