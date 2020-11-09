import React,{useContext} from 'react'
import ThemeContext from "../Context/ThemeContext"
import AppTheme from "../colors"
function HeroSection() {

    const theme =useContext(ThemeContext)[0];
    const currentTheme = AppTheme[theme]
    return (
        <div
        style={{
            padding:"1rem",
            backgroundColor:`${currentTheme.backgroundColor}`,
            color:`${currentTheme.textColor}`,
            textAlign:"center"
        
        }}
        >
            <h1>Context API Theme Switcher</h1>
            <p>Theme Toggler App Dark Mode And Light Mode</p>
            <button
            style=
            {{backgroundColor:"#26ae60",
              padding:"20px",
              border:`${currentTheme.boder}`
           }}
            >CLick ME</button>
        </div>
    )
}

export default HeroSection
