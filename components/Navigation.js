function Nav() {
  return (
    <header className="container max-w-4xl px-6 py-6 mx-auto bg-orange-300 border-b-4 border-r-4 border-l-4 border-amber-800">
      <div className="flex items-center justify-between">
        {/* left nav */}
        <div className="flex items-center justify-between gap-4">
          <div className="h-[80px] w-[80px] rounded-full overflow-hidden">
            <img
              className="object-cover w-full h-full"
              src="https://images.pexels.com/photos/1383766/pexels-photo-1383766.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
          </div>

          <h4>Hi, user!</h4>
        </div>

        {/* right nav */}
        <nav className="flex items-center justify-between">
          <div>
            <button className="mx-5 border btn-danger">Sign Out</button>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Nav;
