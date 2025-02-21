import { useContext } from "react";

import { authContext } from "@/Lib/authContext";

function Nav() {
  const { user, loading, logout } = useContext(authContext);

  return (
    <header className="container max-w-4xl px-6 py-6 mx-auto">
      {user && !loading && (
        <div className=" bg-orange-300 p-2 border-4 border-amber-800">
          <div className="flex items-center justify-between">
            {/* left nav */}

            <div className="flex items-center justify-between gap-4 pl-2 pb-2">
              {/* img */}
              <div className="h-[80px] w-[80px] rounded-full overflow-hidden">
                <img
                  className="object-cover w-full h-full"
                  src={user.photoURL}
                  alt={user.displayName}
                  referrerPolicy="no-referrer"
                />
              </div>

              <h4>Hi, {user.displayName}!</h4>
            </div>

            {/* right nav */}

            <nav className="flex items-center justify-between">
              <div>
                <button onClick={logout} className="mx-5 border btn-danger">
                  Sign Out
                </button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}

export default Nav;
