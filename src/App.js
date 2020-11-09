import React ,{useState}from "react"
import './App.css';
import ThemeContext from "./Context/ThemeContext"
import Header from "./Component/Header"
import HeroSection from "./Component/HeroSection"

function App() {
  const themeHook = useState("light")
  return (
    <div className="App">
      <ThemeContext.Provider value={themeHook}>
        <div>
          <Header/>
          <HeroSection/>
        </div>

      </ThemeContext.Provider>
    </div>
  );
}

export default App;
