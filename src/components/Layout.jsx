import React from "react";
import { useTheme } from "../context/ThemeContext.jsx";
import Header from "./Header.jsx";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const { theme } = useTheme();

  return (
    <div className={`${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"} min-h-screen`}>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
