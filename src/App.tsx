import { useEffect, useState } from 'react'

import './App.css'
import Header from './components/Header/Header.tsx'
import Main from './components/Main/Main.tsx'
import Footer from './components/Footer/Footer.tsx'

function App() {

  const [theme, setTheme] = useState<"light" | "dark">(() => {
      const savedTheme = localStorage.getItem("theme");

      return savedTheme === "dark" ? "dark" : "light";
  });

  function toggleTheme() {
    setTheme(current => 
      current === "light" ? "dark" : "light"
    );
  }

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div>
      <Header onToggleTheme={toggleTheme} />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
