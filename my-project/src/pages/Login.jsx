import { useState } from "react";

function Login() {
  return (
    <section className="flex items-center justify-center bg-gray-700 h-[100vh] py-[40vh]">
      <div className="bg-YA-mainTheme-light p-8 sm:p-4 rounded-lg font-light shadow-xl bg-gray-600">
        <form className="flex flex-col gap-5 w-[25vw] ">
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-YA-Body text-gray-300">
              Email Address
            </label>
            <input
              type="text"
              id="email"
              placeholder="Enter Email Address"
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
          <button
            id="signIn"
            className="w-full py-2 px-4 cursor-pointer bg-YA-mainTheme border-none outline-none text-white transition duration-200 hover:shadow-md bg-gray-700"
          >
            Sign In
          </button>
          <p className="text-YA-Body-Small mt-25 text-gray-300 w-full leading-7 flex flex-col items-center">
            Don&apos;t have an account yet?{" "}
            <a href="/signup" className="underline text-underline-offset-6">
              Click Here to register
            </a>
          </p>
        </form>
      </div>
    </section>
  );
}

export default Login;
