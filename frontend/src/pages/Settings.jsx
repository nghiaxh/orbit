import { useState, useEffect } from "react";

function Settings() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const toggleTheme = () => {
    localStorage.setItem("theme", theme === "light" ? "dark" : "light");
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    (document.documentElement.setAttribute("data-theme", theme), [theme]);
  });
  return (
    <>
      <div className="p-5 sm:p-8">
        <div>SETTINGS</div>
        <div>
          Dark mode <input type="checkbox" checked={theme === "dark" ? "checked" : ""} value="synthwave" className="toggle theme-controller" onChange={toggleTheme} />
        </div>
      </div>
    </>
  );
}

export default Settings;
