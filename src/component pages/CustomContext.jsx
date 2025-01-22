import React, { createContext, useState } from 'react'

export const ItemContext = createContext()
export const PriceContext = createContext()
export const ThemeContext = createContext()

const CustomContext = ({ children }) => {

  const [item, setItem] = useState("PE")
  const [price, setPrice] = useState("9")
  const [theme, setTheme] = useState("light")

  function toggleTheme(){
    setTheme((prevTheme) => {
      return (prevTheme === 'light' ? 'dark' : 'light')
    })
  }

  return (
    <div>
      <ItemContext.Provider value={{ item }}>
        <PriceContext.Provider value={{ price }}>
          <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
          </ThemeContext.Provider>
        </PriceContext.Provider>
      </ItemContext.Provider>
    </div>
  )
}

export default CustomContext
