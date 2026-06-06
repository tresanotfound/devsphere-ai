export const sidebarTemplate = () => {

  return `
import React from "react";

function Sidebar() {

  return (

    <aside
      className="
        h-screen
        w-64
        shadow-lg
      "
    >

      <h2
        className="
          p-4
          text-xl
          font-bold
        "
      >
        Dashboard
      </h2>

      <ul
        className="
          p-4
          space-y-4
        "
      >

        <li>Overview</li>

        <li>Projects</li>

        <li>Tasks</li>

        <li>Settings</li>

      </ul>

    </aside>
  );
}

export default Sidebar;
`;
};