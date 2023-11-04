function Login() {
  return (
    <div className="bg-YA-mainTheme-light p-8 sm:p-4 rounded-lg font-light shadow-lg">
      <div className="flex flex-col items-start">
        <div className="mb-15 sm:mb-25">
          <label htmlFor="email" className="text-YA-Body text-gray-300 mb-15">
            Email Address
          </label>
          <input
            type="text"
            id="email"
            placeholder="Enter Email Address"
            className="w-full border-none outline-none py-2 px-4 rounded-lg placeholder-YA-Body-Small"
          />
        </div>
        <div className="mb-25">
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
          className="w-full py-2 px-4 cursor-pointer bg-YA-mainTheme border-none outline-none text-YA-white transition duration-200 hover:shadow-md"
        >
          Sign In
        </button>
        <p className="text-YA-Body-Small mt-25 text-gray-300 w-full leading-7">
          Don&apos;t have an account yet?
          <a href="./signup.html" className="underline text-underline-offset-6">
            Click Here to register
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;
