import React from "react"
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact"
import Styles from '../styles/footer.module.scss'
import { MdPhone } from "react-icons/md"
import { AiOutlineMail,AiFillTwitterCircle } from "react-icons/ai"
import {TiSocialFacebook, TiWorld, TiSocialYoutubeCircular,TiSocialInstagram,TiSocialTwitter} from "react-icons/ti"
// import { FaFacebook } from "react-icons/fa";

const FooterPagePro = () => {
  return (
    <MDBFooter
      style={{ backgroundColor: "#25272E" }}
      className="font-small pt-4 mt-4">
      <MDBContainer >
        <MDBRow className="text-center text-md-left mt-3 pb-3">
          <MDBCol md="3" lg="3" xl="4" className="mx-auto mt-3">
            <p  className="text-uppercase mb-4">
              Head Office,
              <br />
              <span className={Styles.span}> A-25, Bahadurabad Chowrangi Karachi, Pakistan</span>
            </p>
            <MdPhone color="#427900" /> <span className={Styles.icon} >UAN: 111-729-526</span>
            <br />
            <TiWorld color="#427900" /> <span className={Styles.icon} >UAN: 111-729-526</span>
            <br />
            <MdPhone color="#427900" /> <span className={Styles.icon} >CELL: 92-311-1729526</span>
            <br />
            <MdPhone color="#427900" /> <span className={Styles.icon} >USA NO +1(716)941 7792</span>
            <br />
            <MdPhone color="#427900" /> <span className={Styles.icon} >UK NO (+44)115 970 6256</span>
            <br />
            <AiOutlineMail color="#427900" />
            <span className={Styles.icon}> info@saylaniwelfare.com</span>
          </MDBCol>

          <hr className="w-100 clearfix d-md-none" />
          <MDBCol md="2" lg="2" xl="2" className="mx-auto mt-3">
            <span className="text-uppercase mb-4 font-weight-bold">Useful Links</span><br />
            <hr className={Styles.hr} 
              style={{ width: "60px"}}
            />
            <span className={Styles.span2}></span>
        
          </MDBCol>
          <hr className="w-100 clearfix d-md-none" />
          <hr className="w-100 clearfix d-md-none" />
          <MDBCol md="4" lg="3" xl="3" className="mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">
              Connect With Us
            </h6>
        
          <a href="https://www.facebook.com/">  <TiSocialFacebook className={Styles.icon1} style={{backgroundColor : '#316DD9',width : 30 , height : 30,borderRadius : 50, marginLeft:"6px"}}/></a>
          <a href="https://www.twitter.com/">  <TiSocialTwitter className={Styles.icon1} style={{backgroundColor : '#316DD9',width : 30 , height : 30,borderRadius : 50, marginLeft:"6px"}}/></a>
          <a href="https://www.instagram.com/"> <TiSocialInstagram  style={{backgroundColor : '#316DD9',width : 30 , height : 30,borderRadius : 50, marginLeft:"6px"}}/>  </a>
          <a href="https://www.youtube.com/">  <TiSocialYoutubeCircular style={{backgroundColor : '#316DD9',width : 30 , height : 30,borderRadius : 50, marginLeft:"6px"}}/></a>
            
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div
        className="footer-copyright text-center py-3"
        style={{ backgroundColor: "#316DD9" }}
      >
        <MDBContainer className={Styles.footer} >
               Copyright  &copy;   {new Date().getFullYear()} Saylani Welfare
        </MDBContainer>
      </div>
    </MDBFooter>
  )
}

export default FooterPagePro
