import React from "react"
import style from "../styles/saylani_incubator.module.scss"
import saylaniIncubator from "./../images/Saylani-Incubator.jpg"
import Navbar from './../components/home/nabvar'
import Footer from './../components/home/footer'
const SaylaniIncubator = () => (
  <div className={style.maindiv}>
    <Navbar />
    <img src={saylaniIncubator} width="100%" />
    <br />
    <br />
    <p className={style.p1}>
      In collaboration with SMIT, the Saylani Incubators Program is designed to
      inculcate in students an advanced level of entrepreneurial vision and
      will. The program helps young freelancers and entrepreneurs solve some of
      the problems commonly associated with running a startup by providing them
      with necessary workspace, equipment, mentoring and training.
      <br />
      <br />
      The Incubator Program aims to help individuals strenghten their
      entrepreneurial motives and acquire the skills and capabilities necessary
      to play their entrepreneurial role effectively and commence new
      professional or business ventures, thus eventually helping foster a
      rapidly growing I.T industry.
      
    </p>
    <Footer/>
  </div>
)

export default SaylaniIncubator
