import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (
        <header className='header'>
            <div>
                <h1>
                    <Link to="/" className='logo'>
                    <img src='./logo1.png' alt=''  className='logomarca'/>

                    </Link>
                </h1>
            </div>
            <div className='header-links'>
                <ul>
                    <li>
                        <Link to="/">Início</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to="/signup">Cadastrar-se</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to="/products">Produtos</Link>
                    </li>
                </ul>
                <ul>
             
                    <li>
                    
                        <Link to="/cart" className='cart'>
                            
                            <FontAwesomeIcon
                             icon={faShoppingCart}
                             
                              />
                            
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header