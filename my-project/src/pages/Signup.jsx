import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [password, setPassword] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setIsAdmin(e.target.value === "true");
  };

  const navigate = useNavigate();

  return (
    <section className="flex items-center justify-center bg-gray-700 h-[100vh] py-[40vh]">
      <div className="bg-YA-mainTheme-light p-8 sm:p-4 rounded-lg font-light shadow-xl bg-gray-600">
        <form className="flex flex-col gap-5 w-[25vw]">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-YA-Body text-gray-300">
              Firstname
            </label>
            <input
              type="text"
              id="text"
              placeholder="Enter Your Firstname"
              className="w-full border-none outline-none py-2 px-4 rounded-lg placeholder-YA-Body-Small"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-YA-Body text-gray-300">
              Lastname
            </label>
            <input
              type="text"
              id="text"
              placeholder="Enter Your Lastname"
              className="w-full border-none outline-none py-2 px-4 rounded-lg placeholder-YA-Body-Small"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-YA-Body text-gray-300">
              Username
            </label>
            <input
              type="text"
              id="text"
              placeholder="Enter Your Username"
              className="w-full border-none outline-none py-2 px-4 rounded-lg placeholder-YA-Body-Small"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-YA-Body text-gray-300">
              Email
            </label>
            <input
              type="text"
              id="email"
              placeholder="Enter Your Email"
              className="w-full border-none outline-none py-2 px-4 rounded-lg placeholder-YA-Body-Small"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="password"
              className="text-YA-Body text-gray-300 mb-15"
            >
              Mobile Number
            </label>
            <input
              type="number"
              id="number"
              placeholder="Enter Your Mobile Number"
              className="w-full border-none outline-none py-2 px-4 rounded-lg placeholder-YA-Body-Small"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="password"
              className="text-YA-Body text-gray-300 mb-15"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter Password"
              className="w-full border-none outline-none py-2 px-4 rounded-lg placeholder-YA-Body-Small"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="password"
              className="text-YA-Body text-gray-300 mb-15"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Confirm Password"
              className="w-full border-none outline-none py-2 px-4 rounded-lg placeholder-YA-Body-Small"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="admin" className="text-YA-Body text-gray-300 mb-15">
              Are You an Admin?
            </label>
            <select className="w-full border-none outline-none py-2 px-4 rounded-lg placeholder-YA-Body-Small">
              <option value="True">True</option>
              <option value="False">False</option>
            </select>
          </div>

          <button
            id="signIn"
            className="w-full py-2 px-4 cursor-pointer bg-YA-mainTheme border-none outline-none text-white transition duration-200 hover:shadow-md bg-gray-700"
          >
            Sign Up
          </button>
          <p className="text-YA-Body-Small mt-25 text-gray-300 w-full leading-7 flex flex-col items-center">
            Already have an account?
            <a href="/login" className="underline text-underline-offset-6">
              Click Here to Sign in
            </a>
          </p>
        </form>
      </div>
    </section>
  );
}

export default SignUp;
