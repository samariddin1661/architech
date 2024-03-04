import React from 'react'
import footer from "../styles/footer.module.css"
import { FaMapMarkerAlt,FaFacebookF,FaPhone,FaDribbble,FaInstagram,FaSoundcloud,FaTwitter ,FaYoutube} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
const Footer = () => {
  return (
    <div>
      <div className={footer.footer}>
            <div className={footer.footerBox}> 
                <div className={footer.footerItem}>
                    <h3>ABOUT HOOK</h3>
                    <p>The Mahar sank now till only the long upper bill and eyes were exposed above.</p><br />
                    <p>
                        <span><FaMapMarkerAlt /><p>River Street, Blue Building 5690-970 New york City</p></span><br />
                        <span><FaPhone /><p>+ 1 234 567890</p></span><br />
                        <span><MdEmail /><p>architecture@hook.com</p></span>

                    </p>
                </div>

                <div className={footer.footerItem}>
                    <h3>NEWSLETTER</h3>
                    <p>Subscribe and stay updated with the latest news from us. We never spam!</p><br />
                    <p>Are You Ready For Us?</p>
                    <input type="email" placeholder='Enter Your Email'/><br />
                    <button>SIGN UP</button>
                </div>

                <div className={footer.footerItem}>
                    <h3>GET CONNECTED</h3>
                    <p>Now, the Pequod had sailed from Nantucket at the very beginning of the Season-on-the-Line.</p><br />
                    <p>Possible endeavor then could enable her commander to make the great stuff inside.</p>
                    <div>
                        <a href=""><FaDribbble/></a>
                        <a href=""><FaFacebookF /></a>
                        <a href=""><FaInstagram /></a>
                        <a href=""><FaSoundcloud /></a>
                        <a href=""><FaTwitter /></a>
                        <a href=""><FaYoutube /></a>                      
                    </div>
                </div>

                <div className={footer.footerItem}>
                    <h3>INSTAGRAM FEED</h3>
                </div>
            </div>
           <div>
            
           </div>
      </div>
    </div>
  )
}

export default Footer
