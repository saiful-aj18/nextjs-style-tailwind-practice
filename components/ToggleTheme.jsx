"use client";

import { useState, useEffect } from "react";

const ToggleTheme = ({ children }) => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="px-4 py-2 text-sm font-medium border rounded-lg transition-all cursor-pointer shadow-sm bg-slate-100 text-slate-900 border-slate-300 dark:bg-slate-800 dark:text-white dark:border-slate-700 hover:opacity-90"
    >
      {children} {dark ? "🌙" : "☀️"}
    </button>
  );
};

export default ToggleTheme;