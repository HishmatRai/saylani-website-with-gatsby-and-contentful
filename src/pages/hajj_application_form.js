import React from "react"

import Hajj from "./../images/hajjApplication.jpeg"
import Hajjpdf from "./../images/HAJJ.pdf"
import Navbar from './../components/home/nabvar'
import Footer from './../components/home/footer'
const HajjApplication = () => (
  <div>
    <Navbar />
    <img width="100%" src={Hajj} />
    <br /> <br /> 

    <a href={Hajjpdf} style={{color:"black", marginLeft:"86px", fontSize:'14px'}}>Click to Download Hajj Application Form</a>
<Footer />
  </div>
)

export default HajjApplication
