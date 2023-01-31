import React from 'react'
import classes from "./Header.module.css"
import HeaderBanner from './HeaderBanner'
import CartButton from "../../Cart/CartButton"
import MealSummary from '../MealSummary/MealSummary'

const Header = (props) => {
  return (
    <header className={classes.header}>
        <nav className={classes.nav}>
            <div className={classes.logo}>
                <h1>FreshFoods</h1>
            </div>
            <div className={classes.cartButton}>
                <CartButton onShow={props.onShow}/>
            </div>
        </nav>
        <HeaderBanner/>

        <MealSummary/>

    </header>
  )
}

export default Header