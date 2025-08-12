import sun from "../assets/icon-sun.svg";
import moon from "../assets/icon-moon.svg";

export default function Header({
  darkMode,
  setDarkMode,
}: {
  darkMode: boolean;
  setDarkMode: (v: boolean) => void;
}) {
  return (
    <div className="flex items-center justify-between mb-8">
      <h1 className="text-white text-4xl font-bold tracking-[1rem] ">TODO</h1>
      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? (
          <img src={sun} alt="Toggle Light Mode" className="w-7" />
        ) : (
          <img src={moon} alt="Toggle Dark Mode" className="w-7" />
        )}
      </button>
    </div>
  );
}
