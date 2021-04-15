import React from 'react';
import DarkThemeToggle from './components/common/DarkThemeToggle';
import Presentation from './components/landing/Presentation';

function App() {
  return (
    <section className="w-full h-full bg-white dark:bg-gray-900">
      <div className="flex flex-col">
        <div className="fixed right-4 bottom-4">
          <DarkThemeToggle />
        </div>
      </div>
      <Presentation />
    </section>
  );
}

export default App;
