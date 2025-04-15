import React from "react";
import { RouterProvider } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary.jsx";
import router from "./router/router.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";

const MainApp = () => {
  return <RouterProvider router={router} />;
};

function App() {
  return (
    <ThemeProvider>
      <ErrorBoundary>
        <MainApp />
      </ErrorBoundary>
    </ThemeProvider>
  );
}
export default App;
