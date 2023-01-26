import React from 'react'
import classes from "./HeaderBanner.module.css"
import BannerImage from "../../Asset/parralex.jpg"

const HeaderBanner = () => {
  return (
    <figure className={classes.image_container}>
      <img src={BannerImage} alt="Food Banner Image" />
    </figure>
  )
}

export default HeaderBanner