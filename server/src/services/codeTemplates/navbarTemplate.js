export const navbarTemplate = () => {

  return `
import React from "react";

function Navbar() {

  return (

    <nav
      className="
        flex
        justify-between
        items-center
        px-6
        py-4
        shadow
      "
    >

      <h1 className="font-bold text-xl">
        DevSphere
      </h1>

      <ul
        className="
          flex
          gap-6
        "
      >

        <li>Home</li>

        <li>Projects</li>

        <li>Contact</li>

      </ul>

    </nav>
  );
}

export default Navbar;
`;
};