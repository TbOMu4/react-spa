import { useTheme } from "../context/ThemeContext";
import { IoIosSunny } from "react-icons/io";
const ThemeSwitcher = () => {
  const { toggleTheme, theme } = useTheme();
  return (
    <button onClick={toggleTheme} className="fz-50 cursor-pointer text-4xl">
      {/* className={`${theme === "dark" ? "text-grey-900" : "bg-gray-800 text-white"}`} */}
      {theme === "dark" ? <IoIosSunny className="text-white" /> : <IoIosSunny className="text-grey-900" />}
    </button>
  );
};
export default ThemeSwitcher;
