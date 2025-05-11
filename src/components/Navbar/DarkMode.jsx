import LightButton from '../../assets/website/light-mode-button.png'
import DarkButton from '../../assets/website/dark-mode-button.png'
import { useEffect, useState } from 'react'

const DarkMode = () => {
    const [theme,setTheme]=useState(localStorage.getItem("theme")
    ?localStorage.getItem("theme"):"light")

    const element =document.documentElement; //เข้าถึง html element
    console.log(element);
    
    //เพิ่ม theme ไปที่ localstorage และ html element
    useEffect(()=>{
        localStorage.setItem("theme",theme)
        if(theme === "dark"){
            element.classList.add("dark")
            element.classList.add("dark")
        }else{
            element.classList.remove("light")
            element.classList.remove("dark")
        }
    })
  return (
    <div className='relative'>
        <img src={LightButton} alt="LightButton" 
        className={`w-12 cursor-pointer absolute right-0 z-10 
        ${theme === 'dark' ? "opacity-0" : "opacity-100"}
        transition-all duration-300`}
        onClick={()=>setTheme(theme === "dark" ? "light" : "dark")}/>
        <img src={DarkButton} alt="DarkButton" 
        className={`w-12 cursor-pointer`}
        onClick={()=>setTheme(theme === "dark" ? "light" : "dark")}/>
    </div>
  )
}
export default DarkMode