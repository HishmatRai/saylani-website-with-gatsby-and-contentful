import React from "react"

import Hajj from "./../images/hajjApplication.jpeg"
import Hajjpdf from "./../images/HAJJ.pdf"
const HajjApplication = () => (
  <div>
    <img width="100%" src={Hajj} />
    <br /> <br /> 

    <a href={Hajjpdf} style={{color:"black", marginLeft:"86px", fontSize:'14px'}}>Click to Download Hajj Application Form</a>
  </div>
)

export default HajjApplication
