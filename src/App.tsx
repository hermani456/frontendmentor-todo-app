import moon from "./assets/icon-moon.svg";
import sun from "./assets/icon-sun.svg";
import { useState } from "react";
import iconCross from "./assets/icon-cross.svg";
import iconCheck from "./assets/icon-check.svg";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div
      className={`min-h-screen bg-gray-100 dark:bg-gray-900 ${
        darkMode ? "dark" : ""
      }`}
    >
      {/* bg image */}
      <div
        className={`fixed top-0 left-0 w-full h-[300px] bg-cover bg-center bg-no-repeat ${
          darkMode
            ? "bg-[url('./assets/bg-desktop-dark.jpg')]"
            : "bg-[url('./assets/bg-desktop-light.jpg')]"
        }`}
      />
      <div className="relative max-w-xl w-full mx-auto p-8 pt-16">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-white text-4xl font-bold tracking-[1rem] ">
            TODO
          </h1>
          <button onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? (
              <img src={sun} alt="Toggle Light Mode" className="w-7" />
            ) : (
              <img src={moon} alt="Toggle Dark Mode" className="w-7" />
            )}
          </button>
        </div>
        <div className="relative bg-gray-800 rounded-lg">
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 size-5 rounded-full border border-gray-400"></div>
          <input
            type="text"
            placeholder="Create a new todo..."
            className="w-full pl-12 py-4 rounded-lg text-white"
          />
        </div>
        {/* todo list */}
        <div className="mt-8">
          <div className="flex items-center justify-between bg-gray-800 p-4 border-b border-gray-700 first:rounded-t-xl">
            <div className="flex items-center">
              <div className="relative mr-4 flex items-center">
                <input
                  type="checkbox"
                  className="size-5 rounded-full border border-gray-400 bg-transparent appearance-none checked:bg-gradient-to-br checked:from-blue-400 checked:to-purple-500 checked:border-transparent checked:border-0 cursor-pointer peer"
                />
                <img
                  src={iconCheck}
                  alt="Check"
                  className="absolute inset-0 w-2.5 h-2.5 m-auto opacity-0 peer-checked:opacity-100 pointer-events-none"
                />
              </div>
              <span className="text-white">Sample Todo Item</span>
            </div>
            <button className="text-gray-400 hover:text-white">
              <img
                src={iconCross}
                alt="Delete Todo"
                className="w-5 cursor-pointer"
              />
            </button>
          </div>
          <div className="flex items-center justify-between bg-gray-800 p-4 border-b border-gray-700 first:rounded-t-xl">
            <div className="flex items-center">
              <div className="relative mr-4 flex items-center">
                <input
                  type="checkbox"
                  className="size-5 rounded-full border border-gray-400 bg-transparent appearance-none checked:bg-gradient-to-br checked:from-blue-400 checked:to-purple-500 checked:border-transparent checked:border-0 cursor-pointer peer"
                />
                <img
                  src={iconCheck}
                  alt="Check"
                  className="absolute inset-0 w-2.5 h-2.5 m-auto opacity-0 peer-checked:opacity-100 pointer-events-none"
                />
              </div>
              <span className="text-white">Sample Todo Item</span>
            </div>
            <button className="text-gray-400 hover:text-white">
              <img
                src={iconCross}
                alt="Delete Todo"
                className="w-5 cursor-pointer"
              />
            </button>
          </div>
        </div>

        {/* filter */}
        <div className="flex items-center justify-center md:justify-between text-gray-400 bg-gray-800 p-4 rounded-b-xl">
          <div className="hidden md:block">1 item left</div>
          <div className="space-x-4">
            <button className="text-gray-400 hover:text-white cursor-pointer">
              All
            </button>
            <button className="text-gray-400 hover:text-white cursor-pointer">
              Active
            </button>
            <button className="text-gray-400 hover:text-white cursor-pointer">
              Completed
            </button>
          </div>
          <div className="hidden md:block">
            <button className="text-gray-400 hover:text-white cursor-pointer">
              Clear Completed
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
