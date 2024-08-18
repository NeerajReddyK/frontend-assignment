"use client"

import { useRecoilState } from "recoil"
import { themeState } from "../recoil/atoms/themeAtom"
import { useEffect } from "react";

const ThemeToggle = () => {
  const [theme, setTheme] = useRecoilState(themeState);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem('theme') || 'light';
    const preferredTheme = savedTheme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    setTheme(preferredTheme);
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    window.localStorage.setItem('theme', newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      transition={{ duration: 2}}
      className="bg-gray-200 dark:bg-gray-700 rounded px-1 transition-colors duration-1000 focus:outline-none"
    >
      {theme === 'light' ? '🌙' : '🌞'}
    </button>
  );
};

export default ThemeToggle;
