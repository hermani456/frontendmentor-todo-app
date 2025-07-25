import moon from "./assets/icon-moon.svg";
import sun from "./assets/icon-sun.svg";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={`min-h-screen flex flex-col ${darkMode ? "dark" : ""}`}>
      <div
        className={`relative w-full min-h-[400px] bg-cover bg-center bg-no-repeat ${
          darkMode
            ? "bg-[url('./assets/bg-desktop-dark.jpg')]"
            : "bg-[url('./assets/bg-desktop-light.jpg')]"
        }`}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-xl w-full mx-auto p-8 ">
            <div className="flex items-center justify-between">
              <h1 className="text-white text-4xl font-bold tracking-[1rem]">
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
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 size-5 rounded-full border border-white/50"></div>
              <input type="text" placeholder="Create a new todo..." className="w-full pl-12 py-4 rounded-lg"/>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 bg-white dark:bg-gray-800"></div>
    </div>
  );
}

export default App;
