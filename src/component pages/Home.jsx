import React, { useContext } from 'react'
import { ItemContext } from './CustomContext'


const Home = () => {

  const { item } = useContext(ItemContext)

  return (
    <div>
      <h1>Home {item}</h1>
    </div>
  )
}

export default Home
