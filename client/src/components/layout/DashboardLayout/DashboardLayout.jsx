import {

  useState,

} from 'react';

import Sidebar from '../Sidebar/Sidebar';

import Topbar from '../Topbar/Topbar';

function DashboardLayout({ children }) {

  const [mobileOpen, setMobileOpen] =
    useState(false);

  return (

    <div
      className="
        min-h-screen
        bg-[#071028]
        text-white
      "
    >

      {/* SIDEBAR */}

      <Sidebar
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
      />

      {/* CONTENT */}

      <div
        className="
          lg:ml-[280px]
          transition-all
          duration-300
        "
      >

        <Topbar
          setMobileOpen={setMobileOpen}
        />

        <main
          className="
            p-4
            sm:p-6
            md:p-8
            lg:p-10
          "
        >

          {children}

        </main>

      </div>

    </div>
  );
}

export default DashboardLayout;