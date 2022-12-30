import React from 'react'
import './css/product.css'

const Product = ({productItem, handleAddProduct}) => {
    return (
        <>
            <div className='card' key={productItem.id}>
                <div>
                    <img className='product-image' src={productItem.image} alt={productItem.name} />
                    
                </div>
                <div>
                    <h3 className='product-name'>{productItem.name}</h3>
                </div>
                <div className='product-price'>
                   $ {productItem.price}
                </div>
                <div>
                    <button className='product-add-button'  onClick={() => handleAddProduct(productItem)}>Adicionar ao Carrinho</button>
                </div>
            </div>

        </>
    )
}

export default Product