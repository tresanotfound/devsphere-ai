export const signupTemplate = () => {

  return `
import React, {
  useState
} from "react";

function Signup() {

  const [formData, setFormData] =
    useState({

      name: "",
      email: "",
      password: "",
    });

  const handleSubmit = (e) => {

    e.preventDefault();

    console.log(formData);
  };

  return (

    <form
      onSubmit={handleSubmit}
      className="space-y-4"
    >

      <input
        placeholder="Name"
      />

      <input
        placeholder="Email"
      />

      <input
        type="password"
        placeholder="Password"
      />

      <button>
        Signup
      </button>

    </form>
  );
}

export default Signup;
`;
};