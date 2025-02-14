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
} from "firebase/firestore";
import { createContext, useEffect, useState } from "react";

export const charContext = createContext({
  characters: [],
  newCharacterSheet: async () => {},
  deleteCharacter: async () => {},
  getChar: async () => {},
});

// all elements that view this function can view all functions inside of it
export default function CharContextProvider({ children }) {
  const [characters, setCharacters] = useState([]);

  const getChar = async (id) => {
    try {
      const docRef = doc(db, "characters", id);
      const docSnap = await getDoc(docRef);
      return docSnap.data();
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
  };

  useEffect(() => {
    const getCharacterData = async () => {
      const collectionRef = collection(db, "characters");
      const docsSnap = await getDocs(collectionRef);

      const data = docsSnap.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
          createdAt: new Date(doc.data().createdAt.toMillis()),
        };
      });

      setCharacters(data);
    };

    getCharacterData();
  }, []);

  return <charContext.Provider value={values}>{children}</charContext.Provider>;
}
