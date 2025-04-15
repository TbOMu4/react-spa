import logo from "../assets/logo.svg";
import { NavLink, Link } from "react-router-dom";
import ThemeSwitcher from "./ThemeSwitcher.jsx";
import { useTheme } from "../context/ThemeContext.jsx";
const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

const Header = () => {
  const { theme } = useTheme();
  return (
    <header>
      <div className="container mx-auto max-w-[1280px] min-h-[125px] flex items-center justify-between py-4 px-6">
        <Link className="flex" href="">
          <img src={logo} className="mr-2" alt="Beautyness" />
          <span className={`text-3xl font-bold leading-9 text-gray-900 ${theme === "dark" ? "text-white" : "text-black"}`}>Beautyness</span>
        </Link>
        <nav className="flex items-center justify-between ">
          <ul className="flex items-center gap-8 mr-8">
            {navLinks.map(({ to, label }) => (
              <li className="text-lg leading-snug text-gray-600" key={to}>
                <NavLink to={to} end className={({ isActive }) => (isActive ? "text-blue-500" : theme === "dark" ? "text-white hover:text-blue-400" : "text-gray-600 hover:text-blue-500")}>
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
          <ThemeSwitcher />
        </nav>
      </div>
    </header>
  );
};

export default Header;
