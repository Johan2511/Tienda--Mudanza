import { useState, useEffect } from 'react'
import './App.css'
import Home from '../Home/index.jsx';

function App() {

  const [darkMode, setDarkMode] = useState(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return true
    }
    return false
  });

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    // Guardar la preferencia del usuario en localStorage
    localStorage.setItem('darkMode', !darkMode);
  };

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode) {
      setDarkMode(savedMode === 'true');
    }
  }, []);


  return (
    <> 
    <div className={darkMode ? 'dark' : ''}> 
      <button onClick={toggleDarkMode} 
        className="fixed bottom-4 right-4 bg-blue-500 text-white px-4 py-2 rounded-lg">
        {darkMode ? 'Light' : 'Dark'}
        </button>
        <div className="bg-white dark:bg-gray-900 text-black dark:text-white">
          <Home />
        </div>
      </div>
    
    </>
  )
}

export default App
