import React from 'react';

const Presentation = () => (
  <div className="p-10 m-10 bg-gray-100 dark:bg-gray-800">
    <h2 className="mb-4 text-lg font-medium text-indigo-800 dark:text-indigo-500">Hi, my name is</h2>
    <h1 className="mb-2 font-sans text-5xl font-extrabold text-indigo-800 dark:text-indigo-500">William Condori</h1>
    <h2 className="mb-4 text-4xl font-extrabold text-gray-700 dark:text-gray-300">
      I build things for the web
    </h2>
    <p className="text-lg text-gray-500 dark:text-gray-400">
      Systems engineer, developer, something new is learned every day 🙂
    </p>
    <div className="flex justify-center my-10">
      <a href="mailto:williamccondori@gmail.com" className="block px-6 py-3 text-lg font-extrabold text-indigo-500 border-2 border-indigo-500 rounded hover:bg-indigo-500 hover:bg-opacity-20">Contact me</a>
    </div>
  </div>
);

export default Presentation;
