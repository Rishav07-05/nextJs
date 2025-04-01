const Signup = () => {
  return (
    <div className="h-screen w-full bg-gradient-to-b from-gray-900 to-black flex justify-center items-center">
      <div className="w-96 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 p-8 shadow-lg">
        <h1 className="text-center text-4xl text-white font-extrabold mb-2">
          Create an Account
        </h1>
        <p className="text-center text-gray-300 mb-6">Join virtual study World </p>

        <form className="w-full space-y-5">
          <input
            type="text"
            placeholder="Username"
            className="h-12 w-full bg-white/10 border border-white/20 rounded-lg px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Email"
            className="h-12 w-full bg-white/10 border border-white/20 rounded-lg px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="h-12 w-full bg-white/10 border border-white/20 rounded-lg px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <div className="flex items-center gap-2 text-gray-300 text-sm">
            <input type="checkbox" className="accent-blue-500" />
            <span>
              I agree to the{" "}
              <a href="#" className="text-blue-400 hover:underline">
                Terms & Conditions
              </a>
            </span>
          </div>

          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg py-3 transition duration-200 shadow-md">
            Sign Up
          </button>

          <p className="text-center text-gray-300 mt-4">
            Already have an account?{" "}
            <a href="login" className="text-blue-400 hover:underline">
              Login
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
