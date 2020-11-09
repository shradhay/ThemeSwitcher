import React,{useContext} from 'react'
import ThemeContext from "../Context/ThemeContext"

function ThemeToggler() {
   const [themeMode,setThemeMode] = useContext(ThemeContext)
    return (
        <div
        onClick={()=>{
            setThemeMode(themeMode === "light" ? "dark" :"light")
        }}
        >
            <button
            style={{
                color:"#2C3335",
                backgroundColor:"#99AAAB",
                padding:"10px 10px"
            }}
            onCLick={()=>(
                
                themeMode === "light " ? "Turnoff" : "Light On"
            )}>Switch Theme</button>
            <span ></span>
            
        </div>
    )
}

export default ThemeToggler
