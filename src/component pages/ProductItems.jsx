import React, { useContext } from 'react'
import { ThemeContext } from './CustomContext'


const ProductItems = () => {

  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <div>
      <h1 style={{  background: (theme === "light" ? "white" : "black"), 
                    color: (theme === "light" ? "black" : "white")}}>Theme: {theme}</h1>
      <button onClick={toggleTheme}> Toggle Theme</button>
    </div>
  )
}

export default ProductItems
