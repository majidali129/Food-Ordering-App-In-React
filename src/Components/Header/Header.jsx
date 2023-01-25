import React from 'react'
import classes from "./Header.module.css"
import HeaderBanner from './HeaderBanner'
import CartButton from "../../Cart/CartButton"

const Header = () => {
  return (
    <header className={classes.header}>
        <nav className={classes.nav}>
            <div className={classes.logo}>
                <h1>FreshFoods</h1>
            </div>
            <div className={classes.cartButton}>
                <CartButton/>
            </div>
        </nav>

    
        {/* <HeaderBanner/> */}
    </header>
  )
}

export default Header