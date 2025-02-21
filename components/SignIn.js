import React, { useContext } from "react";

import { authContext } from "@/Lib/authContext";

import { FcGoogle } from "react-icons/fc";

function Signin() {
  const { googleLoginHandler } = useContext(authContext);
  return (
    <main className="container max-w-2xl px-6 mx-auto">
      <h1 className="mb-6 text-4xl font-bold text-center">Character sign in</h1>

      <div className="flex flex-col overflow-hidden shadow-md bg-orange-300 rounded-md border-4 border-orange-800">
        <div className="h-56">
          <img
            className="object-cover w-full h-full"
            src="https://media.istockphoto.com/id/1492680507/photo/close-up-of-a-red-d20-on-a-character-sheet.jpg?b=1&s=612x612&w=0&k=20&c=Gudk08xco0Syc3wM7a1xhtI1fpJSthFZIaWgp_z3IrM="
          />
        </div>

        <div className="px-4 py-4">
          <h3 className="text-center text-2xl">Please sign in to continue</h3>
          <button
            onClick={googleLoginHandler}
            className="flex self-start gap-2 p-6 mx-auto mb-6 mt-6 text-2xl font-medium align-middle btn"
          >
            <FcGoogle className="text-4xl" />
            Google
          </button>
        </div>
      </div>
    </main>
  );
}

export default Signin;
