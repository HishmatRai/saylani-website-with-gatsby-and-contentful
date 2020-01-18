import React from "react"
import style from '../styles/subheader.module.scss'
import { FaFacebookF,FaWhatsappSquare } from "react-icons/fa";
import { TiSocialInstagram ,TiSocialTwitter,TiSocialYoutubeCircular} from "react-icons/ti";


const SubHeader = () => (
<div className={style.maindiv}>
    {/* <div>
    <FaFacebookF color='white'/>
    <TiSocialTwitter color='white'/>
    <TiSocialInstagram color='white'/>
    <TiSocialYoutubeCircular color='white'/>
    <FaWhatsappSquare color='white'/>
    </div>
    <div>
    <p className={style.text}>Millions of people's life has changed, millions more awaiting your donation</p>
    </div>
   <div>
       <button className={style.btn}>Uk Donors</button>
       <button className={style.btn}>Donate Now</button>
       <button className={style.btn}>SMIT Results</button>
   </div> */}
   <ul>
       <li><FaFacebookF color='white'/></li>
       <li><TiSocialTwitter color='white'/></li>
       <li><TiSocialInstagram color='white'/></li>
       <li> <TiSocialYoutubeCircular color='white'/></li>
       <li><FaWhatsappSquare color='white'/></li>
       <li>Millions of people's life has changed, millions more awaiting your donation</li>
       <li><button>UK Donors</button></li>
       <li><button>Donate Now</button></li>
       <li><button>SMIT Results</button></li>
   </ul>
   
    </div>
)

export default SubHeader
