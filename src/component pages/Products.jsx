import React, { useContext } from 'react'
import ProductItems from './ProductItems'
import { PriceContext } from './CustomContext'

const Products = () => {

  const { price } = useContext(PriceContext)

  return (
    <div>
      <h1>Products { price }</h1>
      <ProductItems />
    </div>
  )
}

export default Products
