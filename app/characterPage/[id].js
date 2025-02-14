//character/[id].js

import { charContext } from "@/Lib/charContext";

import { useContext } from "react";

import { useRouter } from "next/router";

const CharacterPage = ({ character }) => {
  const { characters } = useContext(charContext);

  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>Character</h1>
    </div>
  );
};

export default CharacterPage;
