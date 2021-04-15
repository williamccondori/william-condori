import React from 'react';
import useDarkMode from '../../hooks/useDarkMode';

const DarkThemeToggle = () => {
  const [colorTheme, setTheme] = useDarkMode();

  return (
    <>
      <button type="button" className="p-2 text-lg bg-indigo-600 rounded-full focus:outline-none" onClick={() => setTheme(colorTheme)}>
        { colorTheme === 'dark' ? '🌙' : '🌞' }
      </button>
    </>
  );
};

export default DarkThemeToggle;
