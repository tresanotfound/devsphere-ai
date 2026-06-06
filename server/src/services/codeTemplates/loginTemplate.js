export const loginTemplate = () => {

  return `
import React, {
  useState
} from "react";

function Login() {

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const handleSubmit = (e) => {

    e.preventDefault();

    console.log({
      email,
      password,
    });
  };

  return (

    <div className="min-h-screen flex items-center justify-center">

      <form
        onSubmit={handleSubmit}
        className="space-y-4 p-6 shadow-lg rounded-xl"
      >

        <h2 className="text-2xl font-bold">
          Login
        </h2>

        <input
          type="email"
          placeholder="Email"
          className="border p-2 w-full"
        />

        <input
          type="password"
          placeholder="Password"
          className="border p-2 w-full"
        />

        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Login
        </button>

      </form>

    </div>
  );
}

export default Login;
`;
};