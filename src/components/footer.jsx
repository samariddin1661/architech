import React from 'react'
import footer from "../styles/footer.module.css"
import { FaMapMarkerAlt,FaFacebookF,FaPhone,FaDribbble,FaInstagram,FaSoundcloud,FaTwitter ,FaYoutube} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import FooterImg1 from '../assets/footerImg1.png'
import FooterImg2 from '../assets/footerImg2.png'
import FooterImg3 from '../assets/footerImg3.png'
import FooterImg4 from '../assets/footerImg4.png'
import FooterImg5 from '../assets/footerImg5.png'
import FooterImg6 from '../assets/footerImg6.png'
const Footer = () => {
  return (
    <div>
      <div className={footer.footer}>
            <div className={footer.footerBox}> 
                <div className={footer.footerItem}>
                    <h4>ABOUT HOOK</h4>
                    <p>The Mahar sank now till only the long upper bill and eyes were exposed above.</p><br />
                    <p>
                        <span><FaMapMarkerAlt /><p>River Street, Blue Building 5690-970 New york City</p></span><br />
                        <span><FaPhone /><p>+ 1 234 567890</p></span><br />
                        <span><MdEmail /><p>architecture@hook.com</p></span>

                    </p>
                </div>

                <div className={footer.footerItem}>
                    <h4>NEWSLETTER</h4>
                    <p>Subscribe and stay updated with the latest news from us. We never spam!</p><br />
                    <p>Are You Ready For Us?</p>
                    <input type="email" placeholder='Enter Your Email'/><br />
                    <button>SIGN UP</button>
                </div>

                <div className={footer.footerItem}>
                    <h4>GET CONNECTED</h4>
                    <p>Now, the Pequod had sailed from Nantucket at the very beginning of the Season-on-the-Line.</p><br />
                    <p>Possible endeavor then could enable her commander to make the great stuff inside.</p>
                    <div className={footer.footericon}>
                        <a href=""><FaDribbble/></a>
                        <a href=""><FaFacebookF /></a>
                        <a href=""><FaInstagram /></a>
                        <a href=""><FaSoundcloud /></a>
                        <a href=""><FaTwitter /></a>
                        <a href=""><FaYoutube /></a>                      
                    </div>
                </div>

                <div className={footer.footerItem}>
                    <h4>INSTAGRAM FEED</h4>
                    <span className={footer.footerimg}>
                        <a href=""><img src={FooterImg1} alt="" /></a>
                        <a href=""><img src={FooterImg2} alt="" /></a>
                        <a href=""><img src={FooterImg3} alt="" /></a>

                    </span>
                    <span className={footer.footerimg}>                        
                        <a href=""><img src={FooterImg4} alt="" /></a>
                        <a href=""><img src={FooterImg5} alt="" /></a>
                        <a href=""><img src={FooterImg6} alt="" /></a>
                    </span>

                </div>
            </div>
            <div className={footer.footerbottom}>
                <p>Hook WordPress Theme</p>
                <p>Developed with Love & Pride by Pirenko.</p>
            </div>
           <div>
            
           </div>
      </div>
    </div>
  )
}

export default Footer
