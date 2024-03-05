import React from 'react'
import {  MagicSpinner } from 'react-spinners-kit'
import style from "../styles/loader.module.css"

const Loader = () => {
  return (
    <div className={style.loader}>
      <div className={style.in_loader}>
        <MagicSpinner size={150} color='green'/>
      </div>
    </div>
  )
}

export default Loader
