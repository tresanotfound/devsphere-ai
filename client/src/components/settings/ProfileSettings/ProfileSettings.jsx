// client/src/components/settings/ProfileSettings/ProfileSettings.jsx

import {
  useState,
} from "react";

import DashboardLayout
from "../../layout/DashboardLayout/DashboardLayout";

import {
  useAuth,
} from "../../../context/AuthContext";

import {
  FiUser,
  FiMail,
  FiMapPin,
  FiBriefcase,
  FiSave,
} from "react-icons/fi";

function ProfileSettings() {

  const {

    user,

  } = useAuth();

  const [
    formData,
    setFormData,
  ] = useState({

    name: user?.name || "",
    email: user?.email || "",
    role: user?.role || "User",
    location: "",

  });

  const handleChange = (e) => {

    setFormData({

      ...formData,
      [e.target.name]: e.target.value,

    });
  };

  const handleSubmit = (e) => {

    e.preventDefault();

    console.log("Updated Profile:", formData);

    alert("✅ Profile Updated Successfully");
  };

  return (

    <DashboardLayout>

      {/* PAGE TITLE */}

      <div className="mb-10">

        <h1
          className="
            text-5xl
            font-extrabold
            text-black
            dark:text-white
          "
        >
          Profile Settings 👤
        </h1>

        <p
          className="
            mt-3
            text-lg
            text-gray-600
            dark:text-gray-400
          "
        >
          Manage your personal profile information.
        </p>

      </div>

      {/* PROFILE CARD */}

      <div
        className="
          glass-card
          p-8
          rounded-3xl
          border
          border-black/10
          dark:border-white/10
        "
      >

        {/* TOP PROFILE */}

        <div
          className="
            flex
            flex-col
            md:flex-row
            md:items-center
            gap-6
            mb-10
          "
        >

          <img
            src={`https://ui-avatars.com/api/?name=${user?.name || "User"}&background=b9ff66&color=000`}
            alt="profile"

            className="
              w-28
              h-28
              rounded-full
              border-4
              border-[#b9ff66]
              object-cover
            "
          />

          <div>

            <h2
              className="
                text-4xl
                font-extrabold
                text-black
                dark:text-white
              "
            >
              {user?.name || "User"}
            </h2>

            <p
              className="
                mt-2
                text-lg
                text-gray-600
                dark:text-gray-400
              "
            >
              {user?.email}
            </p>

          </div>

        </div>

        {/* FORM */}

        <form
          onSubmit={handleSubmit}
        >

          <div
            className="
              grid
              grid-cols-1
              md:grid-cols-2
              gap-6
            "
          >

            {/* FULL NAME */}

            <div className="relative">

              <FiUser
                className="
                  absolute
                  top-1/2
                  left-4
                  -translate-y-1/2
                  text-[#b9ff66]
                  text-xl
                "
              />

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"

                className="
                  w-full
                  pl-12
                  pr-4
                  py-4
                  rounded-2xl
                  bg-black/5
                  dark:bg-white/5
                  border
                  border-black/10
                  dark:border-white/10
                  text-black
                  dark:text-white
                  outline-none
                  focus:border-[#b9ff66]
                  transition
                "
              />

            </div>

            {/* EMAIL */}

            <div className="relative">

              <FiMail
                className="
                  absolute
                  top-1/2
                  left-4
                  -translate-y-1/2
                  text-[#b9ff66]
                  text-xl
                "
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"

                className="
                  w-full
                  pl-12
                  pr-4
                  py-4
                  rounded-2xl
                  bg-black/5
                  dark:bg-white/5
                  border
                  border-black/10
                  dark:border-white/10
                  text-black
                  dark:text-white
                  outline-none
                  focus:border-[#b9ff66]
                  transition
                "
              />

            </div>

            {/* ROLE */}

            <div className="relative">

              <FiBriefcase
                className="
                  absolute
                  top-1/2
                  left-4
                  -translate-y-1/2
                  text-[#b9ff66]
                  text-xl
                "
              />

              <input
                type="text"
                name="role"
                value={formData.role}
                onChange={handleChange}
                placeholder="Role"

                className="
                  w-full
                  pl-12
                  pr-4
                  py-4
                  rounded-2xl
                  bg-black/5
                  dark:bg-white/5
                  border
                  border-black/10
                  dark:border-white/10
                  text-black
                  dark:text-white
                  outline-none
                  focus:border-[#b9ff66]
                  transition
                "
              />

            </div>

            {/* LOCATION */}

            <div className="relative">

              <FiMapPin
                className="
                  absolute
                  top-1/2
                  left-4
                  -translate-y-1/2
                  text-[#b9ff66]
                  text-xl
                "
              />

              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Location"

                className="
                  w-full
                  pl-12
                  pr-4
                  py-4
                  rounded-2xl
                  bg-black/5
                  dark:bg-white/5
                  border
                  border-black/10
                  dark:border-white/10
                  text-black
                  dark:text-white
                  outline-none
                  focus:border-[#b9ff66]
                  transition
                "
              />

            </div>

          </div>

          {/* SAVE BUTTON */}

          <button
            type="submit"

            className="
              mt-10
              flex
              items-center
              gap-3
              bg-[#b9ff66]
              hover:bg-[#a8f254]
              text-black
              px-8
              py-4
              rounded-2xl
              font-bold
              text-lg
              transition
              hover:scale-105
            "
          >

            <FiSave className="text-xl" />

            Save Changes

          </button>

        </form>

      </div>

    </DashboardLayout>
  );
}

export default ProfileSettings;