import React from "react";

const Nav = () => {
  return (
    <header className="bg-emerald-400 text-black">
      <nav className="flex justify-between items-center p-5">
        <h1 className="text-5xl font-bold">Nutricipe</h1>
        <div>
          <a href="#about" className=" font-bold text-3xl">
            About
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
