import React from 'react'
import Product from './Product/Product';
import '../Products/css/products.css'

const Products = ({productItems, handleAddProduct}) => {



  return (
    <>
      <div className='products'>
        {
          productItems.map((productItem) => {
            return (
              <Product
              productItem={productItem}
              handleAddProduct={handleAddProduct}
              />
            )
          })
        }
      </div>

    </>

  )
}

export default Products