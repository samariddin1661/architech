import React from 'react'
import { GuardSpinner } from 'react-spinners-kit'
import style from "../styles/loader.module.css"

const Loader = () => {
  return (
    <div className={style.loader}>
      <div className={style.in_loader}>
        <GuardSpinner size={150} color='green'/>
{/* <GuardSpinner /> */}
      </div>
    </div>
  )
}

export default Loader
