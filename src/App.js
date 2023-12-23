import "./App.css";

function App() {
  return (
    <div className="App">
      <div
        className="w-64 h-80 bg-indigo-50 rounded shadow flex flex-col justify-between p-3"
        id="login"
      >
        <form method="post" action="" className="text-indigo-500">
          <fieldset className="border-4 border-dotted border-indigo-500 p-5">
            <legend className="px-2 italic -mx-2">Welcome again!</legend>
            <label
              for="email"
              className="text-xs font-bold after:content-['*'] after:text-red-400"
            >
              Mail
            </label>
            <input
              required=""
              type="email"
              className="w-full p-2 mb-2 mt-1 outline-none ring-none focus:ring-2 focus:ring-indigo-500"
            />
            <label
              for="password"
              className="text-xs font-bold after:content-['*'] after:text-red-400"
            >
              Password
            </label>
            <input
              required=""
              type="password"
              className="w-full p-2 mb-2 mt-1 outline-none ring-none focus:ring-2 focus:ring-indigo-500"
            />
            <a
              className="block text-right text-xs text-indigo-500 text-right mb-4"
              href="#"
            >
              Forgot Password?
            </a>
            <button className="w-full rounded bg-indigo-500 text-indigo-50 p-2 text-center font-bold hover:bg-indigo-400">
              Log In
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
}

export default App;
