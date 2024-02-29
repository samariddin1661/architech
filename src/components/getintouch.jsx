import React from 'react'
import getintouch from '../styles/getintouch.module.css'
import { FaRegMessage } from "react-icons/fa6";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { HiCode } from "react-icons/hi";
import { LuPencilRuler } from "react-icons/lu";
const Getintouch = () => {
  return (
    <div className={getintouch.getintouch}>
         <div className={getintouch.get}>
            <div className={getintouch.ourProject}>
                <h4>Wa're All Ears</h4>
            </div>
            <h1>GET IN TOUCH</h1>
            <p>It is some systematized exhibition of the whale in his broad genera, that I would now fain put before you. Yet is it no easy task. The classification of the constituents of a chaos, nothing less is here essayed.</p>
        </div>
        <div className={getintouch.getContact}>
            <div className={getintouch.box}>
                <i><FaRegMessage/></i>
                <h3>Come And Meet Us</h3>
                <p>River Street, 1st. floor
5690-970 New york City</p>
            </div>
            <div className={getintouch.box}>
                <i><MdOutlinePhoneIphone/></i>
                <h3>Give Us A Call</h3>
                <p>+1 234 567 890</p>
            </div>
            <div className={getintouch.box}>
                <i><HiCode/></i>
                <h3>Send Us A Message</h3>
                <p>withlove@hook.com</p>
            </div>
            <div className={getintouch.box}>
                <i><LuPencilRuler/></i>
                <h3>Something Else</h3>
                <p>Feeling Really Well</p>
            </div>
        </div>
    </div>
  )
}

export default Getintouch
