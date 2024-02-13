import React from 'react'
import styles from '../styles/about.module.css'
import { FaChevronDown } from "react-icons/fa";


const about = () => {
  return (
    
    <div>
        <div className={styles.We_Are1}>
        <div className={styles.We_Are}>
            <p>We Are Known For Our</p>
            <div className={styles.anima}>
                <h1 className={styles.INSPIRATION}>INSPIRATION</h1>
            </div>
            <div className={styles.btn}>
                <button ><p>LATEST WORK</p></button>
                <button><p>GET IN TOUCH</p></button>
            </div>
            <div className={styles.FaChevronDown}>
                <a href="#About"><FaChevronDown /></a>
            </div> 
        </div>
        </div>
    
      <div className={styles.abuotsection} id='About'>
        <div className={styles.ourProject}>
          <h4>Our Project & Vision</h4>
        </div>
        <h1>ABOUT OUR STUDIO</h1>
        <div className={styles.bringing}>
          <img src="https://www.pirenko-themes.com/hook/architecture/wp-content/uploads/sites/19/2016/06/missie.jpg" alt="" width={600} />
          <div className={styles.bringingtext}>
            <h3>BRINGING IDEAS TO LIFE</h3>
            <hr/>
            <p>The more I dive into this matter of whaling, and push my researches up to the very spring-head of it so much the more am I impressed with its great honourableness and antiquity and especially when I find so many great demi-gods and heroes, prophets of all sorts or truly beautiful things to be seen.<br/><br/>
            

Who one way or other have shed distinction upon it, I am transported with the reflection that I myself belong, though but subordinately, to so emblazoned a fraternity. Often and often, though this narrative must not be clogged by the details, was Granser tale interrupted while the boys squabbled.<br/><br/>

But the pretty milkmaid was much too vexed to make any answer. She picked up the leg sulkily and led her cow away, the poor animal limping on three legs. As she left them the milkmaid cast many reproachful glances over her shoulder at the clumsy strangers holding her among themselves.</p>
<img src="https://www.pirenko-themes.com/hook/architecture/wp-content/uploads/sites/19/2016/06/orange-signature.png" alt="" width={330} />
          </div>
        </div>
    </div>
    <hr/>


    <div className={styles.about_contaner}>
    <div className={styles.about_title}>
      <p className={styles.about_title_p1}>WE ARE MULTIFACETED AND GIFTED</p>
      <hr/>
      <p className={styles.about_title_p2}>At the base of the mainmast, full beneath the doubloon and the flame, the Parsee was kneeling in Ahab’s front, but with his head bowed away from him while near by but not yet have we solved the incantation of this whiteness, and learned why it appeals with such power.<br/>

From the arched and overhanging rigging, where they had just been engaged securing a spar, a number of the seamen, arrested by the glare, now cohered together, and hung pendulous, like a knot of numbed wasps from a drooping big and swirly thing.</p>
    </div>


    <div className={styles.about_box}>
      <b>      
        <p>BRANDING</p>
        <div className={styles.about_box1}></div>
      </b>
      <b>
        <p>VIDEO EDITION</p>
        <div className={styles.about_box2}></div>
      </b>
      <b>
        <p>E-COMMERCE</p>
        <div className={styles.about_box3}></div>
      </b>
      <b>
        <p>E-COMMERCE</p>
        <div className={styles.about_box4}></div>
      </b>
      
    </div>
    </div>

    </div>
  )
}

export default about
