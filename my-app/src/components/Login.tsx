const Login = () => {
  return (
    <div className="h-screen w-full bg-gradient-to-b from-zinc-500 to-black flex justify-center items-center">
      <div className="h-3/5 w-3/12 bg-gradient-to-b from-neutral to-zinc-800 rounded-3xl border border-zinc p-6 shadow-lg">
        <h1 className="text-center text-3xl text-[lightblue] font-bold mb-5">
          Welcome to Music World
        </h1>
        <h1 className="text-center text-lg text-amber-50 font-bold mb-5">
          Get Started into your account
        </h1>
        <div className="flex justify-center w-full">
          <form className="w-full px-4">
            <input
              type="text"
              placeholder="Enter your username"
              className="h-14 w-full bg-transparent border-2 rounded-lg px-3 mb-8 placeholder:text-zinc-500"
            />
            <input
              type="email"
              placeholder="abc@gmail.com"
              className="h-14 w-full bg-transparent border-2 rounded-lg px-3 mb-8 placeholder:text-zinc-500"
            />
            <input
              type="password"
              placeholder="Enter your Password"
              className="h-14 w-full bg-transparent border-2 rounded-lg px-3 placeholder:text-zinc-500"
            />

            <div className="h-14 w-full flex justify-center mt-20 gap-2">
              <button className="bg-zinc-900 border hover:bg-zinc-950 text-white font-medium rounded-lg px-19 py-1">Login</button>
              <h1 className="mt-2 text-white">or</h1>
              <button className="bg-zinc-900 border hover:bg-zinc-950 text-white font-medium rounded-lg px-19 py-1">Signup</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
