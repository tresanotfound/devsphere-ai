export const dashboardTemplate = () => {

  return `
import React from "react";

function Dashboard() {

  return (

    <div
      className="
        p-8
        grid
        grid-cols-3
        gap-6
      "
    >

      <div className="shadow p-6 rounded-xl">
        Projects
      </div>

      <div className="shadow p-6 rounded-xl">
        Tasks
      </div>

      <div className="shadow p-6 rounded-xl">
        Analytics
      </div>

    </div>
  );
}

export default Dashboard;
`;
};