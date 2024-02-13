import React, { useEffect, useState } from 'react'
import Logo from "../assets/logo1.webp"
import { FaInstagram,FaTelegram,FaBars,FaGithub,FaFacebook, } from "react-icons/fa";
// import { GoChevronDown } from "react-icons/go";
import styles from "../styles/navbar.module.css"

const Navbar = () => {
  const [toggle,setToggle] = useState(true)
  const [scroll,setScroll] = useState(true)

  const handleScroll = () => {
    const scrollPosition = window.scrollY; // => scroll position
    if(scrollPosition>500 ){
      setScroll(true)
    }
    else{
      setScroll(false)
    }
}; 

useEffect(() => {
  handleScroll();
  window.addEventListener("scroll", handleScroll);
  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
  }, []);

  return (
   
    <div className={styles.nav} >
    <div className={scroll ? styles.navbar : styles.navbarScroll}>
      <div className={styles.logo}>
        <img src={Logo} alt="Logo" />
      </div>

      <div className={toggle ? styles.navItems : styles.toggle}>
        <ul>
          <li><a href="#Home">HOME</a></li>
          <li><a href="#">ABOUT</a></li>
          <li><a href="#">WORK</a></li>
          <li><a href="#">SERVICE</a></li>
          <li><a href="#">TEAM</a></li>
          <li><a href="#">CONTACT</a></li>
        </ul>
      </div>

      <div className={styles.icon}>
        <i><FaInstagram /></i>
        <i><FaTelegram /></i>
        <i><FaGithub /></i>
        <i><FaFacebook /></i>
        <i className={styles.bar} onClick={()=>setToggle(!toggle)}><FaBars/></i>
      </div>
    </div>

    {/* <div className={styles.We_Are}>
        <p>We Are Known For Our</p>
        <div className={styles.anima}>
            <h1 className={styles.INSPIRATION}>INSPIRATION</h1>
        </div>
        <div className={styles.btn}>
          <button ><p>LATEST WORK</p></button>
          <button><p>GET IN TOUCH</p></button>
        </div>
        <div className={styles.FaChevronDown}>
          <a href="#"><FaChevronDown /></a>
        </div> 
    </div>     */}
    
    </div>

   

  )
}

export default Navbar